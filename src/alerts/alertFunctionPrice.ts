export function alertFunctionPrice() {
    // Se revisan las alarmas comparandolas con el precio actual, si hay alarma, se le cambia la propiedad status a la alarma y se manda a imprimir en el log

    for (let element of arrBtcHigherAlerts) {
        if (btcPrice > element.price) {
            element.status = true;
            logs('alert-match', element);
        }
    }

    for (let element of arrBtcLowerAlerts) {
        if (btcPrice < element.price) {
            element.status = true;
            logs('alert-match', element);
        }
    }

    for (let element of arrEthHigherAlerts) {
        if (ethPrice > element.price) {
            element.status = true;
            logs('alert-match', element);
        }
    }

    for (let element of arrEthLowerAlerts) {
        if (ethPrice < element.price) {
            element.status = true;
            logs('alert-match', element);
        }
    }

    soundAlert(); // funcion de sonido de la alarma
}
