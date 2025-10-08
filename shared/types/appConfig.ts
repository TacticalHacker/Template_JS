import { z } from 'zod';

// Base configuration schema with common properties
const baseConfigSchema = z.object({
  appName: z.string(),
  region: z.string(),
  stage: z.string(),
  awsAccountId: z.string(),
  awsProfile: z.string(),
  logLevel: z.enum(['Debug', 'Info', 'Warn', 'Error']),
  tags: z.object({
    environment: z.string(),
    owner: z.string(),
    appName: z.string(),
  }),
});

const prodConfigSchema = baseConfigSchema.extend({
  stage: z.literal('prod'),
});

const envConfigSchema = z.object({
  default: baseConfigSchema,
  prod: prodConfigSchema.partial(),
});

// Type inference from the schemas
export type BaseConfig = z.infer<typeof baseConfigSchema>;
export type ProdConfig = z.infer<typeof prodConfigSchema>;
export type EnvConfig = z.infer<typeof envConfigSchema>;

// Export schemas for validation
export const schemas = {
  base: baseConfigSchema,
  prod: prodConfigSchema,
  env: envConfigSchema,
};
