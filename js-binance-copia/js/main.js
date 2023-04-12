// hay un error que hacer que se siga almacenando el contador de alert counter con su valor aunque no haya alarmas, habria que hacer que si los arreglos estan vacios, mande 0 como counterforStorage

$(document).ready(function () {
    showDate(); // manda crear la hora y mostrarla
    getPriceAndVolume(); // recoge los datos desde binance
    modifiedAlertCamps(); // configura los inputs según las opciones a elegir
    logs('start'); // imprime el texto de inicio en el log
    
    setTimeout(function () {
        checkdata(); // comprueba el estado de la API de Binance
    }, 2000)
    
    setInterval(function () {
        alertFunctionPrice(); // chequea si hay alarma de precio
        showAlertsLi(); // muestra los LI con todas las alarmas creadas
    }, 1000)
    
    setInterval(function () {
        alertFunctionVolume(); // chequea si hay alarma de volumen
    }, 60000)

    setTimeout(function () {
        if (counterForStorage != 0 && counterForStorage != null && counterForStorage != undefined) {  
         logs('getLocalStorage'); // imprime en el log si se han cargado las alertas desde el localStorage
        }
    }, 1000)

    $("#add-alert-btn").on("click", function () { // funcionamiento del botón añadir alerta
        setAlertsForArrays(cryptoRadioChoice, alertTypeChoice);
    });

    $("#togBtn").on("change", function () { // boton silenciar
        mute = $(this).prop("checked"); 
    });
});
