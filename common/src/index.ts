import zod from "zod";

export const signUpInput = zod.object({
  username: zod.string().min(2).max(20),
  email: zod.string().email().min(5).max(50),
  password: zod.string().min(6).max(50),
});

export const signInInput = zod.object({
  email: zod.string().email().min(5).max(50),
  password: zod.string().min(6).max(50),
});

export const createPostInput = zod.object({
  title: zod.string().min(3).max(60),
  content: zod.string().min(2),
});

export const updatePostInput = zod.object({
  id: zod.string().cuid(),
  title: zod.string().min(3).max(60).optional(),
  content: zod.string().min(2).optional(),
});

export type SignInInput = zod.infer<typeof signInInput>;
export type SignUpInput = zod.infer<typeof signUpInput>;
export type CreatePostInput = zod.infer<typeof createPostInput>;
export type UpdatePostInput = zod.infer<typeof updatePostInput>;
