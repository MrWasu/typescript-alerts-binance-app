import { arrBtcVolumeAlerts, arrEthVolumeAlerts, btcVolume, ethVolume } from "../data";
import { soundAlert } from "../sounds";
import { logs, volumeAlertBtnReset } from "../ui";

export function alertFunctionVolume(): void {
    // Se revisan las alarmas comparandolas con el volumen actual, si hay alarma, se le cambia la propiedad status a la alarma y se manda a imprimir en el log

    for (let element of arrBtcVolumeAlerts) {
        if (btcVolume > element.price) {
            element.status = true;
            volumeAlertBtnReset();
            logs('alert-match', element, 'volumen');
        }
    }

    for (let element of arrEthVolumeAlerts) {
        if (ethVolume > element.price) {
            element.status = true;
            volumeAlertBtnReset();
            logs('alert-match', element, 'volumen');
        }
    }

    soundAlert();
}