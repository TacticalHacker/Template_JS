import type { AnyZodObject, SafeParseReturnType, ZodArray } from 'zod';
import { logger } from '@template/shared/logger/index.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type AnyZodObjectSchema = ZodArray<any> | AnyZodObject;

export type SuccessValidationResult<T> = {
    validationResult:
    | SafeParseReturnType<
        {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            [x: string]: any;
        },
        {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            [x: string]: any;
        }
    >
    | SafeParseReturnType<T, T[]>;
    success: boolean;
}

/**
 * Validates data against a Zod schema and returns the parsing result
 *
 * @template T - The type of the data being validated
 * @param {AnyZodObjectSchema} schema - The Zod schema to validate against
 * @param {Partial<T>} data - The data to be validated
 * @returns {SafeParseReturnType<T, T>} The result of the validation containing success status and either parsed data or error information
 *
 * @example
 * ```typescript
 * const userSchema = z.object({ name: z.string(), age: z.number() });
 * const data = { name: "John", age: 30 };
 * const result = validateZodSchema(userSchema, data);
 * ```
 */
export const validateZodSchema = <T>(schema: AnyZodObjectSchema, data: Partial<T>) => {
    const result = schema.safeParse(data);
    return result;
};

/**
 * Validates data against a Zod schema and returns the validation result
 * @template T - The type of the data being validated
 * @param {AnyZodObjectSchema} schema - The Zod schema to validate against
 * @param {Partial<any>} data - The data to validate
 * @param {...Array<keyof T>} keys - Optional keys to track in validation result logging
 * @returns {{ success: boolean, validationResult: { success: boolean, error?: ZodError }}} - Object containing validation success status and detailed validation result
*/
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const validate = <T>(schema: AnyZodObjectSchema, data: Partial<any>, ...keys: Array<keyof T>): SuccessValidationResult<T> => {
    const validationResult = validateZodSchema(schema, data);
    logger[validationResult.success ? 'info' : 'error']({
        keys,
        valid: validationResult.success,
        errors: validationResult.success ? undefined : validationResult.error.errors,
    }, 'Validation Result');
    return { success: validationResult.success, validationResult }
}
