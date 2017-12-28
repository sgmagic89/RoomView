import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TreeModule } from 'angular-tree-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeftnavbarComponent } from './Components/leftnavbar/leftnavbar.component';
import { RightnavbarComponent } from './Components/rightnavbar/rightnavbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AuthenticationService } from '../Core/Authentication/Service/authentication.service';
import { ApiService } from '../Core/Api/api.service';
import { LocalStorageService } from './Services/localstorage.service';
import { RouterModule, Routes } from '@angular/router';
import { NgxModelModule } from 'ngx-model';
import { AuthGuard } from '../Core/Authentication/Service/authguard.service';
import { AppValidateDirective } from './Directives/validation.directive';
import { AlertService } from './Services/alert.service';
import { AlertComponent } from './Components/alerts/alert.component';
@NgModule({
  declarations: [
    NavbarComponent,
    LeftnavbarComponent,
    RightnavbarComponent,
    AppValidateDirective,
    AlertComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    TreeModule,
    NgxModelModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    TreeModule,
    NavbarComponent,
    LeftnavbarComponent,
    RightnavbarComponent,
    RouterModule,
    NgxModelModule,
    AppValidateDirective,
    AlertComponent
  ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [
            ApiService,
            LocalStorageService,
            AuthGuard,
            AlertService
        ],
      };
    }
  }
