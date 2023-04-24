import { arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts } from "../data";
import { alarmSettingsSounds } from "./alarmSettingsSounds";

export function soundAlert(): void {
    // Se revisan los status de cada alarma y si es true se manda a reproducir el sonido

    const arrPrices = [arrBtcHigherAlerts, arrBtcLowerAlerts, arrEthHigherAlerts, arrEthLowerAlerts,]
    const arrVolumes = [arrBtcVolumeAlerts, arrEthVolumeAlerts]
    
    for (let element of arrPrices) {

        for (let e of element) {
            if (e.status == true) {
                alarmSettingsSounds('p');
            }
        }
    }

    for (let element of arrVolumes) {

        for (let e of element) {
            if (e.status == true) {
                alarmSettingsSounds('v');
            }
        }
    }
}
