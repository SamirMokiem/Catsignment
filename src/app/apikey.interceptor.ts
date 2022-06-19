import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add the header to the cloned request
    console.error("API KEY HARDCODED IN SOURCE CODE, BAD PRACTICE!")
    // Todo:: move api key to a secret file. Altough not a real issue because the api key is public anyway (calls from client-side)
    const authReq = req.clone({headers: req.headers.set('x-api-key', '8384a2cb-f864-46eb-a9d1-8a0ac855dcbe')});

    return next.handle(authReq);
  }
}
