import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class ApiService {


  constructor(private httpClient: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('An error occurred:', error)
    } else {
      console.error(`Backend return code ${error.status},body was:`, error.error)
    }
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
}
