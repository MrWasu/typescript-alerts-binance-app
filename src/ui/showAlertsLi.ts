import { arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts } from "../data";
import { removeButtons } from "./removeButtons";

export function showAlertsLi():void {
    // Muestra todas alertas en los paneles junto con el boton de borrar

    let btcAlertsLi: string = '';
    let ethAlertsLi: string = '';

    const classAlert = 'blink rojo';
    const style = ' d-flex justify-content-between align-middle';

    // El boton se pasa junto con la id de la alarma que hace que posteriormente btnRemove() pase a borrar a alarma por el id del boton y la alarma
    const buildButton = (id:number) => `<button id="${id}" type="button" class="btn btn-danger btn-remove"> <span aria-hidden="true">&times;</span> </button>`;

    const arraysBtcList =  [...arrBtcHigherAlerts, ...arrBtcLowerAlerts, ...arrBtcVolumeAlerts]; // apuntes
    const arraysEthList =  [...arrEthHigherAlerts, ...arrEthLowerAlerts, ...arrEthVolumeAlerts];

    for (let element of arraysBtcList) {
        let status = element.status ? classAlert : '';
        btcAlertsLi += `<li class="${status} ${element.type} ${style}"> <div> <span class="type"> ${element.type}</span> ${element.price}  <span class="desc-li"> - ${element.description}</span> </div>  <div>  ${buildButton(element.id)} </div> </li> `;
    }
    document.getElementById('alarms-btc-list')!.innerHTML = btcAlertsLi;


    for (let element of arraysEthList) {
        let status = element.status ? classAlert : '';
        ethAlertsLi += `<li class="${status} ${element.type} ${style}"> <div> <span class="type">${element.type}</span> ${element.price}  <span class="desc-li"> - ${element.description}</span> </div> <div>  ${buildButton(element.id)} </div> </li> `;
    }
    document.getElementById('alarms-eth-list')!.innerHTML = ethAlertsLi;

    removeButtons();
}