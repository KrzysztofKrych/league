import { BackendRequestUrls } from '../../utils/enums';
import { apiClient } from '../ApiClient';
import { AxiosResponse } from 'axios';

export class TableService {
  public static async getTable(id: string): Promise<AxiosResponse<{ data: any }>> {
    //TODO
    return apiClient.get(`${BackendRequestUrls.GET_TABLE}/${id}`);
  }
}
