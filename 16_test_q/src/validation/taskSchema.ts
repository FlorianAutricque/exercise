import { z } from "zod";

export const taskSchema = z.object({
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long."),
  completed: z.boolean(),
  createdAt: z.date(),
});
