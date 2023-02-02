/* ----------------------------------------------------
HTTP response status codes
---------------------------------------------------- */
export const informationalStatusCode: StatusCode.InformationalStatusCode[] = [
  100, 101, 102, 103,
]
export const successfulStatusCode: StatusCode.SuccessfulStatusCode[] = [
  200, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 279,
]
export const redirectionStatusCode: StatusCode.RedirectionStatusCode[] = [
  300, 301, 301, 302, 302, 303, 304, 305, 306, 307, 308,
]
export const clientErrorStatusCode: StatusCode.ClientErrorStatusCode[] = [
  400, 401, 401, 401, 402, 403, 403, 404, 405, 406, 407, 408, 409, 410, 411,
  412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 426, 428,
  429, 431, 451,
]
export const serverErrorStatusCode: StatusCode.ServerErrorStatusCode[] = [
  500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
]
export const statusCode: StatusCode.StatusCode[] = [
  ...informationalStatusCode,
  ...successfulStatusCode,
  ...redirectionStatusCode,
  ...clientErrorStatusCode,
  ...serverErrorStatusCode,
]
export const errorStatusCode: StatusCode.ErrorStatusCode[] = [
  ...clientErrorStatusCode,
  ...serverErrorStatusCode,
]
