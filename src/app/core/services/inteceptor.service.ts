import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class InteceptorService implements HttpInterceptor{

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*let headersModify = req.headers.set('Access-Control-Allow-Headers', 'Content-Type');
        headersModify = req.headers.set('Access-Control-Allow-Methods', 'GET, POST DELETE, PUT');
        headersModify = req.headers.set('Access-Control-Allow-Origin', '*');*/

        /*const headers = new HttpHeaders({
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type',
            'Access-Control-Allow-Methods': 'GET, POST DELETE, PUT',
            'Access-Control-Allow-Origin': '*'
        });*/
        /*const reqs = req.clone({
            headers
        })*/
        return next.handle(req).pipe(
            catchError(this.error)
        );
    }

    error(err: HttpErrorResponse) {
      console.log(err.message);
        return throwError(err);
    }

}