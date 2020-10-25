import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpReqOptions } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  httpOptions?: {
    headers?: HttpHeaders;
    observe?: any;
    params?: any;
  };
  constructor(private http: HttpClient) {}

  get<T>(config: HttpReqOptions): Observable<T> {
    this.setOptions(config);
    return this.http.get<T>(config.url, this.httpOptions);
  }

  post<T>(config: HttpReqOptions): Observable<T> {
    this.setOptions(config);
    return this.http.post<T>(config.url, this.httpOptions);
  }

  put<T>(config: HttpReqOptions): Observable<T> {
    this.setOptions(config);
    return this.http.put<T>(config.url, this.httpOptions);
  }

  delete<T>(config: HttpReqOptions): Observable<T> {
    this.setOptions(config);
    return this.http.delete<T>(config.url, this.httpOptions);
  }

  private setOptions(config: HttpReqOptions) {
    // url設定
    if (config.url.indexOf('http') === -1) {
      config.url = `${location.protocol}//${location.host}${config.url}`;
    }

    const headers = Object.assign({
      'Content-Type': 'application/json; charset=utf-8',
    });

    this.httpOptions = {
      headers,
      params: config.param,
      observe: 'response',
    };
  }
}