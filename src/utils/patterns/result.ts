export type IResult<T, Error = null> =
  | { ok: true; value: T }
  | { ok: false; error: Error }
  | { ok: false; error: null }

export class Result {
  public static success<T>(data?: T): IResult<T> {
    return {
      ok: true,
      value: data as T
    };
  }

  public static failure<T>(error?: Error): IResult<T, Error> {
    return {
      ok: false,
      error: error as Error
    };
  }
}
