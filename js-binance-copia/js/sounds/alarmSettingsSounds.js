function alarmSettingsSounds(arg) {
    // Se reproduce un sonido de alerta según el tipo de alerta
    const song1 = document.getElementById('sonido-1');
    const song2 = document.getElementById('sonido-2');
    

    if (arg == 'p' && mute == false) {
        song1.play();
    }

    if (arg == 'v' && mute == false) {
        song2.play();
    }
}