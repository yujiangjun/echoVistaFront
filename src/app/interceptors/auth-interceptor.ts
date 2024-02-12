import {Injectable} from "@angular/core";
import {AuthServices} from "./auth.services";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthServices) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.concat("login")) {
      return this.handleJsonResponse(req,next);
    }
    const token = this.auth.getAuth();
    const authReq = req.clone({
      headers: req.headers.set('token', token)
    })
    return this.handleJsonResponse(authReq,next);
  }

  private handleJsonResponse(httpRequest: HttpRequest<any>,next: HttpHandler){
    return next.handle(httpRequest).pipe(map(events=>{
      if (events instanceof HttpResponse){
        let body = events.body;
        events = events.clone({
          body: body.data
        })
      }
      return events;
    }))
  }
}
