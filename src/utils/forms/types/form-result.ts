import { IFormError } from './form-error';

export type IFormResult<T> = { valid: true, data: T } | { valid: false, errors: IFormError<T> }
