let btcPrice: number = 0; //! revisar const y let
let ethPrice: number = 0;
let btcVolume: number = 0;
let ethVolume: number = 0;
let cryptoRadioChoice: string = 'bitcoin';
let alertTypeChoice: string = 'double';
let mute: boolean = false;


// Alarmas Predefinidas
const alarmDemo1 = { "id": 1, "price": 50000, "currency": "bitcoin", "description": "Alarma de ejemplo 1", "type": "Superior", "status": false }
const alarmDemo2 = { "id": 2, "price": 2000, "currency": "bitcoin", "description": "Alarma de ejemplo 2", "type": "Inferior", "status": false }
const alarmDemo3 = { "id": 3, "price": 30000, "currency": "bitcoin", "description": "Alarma Volumen de ejemplo 3", "type": "Volumen", "status": false }
const alarmDemo4 = { "id": 4, "price": 10000, "currency": "ethereum", "description": "Alarma doble de ejemplo ", "type": "Superior", "status": false }
const alarmDemo5 = { "id": 5, "price": 500, "currency": "ethereum", "description": "Alarma doble de ejemplo ", "type": "Inferior", "status": false }
const alarmDemo6 = { "id": 6, "price": 90000, "currency": "ethereum", "description": "Alarma Volumen de ejemplo", "type": "Volumen", "status": false }
const alarmDemo7 = { "id": 7, "price": 80000, "currency": "ethereum", "description": "Alarma Volumen de ejemplo", "type": "Volumen", "status": false }


// Arreglos
//*const arrBtcHigherAlerts = JSON.parse(localStorage.getItem('arrBtcHigherAlerts')) || [alarmDemo1]
const arrBtcHigherAlerts = JSON.parse(localStorage.getItem('arrBtcHigherAlerts') ?? '[]') || [alarmDemo1]; // apuntes
const arrBtcLowerAlerts = JSON.parse(localStorage.getItem('arrBtcLowerAlerts') ?? '[]') || [alarmDemo2];
const arrBtcVolumeAlerts = JSON.parse(localStorage.getItem('arrBtcVolumeAlerts') ?? '[]') || [alarmDemo3];
const arrEthHigherAlerts = JSON.parse(localStorage.getItem('arrEthHigherAlerts') ?? '[]') || [alarmDemo4];
const arrEthLowerAlerts = JSON.parse(localStorage.getItem('arrEthLowerAlerts') ?? '[]') || [alarmDemo5];
const arrEthVolumeAlerts = JSON.parse(localStorage.getItem('arrEthVolumeAlerts') ?? '[]') || [alarmDemo6, alarmDemo7];
const counterForStorage = JSON.parse(localStorage.getItem('AlertCounter') ?? '7') || 7;

/* En este ejemplo, se utiliza el operador de coalescencia nula (??) para proporcionar un valor predeterminado de una cadena vacía ('[]')
en caso de que el valor recuperado del almacenamiento local sea null. Luego, se utiliza JSON.parse() para analizar la cadena de texto y obtener un arreglo válido.
Si el resultado de JSON.parse() sigue siendo null, se utiliza un valor predeterminado en su lugar
(por ejemplo, [alarmDemo1], [alarmDemo2], etc., o 7 en el caso de counterForStorage). 
Esto asegura que estés pasando una cadena de texto válida a JSON.parse() y evita el error de tipo. */


const logIdDontRepeat: number[] = [];
let logContent: string[] = [];
let hourSimple: string;
let dateSimple: string;


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