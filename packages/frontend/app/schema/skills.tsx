import { z } from "zod";

export const SkillSchema = z.object({
  skills: z
    .string()
    .max(1000, { message: "Display Name cannot exceed 1000 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
});
