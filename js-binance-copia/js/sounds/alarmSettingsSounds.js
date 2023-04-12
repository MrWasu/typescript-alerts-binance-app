function alarmSettingsSounds(arg) {
    // Se reproduce un sonido de alerta según el tipo de alerta
    let song1 = $('#sonido-1').get(0);
    let song2 = $('#sonido-2').get(0);

    if (arg == 'p' && mute == false) {
        song1.play();
    }

    if (arg == 'v' && mute == false) {
        song2.play();
    }
}