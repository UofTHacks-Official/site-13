import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url("Must be a valid URL"),
  NEXT_PUBLIC_API_VERSION: z.string().min(1, "API version cannot be empty"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const rawEnv = {
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
  NODE_ENV: process.env.NODE_ENV,
};

const env = envSchema.parse(rawEnv);

export const config = {
  baseUrl: env.NEXT_PUBLIC_API_BASE_URL,
  apiVersion: env.NEXT_PUBLIC_API_VERSION,
  nodeEnv: env.NODE_ENV,
} as const;
