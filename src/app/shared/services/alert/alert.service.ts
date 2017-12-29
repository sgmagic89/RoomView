import { HostListener, Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Model, ModelFactory } from 'ngx-model';
import { Alert, AlertType } from '../../models/alert.model';

@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();
    private model: Model<Alert>;
    alert$: Observable<Alert>;

    private keepAfterRouteChange = false;

    constructor(private router: Router, private modelFactory: ModelFactory<Alert>) {
        this.model = this.modelFactory.create(null);
        this.alert$ = this.model.data$;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;

                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }


    getAlert(): Observable<any> {
        return this.alert$;
    }

    success(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }

    error(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }

    info(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }

    warn(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }

    alert(type: AlertType, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.model.set({ type: type, message: message });
    }

    clear() {
        // clear alerts
         this.model.set(null);
    }



}
