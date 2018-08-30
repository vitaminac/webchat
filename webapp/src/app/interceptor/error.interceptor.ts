import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {HttpErrorService} from "../service/http.error.service";

@Injectable({
  providedIn: "root"
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private httpErrorHandler: HttpErrorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err, caught: Observable<HttpEvent<any>>) => {
      if (err instanceof HttpErrorResponse) {
        return this.httpErrorHandler.handle(err, caught);
      }
      return throwError(err);
    }));
  }
}
