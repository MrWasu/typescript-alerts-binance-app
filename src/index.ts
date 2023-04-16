// hay un error que hacer que se siga almacenando el contador de alert counter con su valor aunque no haya alarmas, habria que hacer que si los arreglos estan vacios, mande 0 como counterforStorage
import { alertFunctionVolume, alertFunctionPrice, setAlertsForArrays } from "./alerts/index"; // aputnes archivo de barril ts
import { checkdata, getPriceAndVolume } from "./api";
import { alertTypeChoice, btcPrice, counterForStorage, cryptoRadioChoice, ethPrice, mute, setMute } from "./data/Store";
import { showDate } from "./helpers";
import { logs, modifiedAlertCamps, showAlertsLi } from "./ui";

document.addEventListener('DOMContentLoaded', function () {

    setInterval(() => getPriceAndVolume(), 1000); // recoge los datos desde binance
    showDate(); // manda crear la hora y mostrarla
    modifiedAlertCamps(); // configura los inputs según las opciones a elegir

    
    setTimeout(function () {
        setInterval(function () {

            if (btcPrice != 0 || ethPrice != 0) {
                showDate();
                alertFunctionPrice(); // chequea si hay alarma de precio
                showAlertsLi(); // muestra los LI con todas las alarmas creadas
            }
        }, 1000)
    }, 500)


    setTimeout(function () {
        checkdata(); // comprueba el estado de la API de Binance
    }, 2000)

  
    setInterval(function () {
        alertFunctionVolume(); // chequea si hay alarma de volumen
    }, 60000)

   
    setTimeout(function () {
        if (counterForStorage != 0 && counterForStorage != null && counterForStorage != undefined) {
            logs('getLocalStorage'); // imprime en el log si se han cargado las alertas desde el localStorage
        }
    }, 1000)

    document.getElementById('add-alert-btn')!.addEventListener('click', function () {
        // funcionamiento del botón añadir alerta
        setAlertsForArrays(cryptoRadioChoice, alertTypeChoice);
    });

    document.getElementById('togBtn')!.addEventListener('change', function () {
        // boton silenciar
        const _mute: boolean = (this as HTMLInputElement).checked;
        setMute(_mute)
    });
});
