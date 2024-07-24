import { IResult, Result } from '@/utils/patterns';
import { AxiosService } from './core/apis/axios-service';
import { MediaType } from './core/enums';
import { HashcoopCadastroDto } from './dtos/hashcoop/requests';

const apiService = new AxiosService()

export class HashcoopService {
  public async cadastrar(request: HashcoopCadastroDto): Promise<IResult<void, Error>> {
    const result = await apiService.post('/cliente/externo', request, undefined, MediaType.Json)
    if (!result.ok) {
      return Result.failure(result?.error ?? new Error(''))
    }

    return Result.success()
  }
}
