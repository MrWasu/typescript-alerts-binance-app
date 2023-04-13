export function setAlertsForArrays(cryptoChoice, alertType) {
    // Se almacenan las alarmas en los arreglos.

    const inputAlertSimple = parseFloat(document.getElementById('input-alert-simple').value);
    const inputAlertOne = parseFloat(document.getElementById('input-alert-1').value);
    const inputAlertTwo = parseFloat(document.getElementById('input-alert-2').value);
    const inputAlertVolume = parseInt(document.getElementById('input-volume-alert').value);
    const inputDesc = document.getElementById('alert-desc').value;


    // Si el valor del input es superior se añade al arreglo de alarmas por encima del precio, si es inferior al arreglo de alarmas inferiores, 
    // y si es de volumen, al arreglo de alertas de volumen.
    if (cryptoChoice === 'bitcoin') {
        if (alertType === 'simple' && inputAlertSimple > 0) {
            btcPrice < inputAlertSimple ? arrBtcHigherAlerts.push(new Alert(inputAlertSimple, cryptoChoice, inputDesc, 'Superior')) : arrBtcLowerAlerts.push(new Alert(inputAlertSimple, cryptoChoice, inputDesc, 'Inferior'));
            logs('alert', 'price', cryptoChoice);
        }
        else if (alertType === 'double' && inputAlertOne > 0 && inputAlertTwo > 0) {
            if (btcPrice > inputAlertOne || btcPrice < inputAlertTwo) {
                alert('Ingresa los campos correctamente')
            } else {
                arrBtcHigherAlerts.push(new Alert(inputAlertOne, cryptoChoice, inputDesc, 'Superior'));
                arrBtcLowerAlerts.push(new Alert(inputAlertTwo, cryptoChoice, inputDesc, 'Inferior'));
                logs('alert', 'price', cryptoChoice);
            }
        }
        else if (alertType === 'volume' && inputAlertVolume > 0) {
            arrBtcVolumeAlerts.push(new Alert(inputAlertVolume, cryptoChoice, inputDesc, 'Volumen'));
            logs('alert', 'volume', cryptoChoice);
        }
        else {
            alert('Rellena los campos');
        }
    }

    else if (cryptoChoice === 'ethereum') {
        if (alertType === 'simple' && inputAlertSimple > 0) {
            ethPrice < inputAlertSimple ? arrEthHigherAlerts.push(new Alert(inputAlertSimple, cryptoChoice, inputDesc, 'Superior')) : arrEthLowerAlerts.push(new Alert(inputAlertSimple, cryptoChoice, inputDesc, 'Inferior'));
            logs('alert', 'price', cryptoChoice);
        }
        else if (alertType === 'double' && inputAlertOne > 0 && inputAlertTwo > 0) {
            if (ethPrice > inputAlertOne || ethPrice < inputAlertTwo) {
                alert('Ingresa los campos correctamente');
            } else {
                arrEthHigherAlerts.push(new Alert(inputAlertOne, cryptoChoice, inputDesc, 'Superior'));
                arrEthLowerAlerts.push(new Alert(inputAlertTwo, cryptoChoice, inputDesc, 'Inferior'));
                logs('alert', 'price', cryptoChoice);
            }
        }
        else if (alertType === 'volume' && inputAlertVolume > 0) {
            arrEthVolumeAlerts.push(new Alert(inputAlertVolume, cryptoChoice, inputDesc, 'Volumen'));
            logs('alert', 'volume', cryptoChoice);
        }
        else {
            alert('Rellena los campos');
        }
    }

    showAlertsLi();
    showAlertOnConsole();

    // mandamos al localStorage el contador de alarmas creadas, para que al reiniciar la página las alarmas y sus id no se sustituyan, y asi funcionen los btn-remove
    const AlertCounter = Alert.counter;
    localStorage.setItem('AlertCounter', AlertCounter);
}