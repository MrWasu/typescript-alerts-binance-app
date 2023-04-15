import { arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts } from "../data";

export function saveLocalStorage(): void {

    // Se encarga de almacenar en el local storage todos los arreglos que contienen las alertas

    localStorage.setItem('arrBtcHigherAlerts', JSON.stringify(arrBtcHigherAlerts));
    localStorage.setItem('arrBtcLowerAlerts', JSON.stringify(arrBtcLowerAlerts));
    localStorage.setItem('arrBtcVolumeAlerts', JSON.stringify(arrBtcVolumeAlerts));
    localStorage.setItem('arrEthHigherAlerts', JSON.stringify(arrEthHigherAlerts));
    localStorage.setItem('arrEthLowerAlerts', JSON.stringify(arrEthLowerAlerts));
    localStorage.setItem('arrEthVolumeAlerts', JSON.stringify(arrEthVolumeAlerts));
}
