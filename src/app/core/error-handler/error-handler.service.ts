import { ErrorHandler, Injectable, NgZone } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
    constructor(private zone: NgZone) {}
    handleError(error: any): void {
        this.zone.run(() => {
            if (error instanceof Error) {
                console.log(error.message);
            }
            console.log(error);
        });
    }
}
