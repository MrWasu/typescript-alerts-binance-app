function volumeAlertBtnReset() {
    // Muestra el boton y pone status false a todas las alarmas de volumen (al minuto volveran a sonar)

    $('#reset-alert-volume').css('display', 'block');

    $('#reset-alert-volume').on("click", function () {
        for (let element of arrBtcVolumeAlerts) {
            element.status = false;
        }
        for (let element of arrEthVolumeAlerts) {
            element.status = false;
        }
        $('#reset-alert-volume').css('display', 'none');
    });
}