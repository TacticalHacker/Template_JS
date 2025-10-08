export const HttpStatusCodes = {
    OK: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    Conflict: 409,
    InternalServerError: 500,
    ServiceUnavailable: 503,
} as const;

export type HttpStatusCode = typeof HttpStatusCodes[keyof typeof HttpStatusCodes];

export const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    OPTIONS: 'OPTIONS',
} as const;

export type HttpMethod = typeof HttpMethods[keyof typeof HttpMethods];