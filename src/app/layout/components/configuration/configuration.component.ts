
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  constructor(private configService: ConfigurationService) { }

  ngOnInit() {
    this.configService.getNetworkSettings();
    this.configService.getSmtpSettings();
    this.configService.getNetworkSettings();
  }

}
