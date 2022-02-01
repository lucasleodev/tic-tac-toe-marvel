import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root',
})
export class MarvelDatabaseService {
  constructor(private http: HttpClient) {}

  searchMarvelCharacter(hero?: string) {
    let ts = new Date().getTime();
    let tempHash = ts + environment.PRIVATE_KEY + environment.PUBLIC_KEY;
    let hash = Md5.hashStr(tempHash);
    let params = {
      ts: ts,
      apikey: environment.PUBLIC_KEY,
      hash: hash,
    };
    params = hero
      ? Object.assign({}, params, { name: hero })
      : Object.assign({}, params);

    return this.http.get(`${environment.API_MARVEL}/v1/public/characters`, {
      params,
    });
  }
}
