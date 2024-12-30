import { Hono } from "hono";
import { authMiddleware } from "../middleware";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@omalve/common";

export const blogRouter = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
  Variables: {
    id: string;
  };
}>();

blogRouter.use("/*", authMiddleware);

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success, data } = createPostInput.safeParse(body);

  if (!success) {
    c.status(413);
    return c.json({
      message: "Invalid inputs!",
    });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: c.get("id"),
      },
    });

    if (!newPost) {
      return c.json({
        message: "Post not created!",
      });
    }

    return c.json({
      id: newPost.id,
    });
  } catch (e) {
    c.status(413);
    return c.json({
      message: "Invalid inputs!",
    });
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success, data } = updatePostInput.safeParse(body);

  if (!success) {
    c.status(413);
    return c.json({
      message: "Invalid inputs!",
    });
  }

  try {
    const updatedPost = await prisma.post.update({
      data: data,
      where: {
        id: body.id,
      },
    });
    if (!updatedPost) {
      return c.json({
        message: "Post could not be updated!",
      });
    }

    return c.json({
      id: updatedPost.id,
    });
  } catch (e) {
    c.status(500);
    return c.json({
      message: "Server error!",
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        publishDate: true,
        author: {
          select: {
            username: true,
          },
        },
      },
    });
    if (!posts) {
      return c.json({
        message: "No posts found!",
      });
    }
    return c.json({ posts });
  } catch (e) {
    c.status(500);
    return c.json({
      message: "No posts found!",
    });
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

  try {
    const post = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        publishDate: true,
        author: {
          select: {
            username: true,
          },
        },
      },
    });
    if (!post) {
      return c.json({
        message: "Post not found!",
      });
    }
    return c.json({ post });
  } catch (e) {
    c.status(500);
    return c.json({
      message: "No post found!",
    });
  }
});
