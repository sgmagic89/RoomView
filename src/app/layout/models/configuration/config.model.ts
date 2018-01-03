export interface INetworkSetting {
    networkName: string;
    threadMasterKey: string;
    threadChannel: string;
    threadPanId: string;
    threadExtendedPanId: string;
}

export const initNetworkSettings: INetworkSetting = {
    networkName: null,
    threadChannel: null,
    threadMasterKey: null,
    threadPanId: null,
    threadExtendedPanId: null
};



export interface ISmtpSetting {
    smtpServerAddress: string;
    smtpUserName: string;
    smtpPassword: string;
    smtpPort: number;
}

export const initSmtpSettings: ISmtpSetting = {
    smtpServerAddress: null,
    smtpUserName: null,
    smtpPassword: null,
    smtpPort: 0
};



export interface ISystemSetting {
    systemTime: Date;
}

export const initSystemSettings: ISystemSetting = {
    systemTime: null
};
