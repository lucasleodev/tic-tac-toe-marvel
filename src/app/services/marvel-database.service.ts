import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarvelDatabaseService {
  constructor(private http: HttpClient) {}

  searchMarvelCharacter(name: string = '') {
    this.http.get(environment.URL_MARVEL).subscribe((res) => {
      console.log(res);
    });
  }
}
