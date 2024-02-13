import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {NzMessageService} from "ng-zorro-antd/message";
@Injectable()
export class ApiService {


  constructor(private httpClient: HttpClient, private message:NzMessageService) {
  }

  private handleError(error: HttpErrorResponse) {
    this.message.error(`Backend return code ${error.status},body was:${error.error}`)
    return throwError(() => new Error('Something bad happened;please try again later.'));
  }

  get<T>(url: string, params: any): Observable<T> {
    const option = {
      params: new HttpParams({
        fromObject: {...params}
      })
    }
    return this.httpClient.get<T>(url, option)
      .pipe(catchError(this.handleError));
  }

  post<K,T>(url: string, data: K): Observable<T> {
    return this.httpClient.post<T>(url, data).pipe(catchError(this.handleError));
  }

  loginBaseUrl(): string{
    return "http://localhost:8003/"
  }
}
