import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environments';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    console.log('ordering: ' + ordering);
    const params = new HttpParams().set('ordering', ordering);
    console.log('params without search: ' + params);
    if (search) {
      const params = new HttpParams()
        .set('ordering', ordering)
        .set('search', search);
      console.log('params with search: ' + params);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }
}
