export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const ALLOWED_FILE_TYPES = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'video/mp4',
    'video/webm',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
] as const;

export const PRESIGNED_URL_EXPIRATION = 60 * 15; // 15 minutes