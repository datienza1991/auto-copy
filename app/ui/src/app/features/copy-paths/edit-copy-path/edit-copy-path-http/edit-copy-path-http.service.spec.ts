import { TestBed } from "@angular/core/testing";

import { EditCopyPathHttpService } from "./edit-copy-path-http.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe("EditCopyPathHttpService", () => {
    let service: EditCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
        service = TestBed.inject(EditCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});