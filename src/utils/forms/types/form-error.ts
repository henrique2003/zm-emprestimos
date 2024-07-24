export type IFormError<T> = {
  [key in keyof T]: string;
};
