import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from "./component/configuration.component";
import { ConfigurationService } from "./service/configuration.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConfigurationComponent],
  providers: [ConfigurationService]
})
export class ConfigurationModule { }