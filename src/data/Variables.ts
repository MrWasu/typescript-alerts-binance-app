let btcPrice = 0;
let ethPrice = 0;
let btcVolume = 0;
let ethVolume = 0;
let cryptoRadioChoice = 'bitcoin';
let alertTypeChoice = 'double';
let mute = false;


// Alarmas Predefinidas
const alarmDemo1 = {"id":1,"price":50000,"currency":"bitcoin","description":"Alarma de ejemplo 1","type":"Superior","status":false}
const alarmDemo2 = {"id":2,"price":2000,"currency":"bitcoin","description":"Alarma de ejemplo 2","type":"Inferior","status":false}
const alarmDemo3 = {"id":3,"price":30000,"currency":"bitcoin","description":"Alarma Volumen de ejemplo 3","type":"Volumen","status":false}
const alarmDemo4 = {"id":4,"price":10000,"currency":"ethereum","description":"Alarma doble de ejemplo ","type":"Superior","status":false}
const alarmDemo5 = {"id":5,"price":500,"currency":"ethereum","description":"Alarma doble de ejemplo ","type":"Inferior","status":false}
const alarmDemo6 = {"id":6,"price":90000,"currency":"ethereum","description":"Alarma Volumen de ejemplo","type":"Volumen","status":false}
const alarmDemo7 = {"id":7,"price":80000,"currency":"ethereum","description":"Alarma Volumen de ejemplo","type":"Volumen","status":false}


// Areglos
const arrBtcHigherAlerts = JSON.parse(localStorage.getItem('arrBtcHigherAlerts')) || [alarmDemo1]
const arrBtcLowerAlerts = JSON.parse(localStorage.getItem('arrBtcLowerAlerts')) || [alarmDemo2];
const arrBtcVolumeAlerts = JSON.parse(localStorage.getItem('arrBtcVolumeAlerts')) || [alarmDemo3];
const arrEthHigherAlerts = JSON.parse(localStorage.getItem('arrEthHigherAlerts')) || [alarmDemo4];
const arrEthLowerAlerts = JSON.parse(localStorage.getItem('arrEthLowerAlerts')) || [alarmDemo5];
const arrEthVolumeAlerts = JSON.parse(localStorage.getItem('arrEthVolumeAlerts')) || [alarmDemo6, alarmDemo7];
const counterForStorage = JSON.parse(localStorage.getItem('AlertCounter')) || 7;

const logIdDontRepeat = [];
let logContent = [];
let hourSimple;
let dateSimple;

export {
    btcPrice,
    ethPrice,
    btcVolume,
    ethVolume,
    cryptoRadioChoice,
    alertTypeChoice,
    mute,
    alarmDemo1,
    alarmDemo2,
    alarmDemo3,
    alarmDemo4,
    alarmDemo5,
    alarmDemo6,
    alarmDemo7,
    arrBtcHigherAlerts,
    arrBtcLowerAlerts,
    arrBtcVolumeAlerts,
    arrEthHigherAlerts,
    arrEthLowerAlerts,
    arrEthVolumeAlerts,
    counterForStorage,
    logIdDontRepeat,
    logContent,
    hourSimple,
    dateSimple
  };