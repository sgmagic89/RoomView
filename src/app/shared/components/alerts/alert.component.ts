import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { Alert, AlertType } from '../../models/alert.model';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: './alert.component.html'
})

export class AlertComponent implements OnInit {



    alert: Alert;

    visible: boolean = false;

    constructor(private alertService: AlertService) {
     }

    ngOnInit() {
        this.alertService.getAlert().subscribe((alert: Alert) => {
            if (alert === null) {
                // clear alerts when an empty alert is received
                this.alert = null;
                return;
            }

            // add alert to array
            this.visible = true;
            this.alert = alert;

        });

        // listens for any click and calls the removeAlert() to close the alert
        window.addEventListener('click', (event) => {
            this.removeAlert();
          });
    }

     /**
    * removeAlert() - Close an opened alert message
    * @param <None> No parameters
    * @return <None> No return value
    */
    removeAlert() {
            this.visible = false;
            this.alert = null;
            this.alertService.clear();
    }

    /**
    * cssClass() - Returns the css class based on the alert type
    * @param <Alert> alert to show
    * @return <string> the custom css class
    */
    cssClass(alert: Alert): string {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'show success';
            case AlertType.Error:
                return 'show error';
            case AlertType.Info:
                return 'show info';
            case AlertType.Warning:
                return 'show warning';
        }
    }

}
