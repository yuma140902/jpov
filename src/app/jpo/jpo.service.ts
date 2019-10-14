import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prefecture } from '../shared/prefectures.module';
import { Observable } from 'rxjs';
import { JpoJson } from '../jpo/jpo-json';

@Injectable({
  providedIn: 'root'
})
export class JpoService {

  url = "https://ryo-a.github.io/jp-power-outage/api/v1/";

  constructor(private http: HttpClient) { }

  getLatest(prefecture: Prefecture): Observable<JpoJson> {
    return this.http.get<JpoJson>(this.url + "latest/" + prefecture.apiname + ".json")
  }
}
