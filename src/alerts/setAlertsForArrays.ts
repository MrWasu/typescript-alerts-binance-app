import { Alert, arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts, btcPrice, ethPrice, setArrBtcHigherAlerts, setArrBtcLowerAlerts, setArrBtcVolumeAlerts, setArrEthHigherAlerts, setArrEthLowerAlerts, setArrEthVolumeAlerts } from "../data";
import { Alarm } from "../data/interfaces";
import { showAlertOnConsole } from "../helpers";
import { logs, showAlertsLi } from "../ui";

export function setAlertsForArrays(cryptoChoice: string, alertType: string): void {
    // Se almacenan las alarmas en los arreglos.

    //*const inputAlertSimple = parseFloat(document.getElementById('input-alert-simple').value);
    const inputAlertSimple = parseFloat((<HTMLInputElement>document.getElementById('input-alert-simple'))?.value);
    const inputAlertOne = parseFloat((<HTMLInputElement>document.getElementById('input-alert-1'))?.value);
    const inputAlertTwo = parseFloat((<HTMLInputElement>document.getElementById('input-alert-2'))?.value);
    const inputAlertVolume = parseInt((<HTMLInputElement>document.getElementById('input-volume-alert'))?.value);
    const inputDesc = (<HTMLInputElement>document.getElementById('alert-desc'))?.value;

    let _arrBtcHigherAlerts: Alarm[] = arrBtcHigherAlerts;
    let _arrBtcLowerAlerts: Alarm[] = arrBtcLowerAlerts;
    let _arrBtcVolumeAlerts: Alarm[] = arrBtcVolumeAlerts;
    let _arrEthHigherAlerts: Alarm[] = arrEthHigherAlerts;
    let _arrEthLowerAlerts: Alarm[] = arrEthLowerAlerts;
    let _arrEthVolumeAlerts: Alarm[] = arrEthVolumeAlerts;

    // Si el valor del input es superior se añade al arreglo de alarmas por encima del precio, si es inferior al arreglo de alarmas inferiores, 
    // y si es de volumen, al arreglo de alertas de volumen.
    if (cryptoChoice === 'bitcoin') {
        if (alertType === 'simple' && inputAlertSimple > 0) {
            btcPrice < inputAlertSimple ? _arrBtcHigherAlerts.push(new Alert(inputAlertSimple, cryptoChoice, inputDesc, 'Superior')) : _arrBtcLowerAlerts.push(new Alert(inputAlertSimple, cryptoChoice, inputDesc, 'Inferior'));

            setArrBtcHigherAlerts(_arrBtcHigherAlerts);
            setArrBtcLowerAlerts(_arrBtcLowerAlerts)

            logs('alert', 'price', cryptoChoice);
        }
        else if (alertType === 'double' && inputAlertOne > 0 && inputAlertTwo > 0) {
            if (btcPrice > inputAlertOne || btcPrice < inputAlertTwo) {

                alert('Ingresa los campos correctamente')

            } else {
                _arrBtcHigherAlerts.push(new Alert(inputAlertOne, cryptoChoice, inputDesc, 'Superior'));
                setArrBtcHigherAlerts(_arrBtcHigherAlerts)

                _arrBtcLowerAlerts.push(new Alert(inputAlertTwo, cryptoChoice, inputDesc, 'Inferior'));
                setArrBtcLowerAlerts(_arrBtcLowerAlerts)

                logs('alert', 'price', cryptoChoice);
            }
        }
        else if (alertType === 'volume' && inputAlertVolume > 0) {
            _arrBtcVolumeAlerts.push(new Alert(inputAlertVolume, cryptoChoice, inputDesc, 'Volumen'));
            setArrBtcVolumeAlerts(_arrBtcVolumeAlerts)

            logs('alert', 'volume', cryptoChoice);
        }
        else {
            alert('Rellena los campos');
        }
    }

    else if (cryptoChoice === 'ethereum') {
        if (alertType === 'simple' && inputAlertSimple > 0) {
            ethPrice < inputAlertSimple ? _arrEthHigherAlerts.push(new Alert(inputAlertSimple, cryptoChoice, inputDesc, 'Superior')) : _arrEthLowerAlerts.push(new Alert(inputAlertSimple, cryptoChoice, inputDesc, 'Inferior'));

            setArrEthHigherAlerts(_arrEthHigherAlerts);
            setArrEthLowerAlerts(_arrEthLowerAlerts)

            logs('alert', 'price', cryptoChoice);
        }
        else if (alertType === 'double' && inputAlertOne > 0 && inputAlertTwo > 0) {
            if (ethPrice > inputAlertOne || ethPrice < inputAlertTwo) {
                alert('Ingresa los campos correctamente');
            } else {
                _arrEthHigherAlerts.push(new Alert(inputAlertOne, cryptoChoice, inputDesc, 'Superior'));
                setArrEthHigherAlerts(_arrEthHigherAlerts)

                _arrEthLowerAlerts.push(new Alert(inputAlertTwo, cryptoChoice, inputDesc, 'Inferior'));
                setArrEthLowerAlerts(_arrEthLowerAlerts)

                logs('alert', 'price', cryptoChoice);
            }
        }
        else if (alertType === 'volume' && inputAlertVolume > 0) {
            _arrEthVolumeAlerts.push(new Alert(inputAlertVolume, cryptoChoice, inputDesc, 'Volumen'));
            console.log(cryptoChoice)
            setArrEthVolumeAlerts(_arrEthVolumeAlerts)

            logs('alert', 'volume', cryptoChoice);
        }
        else {
            alert('Rellena los campos');
        }
    }

    showAlertsLi();
    showAlertOnConsole();

    // mandamos al localStorage el contador de alarmas creadas, para que al reiniciar la página las alarmas y sus id no se sustituyan, y asi funcionen los btn-remove
    const AlertCounter: any = Alert.counter;
    localStorage.setItem('AlertCounter', AlertCounter);
}