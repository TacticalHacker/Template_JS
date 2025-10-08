import { appStages } from '@template/shared/constants/index.js';
import type { EnvConfig } from '@template/shared/types/index.js';

/**
 * Resolves the configuration for a specific stage, merging with default values
 * If a key exists in default but not in the target stage, the default value is used
 *
 * @param config The complete environment configuration
 * @param stage The stage to resolve config for (optional, uses process.env.STAGE or defaults to 'dev')
 * @returns A complete configuration object with all values resolved
 */
export const resolveConfig = <T extends EnvConfig>(config: T, stage?: string): T['default'] => {
  // Determine the current stage
  const currentStage = stage || $app.stage || process.env.STAGE || 'dev';

  // Get the base configuration (default)
  const defaultConfig = config.default;

  // If prod configuration is requested
  if (currentStage === appStages.PROD && appStages.PROD in config) {
    // Deep merge the default config with prod-specific overrides
    return deepMerge(defaultConfig, config.prod) as T['default'] & Partial<T['prod']>;
  }

  // For any other stage, just return the default config
  // In a more complex setup, you could handle additional stages like 'test', 'staging', etc.
  return defaultConfig as T['default'] & Partial<T['prod']>;
};

/**
 * Deep merges two objects, with values from the second object taking precedence
 * This ensures that all nested properties from the default config are preserved
 * unless explicitly overridden in the stage-specific config
 */
const deepMerge = <TDefault extends Record<string, unknown>, TOverride extends Record<string, unknown>>(
  target: TDefault,
  source: TOverride
): TDefault & TOverride => {
  // Create a new object to avoid mutating the target
  const output = { ...target } as TDefault & TOverride;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const sourceValue = source[key as keyof TOverride];
      const targetValue = target[key as keyof TDefault];

      if (isObject(sourceValue) && isObject(targetValue)) {
        // If both values are objects, recursively merge them
        output[key as keyof (TDefault & TOverride)] = deepMerge(
          targetValue as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        ) as (TDefault & TOverride)[keyof (TDefault & TOverride)];
      } else {
        // Otherwise just use the source value
        output[key as keyof (TDefault & TOverride)] = sourceValue as (TDefault & TOverride)[keyof (TDefault &
          TOverride)];
      }
    });
  }
  return output;
};

/**
 * Helper function to check if a value is an object
 */
const isObject = (item: unknown): item is Record<string, unknown> => {
  return Boolean(item && typeof item === 'object' && !Array.isArray(item));
};

/**
 * Example usage:
 *
 * import config from './env';
 *
 * // Get the resolved configuration for the current environment
 * const resolvedConfig = resolveConfig(config);
 *
 * // Access configuration values
 * console.log(`API URL: ${resolvedConfig.site.apiUrl}`);
 * console.log(`Database: ${resolvedConfig.database.documentDB.database}`);
 */
