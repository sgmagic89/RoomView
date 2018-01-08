import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModelFactory, Model } from 'ngx-model';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../../shared/services/api/api.service';
import { AlertService } from '../../../shared/services/alert/alert.service';
// tslint:disable-next-line:max-line-length
import { INetworkSetting, ISmtpSetting, ISystemSetting, initNetworkSettings, initSmtpSettings, initSystemSettings } from '../../models/configuration/config.model';

@Injectable()
export class ConfigurationService {

    private networkSettingsModel: Model<INetworkSetting>;
    private smtpSettingsModel: Model<ISmtpSetting>;
    private systemSettingsModel: Model<ISystemSetting>;

    public netwrokSettings$: Observable<INetworkSetting>;
    public smtpSettings$: Observable<ISmtpSetting>;
    public systemSettigns$: Observable<ISystemSetting>;

constructor(private api: ApiService,
    private alert: AlertService,
    networkSettingsModelFactory: ModelFactory<INetworkSetting>,
    smtpSettingsModelFactory: ModelFactory<ISmtpSetting>,
    systemSettingsModelFactory: ModelFactory<ISystemSetting>) {
        this.networkSettingsModel = networkSettingsModelFactory.create(initNetworkSettings);
        this.netwrokSettings$ = this.networkSettingsModel.data$;

        this.smtpSettingsModel = smtpSettingsModelFactory.create(initSmtpSettings);
        this.smtpSettings$ = this.smtpSettingsModel.data$;

        this.systemSettingsModel = systemSettingsModelFactory.create(initSystemSettings);
        this.systemSettigns$ = this.systemSettingsModel.data$;
}

/**
    * getNetworkSettings() - Get the network settings from API and set the network configuration model data
    * @param <None> No Parameter
    * @return <Observable> Returns observable of INetwrokSetting
    */
public getNetworkSettings(): Observable<INetworkSetting> {
    const apiSubscription: Subscription = this.api.configuration_get_networksettings()
    .subscribe(
        response => {
            if (response) {
                this.networkSettingsModel.set(response.result);
            }
        },
        error => {
            this.networkSettingsModel.set(initNetworkSettings);
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );

    return this.netwrokSettings$;
}

/**
    * setNetworkSettings() - Set the network settings by calling the API
    * @param <INetworkSetting> The network configuration to set
    * @return <Observable> Returns observable of INetwrokSetting
    */
public setNetworkSettings(settings: INetworkSetting): Observable<INetworkSetting> {
    const apiSubscription: Subscription = this.api.configuration_set_networksettings(settings)
    .subscribe(
        response => {
            this.networkSettingsModel.set(response.result);
        },
        error => {
            this.networkSettingsModel.set(initNetworkSettings);
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );

    return this.netwrokSettings$;
}

/**
    * getSmtpSettings() - Get the smtp settings from API and set the smtp configuration model data
    * @param <None> No Parameter
    * @return <Observable> Returns observable of ISmtpSetting
    */
public getSmtpSettings(): Observable<ISmtpSetting> {
    const apiSubscription: Subscription = this.api.configuration_get_smtpsettings()
    .subscribe(
        response => {
            if (response) {
                this.smtpSettingsModel.set(response.result);
            }
        },
        error => {
            this.smtpSettingsModel.set(initSmtpSettings);
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );

    return this.smtpSettings$;
}

/**
    * setSmtpSettings() - Set the smtp settings by calling the API
    * @param <ISmtpSetting> The smtp configuration to set
    * @return <Observable> Returns observable of ISmtpSetting
    */
public setSmtpSettings(settings: ISmtpSetting): Observable<ISmtpSetting> {
    const apiSubscription: Subscription = this.api.configuration_set_smtpsettings(settings)
    .subscribe(
        response => {
            this.smtpSettingsModel.set(response.result);
        },
        error => {
            this.smtpSettingsModel.set(initSmtpSettings);
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );

    return this.smtpSettings$;
}

/**
    * getSystemSettings() - Get the system settings from API and set the system configuration model data
    * @param <None> No Parameter
    * @return <Observable> Returns observable of ISystemSetting
    */
public getSystemSettings(): Observable<ISystemSetting> {
    const apiSubscription: Subscription = this.api.configuration_get_systemsettings()
    .subscribe(
        response => {
            if (response) {
                this.systemSettingsModel.set(response.result);
            }
        },
        error => {
            this.systemSettingsModel.set(initSystemSettings);
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );

    return this.systemSettigns$;
}

/**
    * setSystemSettings() - Set the system settings by calling the API
    * @param <ISystemSetting> The system configuration to set
    * @return <Observable> Returns observable of ISystemSetting
    */
public setSystemSettings(settings: ISystemSetting): Observable<ISystemSetting> {
    const apiSubscription: Subscription = this.api.configuration_set_systemsettings(settings)
    .subscribe(
        response => {
            this.systemSettingsModel.set(response.result);
        },
        error => {
            this.systemSettingsModel.set(initSystemSettings);
            console.log(error);
        },
        () => {
            apiSubscription.unsubscribe();
        }
    );

    return this.systemSettigns$;
}


}
