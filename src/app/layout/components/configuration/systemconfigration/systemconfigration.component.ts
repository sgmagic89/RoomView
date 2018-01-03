import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systemconfigration',
  templateUrl: './systemconfigration.component.html',
  styleUrls: ['./systemconfigration.component.scss']
})
export class SystemconfigrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveSystemConfiguration() {
  }

  canSubmit(): boolean {
    return false;
  }

  resetForm() {
  }


}
