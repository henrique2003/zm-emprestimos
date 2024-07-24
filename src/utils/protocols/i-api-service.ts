/* eslint-disable @typescript-eslint/no-explicit-any */
import { MediaType } from '@/services/core/enums';
import { IResult } from '../patterns';

export type Params = Record<string, any>;

export interface IApiService {
  get<Response>(
    url: string,
    params?: Params
  ): Promise<IResult<Response, Error>>;
  post<Request, Response>(
    url: string,
    data: Request,
    params?: { [key: string]: any },
    mediaType?: MediaType
  ): Promise<IResult<Response, Error>>;
  put<Request, Response>(
    url: string,
    data: Request,
    params?: { [key: string]: any },
    mediaType?: MediaType
  ): Promise<IResult<Response, Error>>;
  delete(url: string): Promise<IResult<void, Error>>;
}
