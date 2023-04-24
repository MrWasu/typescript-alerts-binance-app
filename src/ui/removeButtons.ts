import { arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts, setArrBtcHigherAlerts, setArrBtcLowerAlerts, setArrBtcVolumeAlerts, setArrEthHigherAlerts, setArrEthLowerAlerts, setArrEthVolumeAlerts } from "../data";
import { Alarm } from "../data/interfaces";
import { logs } from "./logs";

export function removeButtons(): void {
    // Botones de borrar para cada alarma 

    let _arrBtcHigherAlerts: Alarm[] = arrBtcHigherAlerts;
    let _arrBtcLowerAlerts: Alarm[] = arrBtcLowerAlerts;
    let _arrBtcVolumeAlerts: Alarm[] = arrBtcVolumeAlerts;
    let _arrEthHigherAlerts: Alarm[] = arrEthHigherAlerts;
    let _arrEthLowerAlerts: Alarm[] = arrEthLowerAlerts;
    let _arrEthVolumeAlerts: Alarm[] = arrEthVolumeAlerts;

    const buttons = document.querySelectorAll("button.btn-remove");
    for (let i = 0; i < buttons.length; i++) {
       
        buttons[i].addEventListener("click", function (this: HTMLElement) {

            let pos: number = -1

            const allArrays = [_arrBtcHigherAlerts, _arrBtcLowerAlerts, _arrBtcVolumeAlerts, _arrEthHigherAlerts, _arrEthLowerAlerts, _arrEthVolumeAlerts]

            for (let element of allArrays) {
                for (let e of element) {
                    if (parseInt(this.id) == e.id) {
                        pos = element.indexOf(e);
                    }
                    if (pos != -1) {
                        element.splice(pos, 1);
                        pos = -1;
                        logs('alert-deleted', e);
                    }
                }
            }

            setArrBtcHigherAlerts(_arrBtcHigherAlerts);
            setArrBtcLowerAlerts(_arrBtcLowerAlerts);
            setArrBtcVolumeAlerts(_arrBtcVolumeAlerts);
            setArrEthHigherAlerts(_arrEthHigherAlerts);
            setArrEthLowerAlerts(_arrEthLowerAlerts);
            setArrEthVolumeAlerts(_arrEthVolumeAlerts);
        });
    }
}