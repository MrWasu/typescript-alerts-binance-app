import { arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts, setArrBtcHigherAlerts, setArrBtcLowerAlerts, setArrBtcVolumeAlerts, setArrEthHigherAlerts, setArrEthLowerAlerts, setArrEthVolumeAlerts } from "../data";
import { logs } from "./logs";

export function removeButtons(): void {
    // Botones de borrar para cada alarma 

    interface Alarm {
        id: number;
        price: number;
        currency: string;
        description: string;
        type: string;
        status: boolean;
    }

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

            for (let element of _arrBtcHigherAlerts) {
                if (parseInt(this.id) == element.id) {
                    pos = _arrBtcHigherAlerts.indexOf(element);
                }
                if (pos != -1) {
                    _arrBtcHigherAlerts.splice(pos, 1);
                    setArrBtcHigherAlerts(_arrBtcHigherAlerts)
                    pos = -1;
                    logs('alert-deleted', element);
                }
            }
            for (let element of _arrBtcLowerAlerts) {
                if (parseInt(this.id) == element.id) {
                    pos = _arrBtcLowerAlerts.indexOf(element);
                }
                if (pos != -1) {
                    _arrBtcLowerAlerts.splice(pos, 1);
                    setArrBtcLowerAlerts(_arrBtcLowerAlerts)
                    pos = -1;
                    logs('alert-deleted', element);
                }
            }
            for (let element of _arrBtcVolumeAlerts) {
                if (parseInt(this.id) == element.id) {
                    pos = _arrBtcVolumeAlerts.indexOf(element);
                }
                if (pos != -1) {
                    _arrBtcVolumeAlerts.splice(pos, 1);
                    setArrBtcVolumeAlerts(_arrBtcVolumeAlerts)
                    pos = -1;
                    logs('alert-deleted', element);
                }
            }
            for (let element of _arrEthHigherAlerts) {
                if (parseInt(this.id) == element.id) {
                    pos = _arrEthHigherAlerts.indexOf(element);
                }
                if (pos != -1) {
                    _arrEthHigherAlerts.splice(pos, 1);
                    setArrEthHigherAlerts(_arrEthHigherAlerts)
                    pos = -1;
                    logs('alert-deleted', element);
                }
            }
            for (let element of _arrEthLowerAlerts) {
                if (parseInt(this.id) == element.id) {
                    pos = _arrEthLowerAlerts.indexOf(element);
                }
                if (pos != -1) {
                    _arrEthLowerAlerts.splice(pos, 1);
                    setArrEthLowerAlerts(_arrEthLowerAlerts)
                    pos = -1;
                    logs('alert-deleted', element);
                }
            }
            for (let element of _arrEthVolumeAlerts) {
                if (parseInt(this.id) == element.id) {
                    pos = _arrEthVolumeAlerts.indexOf(element);
                }
                if (pos != -1) {
                    _arrEthVolumeAlerts.splice(pos, 1);
                    setArrEthVolumeAlerts(_arrEthVolumeAlerts)
                    pos = -1;
                    logs('alert-deleted', element);
                }
            }
        });

    }
}