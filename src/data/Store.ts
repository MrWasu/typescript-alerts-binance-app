import { saveLocalStorage } from "../helpers";

let btcPrice: number = 0; //! revisar const y let
let ethPrice: number = 0;
let btcVolume: number = 0;
let ethVolume: number = 0;
let cryptoRadioChoice: string = 'bitcoin';
let alertTypeChoice: string = 'double';
let mute: boolean = false;

// Alarmas Predefinidas

interface Alarm {
  id: number;
  price: number;
  currency: string;
  description: string;
  type: string;
  status: boolean;
}

const alarmDemo1: Alarm = { "id": 1, "price": 50000, "currency": "bitcoin", "description": "Alarma de ejemplo 1", "type": "Superior", "status": false }
const alarmDemo2: Alarm = { "id": 2, "price": 2000, "currency": "bitcoin", "description": "Alarma de ejemplo 2", "type": "Inferior", "status": false }
const alarmDemo3: Alarm = { "id": 3, "price": 30000, "currency": "bitcoin", "description": "Alarma Volumen de ejemplo 3", "type": "Volumen", "status": false }
const alarmDemo4: Alarm = { "id": 4, "price": 10000, "currency": "ethereum", "description": "Alarma doble de ejemplo ", "type": "Superior", "status": false }
const alarmDemo5: Alarm = { "id": 5, "price": 500, "currency": "ethereum", "description": "Alarma doble de ejemplo ", "type": "Inferior", "status": false }
const alarmDemo6: Alarm = { "id": 6, "price": 90000, "currency": "ethereum", "description": "Alarma Volumen de ejemplo", "type": "Volumen", "status": false }
const alarmDemo7: Alarm = { "id": 7, "price": 80000, "currency": "ethereum", "description": "Alarma Volumen de ejemplo", "type": "Volumen", "status": false }


// Arreglos
//*const arrBtcHigherAlerts = JSON.parse(localStorage.getItem('arrBtcHigherAlerts')) || [alarmDemo1]

let storageIsVoid = true
const storedData = localStorage.getItem('arrBtcHigherAlerts');
const storedData2 = localStorage.getItem('arrBtcLowerAlerts');
const storedData3 = localStorage.getItem('arrBtcVolumeAlerts');
const storedData4 = localStorage.getItem('arrEthHigherAlerts');
const storedData5 = localStorage.getItem('arrEthLowerAlerts');
const storedData6 = localStorage.getItem('arrEthVolumeAlerts');

if (storedData || storedData2 || storedData3 || storedData4 || storedData5 || storedData6) {
  storageIsVoid = false
}

let arrBtcHigherAlerts: Alarm[] = [] // apuntes
if (storedData) arrBtcHigherAlerts = JSON.parse(storedData)
if (!storedData && storageIsVoid) arrBtcHigherAlerts.push(alarmDemo1)

let arrBtcLowerAlerts: Alarm[] = [] // apuntes
if (storedData2) arrBtcLowerAlerts = JSON.parse(storedData2)
if (!storedData2 && storageIsVoid) arrBtcLowerAlerts.push(alarmDemo2)

let arrBtcVolumeAlerts: Alarm[] = [] // apuntes
if (storedData3) arrBtcVolumeAlerts = JSON.parse(storedData3)
if (!storedData3 && storageIsVoid) arrBtcVolumeAlerts.push(alarmDemo3)

let arrEthHigherAlerts: Alarm[] = [] // apuntes
if (storedData4) arrEthHigherAlerts = JSON.parse(storedData4)
if (!storedData4 && storageIsVoid) arrEthHigherAlerts.push(alarmDemo4)

let arrEthLowerAlerts: Alarm[] = [] // apuntes
if (storedData5) arrEthLowerAlerts = JSON.parse(storedData5)
if (!storedData5 && storageIsVoid) arrEthLowerAlerts.push(alarmDemo5)

let arrEthVolumeAlerts: Alarm[] = [] // apuntes
if (storedData6) arrEthVolumeAlerts = JSON.parse(storedData6)
if (!storedData6 && storageIsVoid) arrEthVolumeAlerts.push(alarmDemo6, alarmDemo7)


let counterForStorage: number = JSON.parse(localStorage.getItem('AlertCounter') ?? '7') || 7;

/* En este ejemplo, se utiliza el operador de coalescencia nula (??) para proporcionar un valor predeterminado de una cadena vacía ('[]')
en caso de que el valor recuperado del almacenamiento local sea null. Luego, se utiliza JSON.parse() para analizar la cadena de texto y obtener un arreglo válido.
Si el resultado de JSON.parse() sigue siendo null, se utiliza un valor predeterminado en su lugar
(por ejemplo, [alarmDemo1], [alarmDemo2], etc., o 7 en el caso de counterForStorage). 
Esto asegura que estés pasando una cadena de texto válida a JSON.parse() y evita el error de tipo. */


let logIdDontRepeat: number[] = [];
let logContent: any = [];
let hourSimple: string;
let dateSimple: string;


export const setBtcPrice = (price: number) => btcPrice = price;
export const setEthPrice = (price: number) => ethPrice = price;
export const setBtcVolume = (volume: number) => btcVolume = volume;
export const setEthVolume = (volume: number) => ethVolume = volume;
export const setCryptoRadioChoice = (choice: string) => cryptoRadioChoice = choice;
export const setAlertTypeChoice = (choice: string) => alertTypeChoice = choice;
export const setMute = (isMute: boolean) => mute = isMute;
export const setLogIdDontRepeat = (ids: number[]) => logIdDontRepeat = ids;
export const setLogContent = (content: any) => logContent = content;
export const setHourSimple = (hour: string) => hourSimple = hour;
export const setDateSimple = (date: string) => dateSimple = date;

export const setArrBtcHigherAlerts = (arr: Alarm[]) => {
  arrBtcHigherAlerts = arr;
  saveLocalStorage()
}
export const setArrBtcLowerAlerts = (arr: Alarm[]) => {
  arrBtcLowerAlerts = arr;
  saveLocalStorage()
}
export const setArrBtcVolumeAlerts = (arr: Alarm[]) => {
  arrBtcVolumeAlerts = arr;
  saveLocalStorage()
}
export const setArrEthHigherAlerts = (arr: Alarm[]) => {
  arrEthHigherAlerts = arr;
  saveLocalStorage()
}
export const setArrEthLowerAlerts = (arr: Alarm[]) => {
  arrEthLowerAlerts = arr;
  saveLocalStorage()
}
export const setArrEthVolumeAlerts = (arr: Alarm[]) => {
  arrEthVolumeAlerts = arr;
  saveLocalStorage()
}

export const setCounterForStorage = (counter: number) => counterForStorage = counter;


export {
  alertTypeChoice,
  arrBtcHigherAlerts,
  arrBtcLowerAlerts,
  arrBtcVolumeAlerts,
  arrEthHigherAlerts,
  arrEthLowerAlerts,
  arrEthVolumeAlerts,
  btcPrice,
  btcVolume,
  counterForStorage,
  cryptoRadioChoice,
  dateSimple,
  ethPrice,
  ethVolume,
  hourSimple,
  logContent,
  logIdDontRepeat,
  mute
};