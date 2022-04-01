import { BackendRequestUrls } from '../../utils/enums';
import { apiClient } from '../ApiClient';
import { AxiosResponse } from 'axios';

export class LeagueService {
  public static async getLeague(id: string): Promise<AxiosResponse<{ data: any }>> {
    //TODO ANY
    return apiClient.get(`${BackendRequestUrls.GET_LEAGUE}/${id}`);
  }
}
