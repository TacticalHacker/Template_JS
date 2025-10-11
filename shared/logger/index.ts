import { pino } from 'pino';

/**
 * Configured Pino logger instance for application-wide logging.
 * 
 * @remarks
 * The logger is configured with:
 * - ISO timestamp format
 * - Uppercase level formatting
 * - Custom message formatting that handles both string and object messages
 * - Environment-configurable log level (defaults to 'info')
 * 
 * @example
 * ```typescript
 * logger.info('Hello World');
 * logger.error({ message: 'Error occurred', code: 500 });
 * ```
 * 
 * @constant
 * @type {import('pino').Logger}
 */
export const logger: import('pino').Logger = pino({
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: {
        level: (label: string): { level: string } => ({
            level: label.toUpperCase()
        }),
        log: (object: Record<string, unknown>): { message: string } => {
            const { message, ...rest } = object;
            return {
                message: typeof message === 'string' ? message : JSON.stringify(message),
                ...rest
            };
        }
    },
    messageKey: 'message',
    level: process.env.LOG_LEVEL || 'info',
});