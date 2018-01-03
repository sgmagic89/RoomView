import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smtpconfiguration',
  templateUrl: './smtpconfiguration.component.html',
  styleUrls: ['./smtpconfiguration.component.scss']
})
export class SmtpconfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveSmtpConfiguration() {
  }

  canSubmit(): boolean {
    return false;
  }

  resetForm() {
  }

}
