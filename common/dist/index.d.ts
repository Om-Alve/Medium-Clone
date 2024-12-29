import zod from "zod";
export declare const signUpInput: zod.ZodObject<{
    username: zod.ZodString;
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
}, {
    username: string;
    email: string;
    password: string;
}>;
export declare const signInInput: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createPostInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updatePostInput: zod.ZodObject<{
    id: zod.ZodString;
    title: zod.ZodOptional<zod.ZodString>;
    content: zod.ZodOptional<zod.ZodString>;
}, "strip", zod.ZodTypeAny, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
}, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
}>;
export type SignInInput = zod.infer<typeof signInInput>;
export type SignUpInput = zod.infer<typeof signUpInput>;
export type CreatePostInput = zod.infer<typeof createPostInput>;
export type UpdatePostInput = zod.infer<typeof updatePostInput>;
