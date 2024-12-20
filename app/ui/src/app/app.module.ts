import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListCopyPathContainerComponent } from "./list-copy-path/list-copy-path-container/list-copy-path-container.component";
import { CopyPathMenuControlComponent } from "./list-copy-path/components/copy-path-menu-control/copy-path-menu-control.component";
import { NZ_I18N, en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzButtonModule } from "ng-zorro-antd/button";
import { CopyPathTableComponent } from "./list-copy-path/components/copy-path-table/copy-path-table.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { CopyPathListHttpService } from "./list-copy-path/copy-path-list-http/copy-path-list-http.service";
import { AddCopyPathContainerComponent } from "./add-copy-path/add-copy-path-container/add-copy-path-container.component";
import { AddCopyPathFormComponent } from "./add-copy-path/components/add-copy-path-form/add-copy-path-form.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzListModule } from "ng-zorro-antd/list";
import { AddCopyPathAddIncludedFilesOnlyComponent } from "./add-copy-path/components/add-copy-path-add-included-files-only/add-copy-path-add-included-files-only.component";
import { NzModalModule } from "ng-zorro-antd/modal";
import { AddCopyPathAddExcludedFilesModalComponent } from "./add-copy-path/components/add-copy-path-add-excluded-files-modal/add-copy-path-add-excluded-files-modal.component";
import { AddCopyPathAddExcludedDirectoriesModalComponent } from "./add-copy-path/components/add-copy-path-add-excluded-directories-modal/add-copy-path-add-excluded-directories-modal.component";
import { AddCopyPathHttpService } from "./add-copy-path/add-copy-path-http/add-copy-path-http.service";
import { DeleteCopyPathModalComponent } from "./list-copy-path/components/delete-copy-path-modal/delete-copy-path-modal.component";
import { DeleteCopyPathHttpService } from "./list-copy-path/delete-copy-path-http/delete-copy-path-http.service";
import { EditCopyPathContainerComponent } from "./edit-copy-path/edit-copy-path-container/edit-copy-path-container.component";
import { EditCopyPathFormComponent } from "./edit-copy-path/components/edit-copy-path-form/edit-copy-path-form.component";
import { GetOneCopyPathHttpService } from "./edit-copy-path/get-one-copy-path-http/get-one-copy-path-http.service";
import { NzMessageModule } from "ng-zorro-antd/message";
import { BuildCopyPathJsonHttpService } from "./list-copy-path/build-copy-path-json-http/build-copy-path-json-http.service";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { EditBuildJsonLocationModalComponent } from "./list-copy-path/components/edit-build-json-location-modal/edit-build-json-location-modal.component";
import { AddCopyPathAddActiveDaysOfWeekModalComponent } from './add-copy-path/components/add-copy-path-add-active-days-of-week-modal/add-copy-path-add-active-days-of-week-modal.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
registerLocaleData(en);

@NgModule({ declarations: [
        AppComponent,
        ListCopyPathContainerComponent,
        CopyPathMenuControlComponent,
        CopyPathTableComponent,
        AddCopyPathContainerComponent,
        AddCopyPathFormComponent,
        AddCopyPathAddIncludedFilesOnlyComponent,
        AddCopyPathAddExcludedFilesModalComponent,
        AddCopyPathAddExcludedDirectoriesModalComponent,
        DeleteCopyPathModalComponent,
        EditCopyPathContainerComponent,
        EditCopyPathFormComponent,
        EditBuildJsonLocationModalComponent,
        AddCopyPathAddActiveDaysOfWeekModalComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        NzPageHeaderModule,
        NzButtonModule,
        NzTableModule,
        NzDividerModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzCheckboxModule,
        NzListModule,
        NzModalModule,
        NzMessageModule,
        NzDropDownModule,
        NzIconModule,
        NzToolTipModule,
        NzSwitchModule], providers: [
        CopyPathListHttpService,
        AddCopyPathHttpService,
        DeleteCopyPathHttpService,
        GetOneCopyPathHttpService,
        BuildCopyPathJsonHttpService,
        { provide: NZ_I18N, useValue: en_US },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
