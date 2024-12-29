import { decode, verify } from "hono/jwt";
import { createMiddleware } from "hono/factory";

export const authMiddleware = createMiddleware(async (c, next) => {
  const token = c.req.header("authorization");
  if (!token) {
    return c.json({
      message: "No token provided!",
    });
  }
  try {
    const decoded = await verify(token.split(" ")[1], c.env.JWT_SECRET);
    c.set("id", decoded.id);
    await next();
  } catch (e) {
    return c.json({
      message: "Not Authenticated",
    });
  }
});
