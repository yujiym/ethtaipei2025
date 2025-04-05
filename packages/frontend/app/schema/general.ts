import { z } from "zod";

export const GeneralSchema = z.object({
  name: z
    .string()
    .max(15, { message: "Display Name cannot exceed 255 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  description: z
    .string()
    .max(500, { message: "Display Name cannot exceed 500 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  com_twitter: z
    .string()
    .max(255, { message: "Cannot exceed 255 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  com_farcaster: z
    .string()
    .max(255, { message: "Cannot exceed 255 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  com_github: z
    .string()
    .max(255, { message: "Cannot exceed 255 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  com_instagram: z
    .string()
    .max(255, { message: "Cannot exceed 255 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  xyz_farcaster: z
    .string()
    .max(255, { message: "Cannot exceed 255 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  url: z
    .string()
    .url()
    .max(500, { message: "Cannot exceed 500 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  url2: z
    .string()
    .url()
    .max(500, { message: "Cannot exceed 500 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  url3: z
    .string()
    .url()
    .max(500, { message: "Cannot exceed 500 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
  url4: z
    .string()
    .url()
    .max(500, { message: "Cannot exceed 500 characters." })
    .or(
      z
        .string()
        .optional()
        .transform((value) => value ?? ""),
    ),
});
