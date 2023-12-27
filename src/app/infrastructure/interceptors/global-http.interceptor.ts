import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable, catchError, retry, throwError, timer } from 'rxjs';

export class GlobalHttpInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: Error) => {
                return throwError(() => {
                    console.log(err.message);
                });
            }),
            retry({
                count: 1,
                //delay: (_, retryCount) => timer(retryCount * 0)
            })
        );
    }
}
