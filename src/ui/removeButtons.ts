import { arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts } from "../data";
import { saveLocalStorage } from "../helpers";
import { logs } from "./logs";

export function removeButtons():void {
    // Botones de borrar para cada alarma 

    const buttons = document.querySelectorAll("button.btn-remove");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(this: HTMLElement) { // apuntes

        let pos: number = -1
        
        for (let element of arrBtcHigherAlerts) {
            if (parseInt(this.id) == element.id) {
                pos = arrBtcHigherAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrBtcHigherAlerts.splice(pos, 1);
                pos = -1; 
                logs('alert-deleted', element);
            }
        }
        for (let element of arrBtcLowerAlerts) {
            if (parseInt(this.id) == element.id) {
                pos = arrBtcLowerAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrBtcLowerAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
        for (let element of arrBtcVolumeAlerts) {
            if (parseInt(this.id) == element.id) {
                pos = arrBtcVolumeAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrBtcVolumeAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
        for (let element of arrEthHigherAlerts) {
            if (parseInt(this.id) == element.id) {
                pos = arrEthHigherAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrEthHigherAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
        for (let element of arrEthLowerAlerts) {
            if (parseInt(this.id) == element.id) {
                pos = arrEthLowerAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrEthLowerAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
        for (let element of arrEthVolumeAlerts) {
            if (parseInt(this.id) == element.id) {
                pos = arrEthVolumeAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrEthVolumeAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
    });

    saveLocalStorage();
    }}