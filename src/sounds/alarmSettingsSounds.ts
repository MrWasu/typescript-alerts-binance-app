import { mute } from "../data";

export function alarmSettingsSounds(arg: string): void {
    // Se reproduce un sonido de alerta según el tipo de alerta
    const song1: HTMLAudioElement | null = document.getElementById('sonido-1') as HTMLAudioElement | null; // apuntes
    const song2: HTMLAudioElement | null = document.getElementById('sonido-2') as HTMLAudioElement | null;

    if (arg === 'p' && mute === false && song1) {
        song1.play();
    }

    if (arg === 'v' && mute === false && song2) {
        song2.play();
    }
}
