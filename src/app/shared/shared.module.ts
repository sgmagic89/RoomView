import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TreeModule } from 'angular-tree-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftnavbarComponent } from './components/leftnavbar/leftnavbar.component';
import { RightnavbarComponent } from './components/rightnavbar/rightnavbar.component';
import { AppValidateDirective } from './directives/validation.directive';
import { AlertComponent } from './components/alerts/alert.component';
import { RouterModule } from '@angular/router';
import { NgxModelModule } from 'ngx-model';
import { ApiService } from './services/api/api.service';
import { LocalStorageService } from './services/localstorage/localstorage.service';
import { AlertService } from './services/alert/alert.service';
import { AuthGuard } from '../authentication/services/authguard.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApiResponseResolverService } from './services/api/api.response.resolver.service';

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
    NgxModelModule,
    NgxDatatableModule,
    NgbModule.forRoot()
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
    NgxDatatableModule,
    NgbModule,
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
            AlertService,
            ApiResponseResolverService
        ],
      };
    }
  }
