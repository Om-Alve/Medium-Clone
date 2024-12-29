import { Hono } from "hono";
import { blogRouter } from "./routes/blog";
import { userRouter } from "./routes/user";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
  Variables: {
    id: String;
  };
}>().basePath("/api/v1");

app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.route("/user", userRouter);
app.route("/blog", blogRouter);

export default app;
