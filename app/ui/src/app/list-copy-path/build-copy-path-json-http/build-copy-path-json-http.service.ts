import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class BuildCopyPathJsonHttpService {
    constructor(private http: HttpClient) {}

    execute(): Observable<any> {
        return this.http.post<any>(`${environment.host}/copy-path/build`, {});
    }
}
