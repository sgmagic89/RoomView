import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvisionComponent } from "./component/provision.component";
import { ProvisionService } from './service/provision.service';
@NgModule({
  // imports: [
  // CommonModule
  // ],
  declarations: [ProvisionComponent],
  providers: [ProvisionService]
})
export class ProvisionModule { }