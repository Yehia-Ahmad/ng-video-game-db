import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { environment as env } from 'src/environments/environments';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private TrailerUrl = 'api/Trailer';
  private ScreenshotsUrl = 'api/Screenshots';

  constructor(private http: HttpClient, private handler: HttpBackend) {}

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    // console.log('ordering: ' + ordering);
    const params = new HttpParams().set('ordering', ordering);
    // console.log('params without search: ' + params);
    if (search) {
      const params = new HttpParams()
        .set('ordering', ordering)
        .set('search', search);
      // console.log('params with search: ' + params);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    // const gameScreenshotsRequest = this.http.get(
    //   `${env.BASE_URL}/games/${id}/screenshots`
    // );
    // const gameTrailersRequest = this.http.get(
    //   `${env.BASE_URL}/games/${id}/movies`
    // );

    return forkJoin({
      gameInfoRequest,
      // gameTrailersRequest,
      // gameScreenshotsRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailersRequest']?.results,
        };
      })
    );
  }

  getGameTrailer() {
    this.http = new HttpClient(this.handler);
    return this.http.get(this.TrailerUrl);
  }
  getGameScreenshots() {
    this.http = new HttpClient(this.handler);
    return this.http.get(this.ScreenshotsUrl);
  }
}
