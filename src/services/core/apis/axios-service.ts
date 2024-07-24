/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';
import { MediaType } from '../enums';
import { IApiService, Params } from '@/utils/protocols';
import { IResult, Result } from '@/utils/patterns';

export class AxiosService implements IApiService {
  private readonly axios: AxiosInstance = axios.create({
    baseURL: process.env.API_URL
  });

  async get<Response>(
    url: string,
    params?: Params,
    mediaType: MediaType = MediaType.Json
  ): Promise<IResult<Response, Error>> {
    try {
      const result = await this.axios.get<Response>(url, {
        params,
        headers: {
          mediaType
        }
      });

      return Result.success(result.data);
    } catch (error) {
      return Result.failure(new Error('Erro ao consultar api'));
    }
  }

  async post<Request, Response>(
    url: string,
    data: Request,
    params?: { [key: string]: any },
    mediaType: MediaType = MediaType.Json
  ): Promise<IResult<Response, Error>> {
    try {
      const result = await this.axios.post<Response>(url, data, {
        headers: {
          mediaType
        },
        params
      });

      return Result.success(result.data);
    } catch (error) {
      return Result.failure(new Error('Erro ao consultar api'));
    }
  }

  async put<Request, Response>(
    url: string,
    data: Request,
    params?: { [key: string]: any },
    mediaType: MediaType = MediaType.Json
  ): Promise<IResult<Response, Error>> {
    try {
      const result = await this.axios.put<Response>(url, data, {
        headers: {
          mediaType
        },
        params
      });

      return Result.success(result.data);
    } catch (error) {
      return Result.failure(new Error('Erro ao consultar api'));
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(url: string): Promise<IResult<void>> {
    throw new Error('Method not implemented.');
  }
}
