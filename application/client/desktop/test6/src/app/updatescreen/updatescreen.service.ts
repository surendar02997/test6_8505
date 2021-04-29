import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatescreenService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpDelete(testId): Observable<any> {
        return this.http.delete(this.sharedService.DESKTOP_API + '/test/' + testId);
    }
    GpUpdate(test): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/test', test);
    }
}