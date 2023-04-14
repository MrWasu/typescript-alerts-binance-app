import { arrBtcVolumeAlerts, arrEthVolumeAlerts } from "../data";

export function volumeAlertBtnReset() {
    // Muestra el botón y pone status en falso para todas las alarmas de volumen (volverán a sonar después de un minuto)

    document.getElementById('reset-alert-volume').style.display = 'block';

    document.getElementById('reset-alert-volume').addEventListener('click', function () {
        for (let element of arrBtcVolumeAlerts) {
            element.status = false;
        }
        for (let element of arrEthVolumeAlerts) {
            element.status = false;
        }
        document.getElementById('reset-alert-volume').style.display = 'none';
    });
}
