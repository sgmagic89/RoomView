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

    /**
    * getAlert() - Gets the alert object
    * @param <None> No Parameter
    * @return <Observable<any>> Returns the alert object
    */
    getAlert(): Observable<any> {
        return this.alert$;
    }

    /**
    * success() - creates the success alert data
    * @param <string, boolean> message: the message to display, keepAfterRouteChange: If the alert will be visible after navigation change
    * @return <None> Returns no data
    */
    success(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }

    /**
    * error() - creates the error alert data
    * @param <string, boolean> message: the message to display, keepAfterRouteChange: If the alert will be visible after navigation change
    * @return <None> Returns no data
    */
    error(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }

      /**
    * info() - creates the info alert data
    * @param <string, boolean> message: the message to display, keepAfterRouteChange: If the alert will be visible after navigation change
    * @return <None> Returns no data
    */
    info(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }

     /**
    * warn() - creates the warn alert data
    * @param <string, boolean> message: the message to display, keepAfterRouteChange: If the alert will be visible after navigation change
    * @return <None> Returns no data
    */
    warn(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }

    /**
    * alert() - creates the alert data
    * @param <AlertType, message, keepAfterRouteChange> AlertType: type of the alert message: the message to display, 
    keepAfterRouteChange: If the alert will be visible after navigation change
    * @return <None> Returns no data
    */
    alert(type: AlertType, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.model.set({ type: type, message: message });
    }

    /**
    * clear() - clears alert model data
    * @param <None> No parameters
    * @return <None> Returns no data
    */
    clear() {
        // clear alerts
         this.model.set(null);
    }



}
