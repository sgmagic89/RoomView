import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from "./component/control.component";
import { ControlService } from "./service/control.service";

@NgModule({
  // imports: [
  // CommonModule
  // ],
  declarations: [ControlComponent],
  providers: [ControlService]
})
export class ControlModule { }