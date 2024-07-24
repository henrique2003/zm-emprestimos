import { IFormError } from '../types';
import { IFormResult } from '../types/form-result';

export class FormResult {
  public static success<T>(data?: T): IFormResult<T> {
    return {
      valid: true,
      data: data as T
    }
  }

  public static failure<T>(errors: IFormError<T>): IFormResult<T> {
    return {
      valid: false,
      errors
    }
  }
}
