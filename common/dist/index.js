"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpInput = zod_1.default.object({
    username: zod_1.default.string().min(2).max(20),
    email: zod_1.default.string().email().min(5).max(50),
    password: zod_1.default.string().min(6).max(50),
});
exports.signInInput = zod_1.default.object({
    email: zod_1.default.string().email().min(5).max(50),
    password: zod_1.default.string().min(6).max(50),
});
exports.createPostInput = zod_1.default.object({
    title: zod_1.default.string().min(3).max(60),
    content: zod_1.default.string().min(2),
});
exports.updatePostInput = zod_1.default.object({
    id: zod_1.default.string().cuid(),
    title: zod_1.default.string().min(3).max(60).optional(),
    content: zod_1.default.string().min(2).optional(),
});
