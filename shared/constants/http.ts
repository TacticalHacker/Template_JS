export const HttpStatusCodes = {
    // 2xx Success
    OK: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,

    // 3xx Redirection
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    NotModified: 304,

    // 4xx Client Error
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    Conflict: 409,

    // 5xx Server Error
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
} as const;

// Grouped types
export type HttpStatusCode2xx =
    | typeof HttpStatusCodes.OK
    | typeof HttpStatusCodes.Created
    | typeof HttpStatusCodes.Accepted
    | typeof HttpStatusCodes.NoContent;

export type HttpStatusCode3xx =
    | typeof HttpStatusCodes.MultipleChoices
    | typeof HttpStatusCodes.MovedPermanently
    | typeof HttpStatusCodes.Found
    | typeof HttpStatusCodes.NotModified;

export type HttpStatusCode4xx =
    | typeof HttpStatusCodes.BadRequest
    | typeof HttpStatusCodes.Unauthorized
    | typeof HttpStatusCodes.Forbidden
    | typeof HttpStatusCodes.NotFound
    | typeof HttpStatusCodes.MethodNotAllowed
    | typeof HttpStatusCodes.Conflict;

export type HttpStatusCode5xx =
    | typeof HttpStatusCodes.InternalServerError
    | typeof HttpStatusCodes.NotImplemented
    | typeof HttpStatusCodes.BadGateway
    | typeof HttpStatusCodes.ServiceUnavailable;

// Single exportable type
export type HttpStatusCode =
    | HttpStatusCode2xx
    | HttpStatusCode3xx
    | HttpStatusCode4xx
    | HttpStatusCode5xx;

export const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    OPTIONS: 'OPTIONS',
} as const;

export type HttpMethod = typeof HttpMethods[keyof typeof HttpMethods];