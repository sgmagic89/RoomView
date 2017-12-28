import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";
import { AuthenticationModule } from "./authentication/authentication.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    SharedModule.forRoot(),
    LayoutModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
