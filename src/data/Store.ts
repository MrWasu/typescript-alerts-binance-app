import { saveLocalStorage } from "../helpers";
import { alarmDemo1, alarmDemo2, alarmDemo3, alarmDemo4, alarmDemo5, alarmDemo6, alarmDemo7 } from "./demoAlerts";
import { Alarm } from "./interfaces";

// Variables
export let btcPrice: number = 0; 
export let ethPrice: number = 0;
export let btcVolume: number = 0;
export let ethVolume: number = 0;
export let cryptoRadioChoice: string = 'bitcoin';
export let alertTypeChoice: string = 'double';
export let mute: boolean = false;
export let logIdDontRepeat: number[] = [];
export let logContent: any = [];
export let hourSimple: string;
export let dateSimple: string;
export let counterForStorage: number = JSON.parse(localStorage.getItem('AlertCounter') ?? '7') || 7;


// Arreglos que contienen las alarmas
export let arrBtcHigherAlerts: Alarm[] = [];
export let arrBtcLowerAlerts: Alarm[] = [];
export let arrBtcVolumeAlerts: Alarm[] = [];
export let arrEthHigherAlerts: Alarm[] = [];
export let arrEthLowerAlerts: Alarm[] = [];
export let arrEthVolumeAlerts: Alarm[] = [];


// Manejo de las alarmas del local storage y las alertas demo
let storageIsVoid = true
const storagedData1 = localStorage.getItem('arrBtcHigherAlerts');
const storagedData2 = localStorage.getItem('arrBtcLowerAlerts');
const storagedData3 = localStorage.getItem('arrBtcVolumeAlerts');
const storagedData4 = localStorage.getItem('arrEthHigherAlerts');
const storagedData5 = localStorage.getItem('arrEthLowerAlerts');
const storagedData6 = localStorage.getItem('arrEthVolumeAlerts');

if (storagedData1 || storagedData2 || storagedData3 || storagedData4 || storagedData5 || storagedData6) {
  storageIsVoid = false;
}

if (storagedData1) arrBtcHigherAlerts = JSON.parse(storagedData1);
if (!storagedData1 && storageIsVoid) arrBtcHigherAlerts.push(alarmDemo1);

if (storagedData2) arrBtcLowerAlerts = JSON.parse(storagedData2);
if (!storagedData2 && storageIsVoid) arrBtcLowerAlerts.push(alarmDemo2);

if (storagedData3) arrBtcVolumeAlerts = JSON.parse(storagedData3);
if (!storagedData3 && storageIsVoid) arrBtcVolumeAlerts.push(alarmDemo3);

if (storagedData4) arrEthHigherAlerts = JSON.parse(storagedData4);
if (!storagedData4 && storageIsVoid) arrEthHigherAlerts.push(alarmDemo4);

if (storagedData5) arrEthLowerAlerts = JSON.parse(storagedData5);
if (!storagedData5 && storageIsVoid) arrEthLowerAlerts.push(alarmDemo5);

if (storagedData6) arrEthVolumeAlerts = JSON.parse(storagedData6);
if (!storagedData6 && storageIsVoid) arrEthVolumeAlerts.push(alarmDemo6, alarmDemo7);


// setters de valores


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
export const setCounterForStorage = (counter: number) => counterForStorage = counter;

export const setArrBtcHigherAlerts = (arr: Alarm[]) => {
  arrBtcHigherAlerts = arr;
  saveLocalStorage();
}
export const setArrBtcLowerAlerts = (arr: Alarm[]) => {
  arrBtcLowerAlerts = arr;
  saveLocalStorage();
}
export const setArrBtcVolumeAlerts = (arr: Alarm[]) => {
  arrBtcVolumeAlerts = arr;
  saveLocalStorage();
}
export const setArrEthHigherAlerts = (arr: Alarm[]) => {
  arrEthHigherAlerts = arr;
  saveLocalStorage();
}
export const setArrEthLowerAlerts = (arr: Alarm[]) => {
  arrEthLowerAlerts = arr;
  saveLocalStorage();
}
export const setArrEthVolumeAlerts = (arr: Alarm[]) => {
  arrEthVolumeAlerts = arr;
  saveLocalStorage();
}


