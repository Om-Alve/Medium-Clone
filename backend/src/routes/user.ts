import { Hono } from "hono";
import { sign, decode, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signUpInput, signInInput } from "@omalve/common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success, data } = signUpInput.safeParse(body);

  if (!success) {
    c.status(413);
    return c.json({
      message: "Invalid inputs!",
    });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
    if (!newUser) {
      return c.json({
        message: "User not created!",
      });
    }
    const token = await sign({ id: newUser.id }, c.env.JWT_SECRET);
    return c.json({
      token,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Invalid credentials!",
    });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success, data } = signInInput.safeParse(body);

  if (!success) {
    c.status(413);
    return c.json({
      message: "Invalid inputs!",
    });
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: data.email,
      password: data.password,
    },
  });

  if (!existingUser) {
    c.status(403);
    return c.json({
      message: "Invalid email or password!",
    });
  }

  const token = await sign({ id: existingUser.id }, c.env.JWT_SECRET);

  return c.json({
    token,
  });
});
