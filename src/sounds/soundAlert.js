function soundAlert() {
    // Se revisan los status de cada alarma y si es true se manda a reproducir el sonido

    for (let element of arrBtcHigherAlerts) {
        if (element.status == true) {
            alarmSettingsSounds('p');
        }
    }
    for (let element of arrBtcLowerAlerts) {
        if (element.status == true) {
            alarmSettingsSounds('p');
        }
    }
    for (let element of arrBtcVolumeAlerts) {
        if (element.status == true) {
            alarmSettingsSounds('v');
        }
    }

    for (let element of arrEthHigherAlerts) {
        if (element.status == true) {
            alarmSettingsSounds('p');
        }
    }
    for (let element of arrEthLowerAlerts) {
        if (element.status == true) {
            alarmSettingsSounds('p');
        }
    }
    for (let element of arrEthVolumeAlerts) {
        if (element.status == true) {
            alarmSettingsSounds('v');
        }
    }
}