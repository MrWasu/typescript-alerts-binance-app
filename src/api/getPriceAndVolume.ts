import { btcPrice, btcVolume, ethPrice, ethVolume } from "../data";
import { addDecimal } from "../helpers";
import { logs } from "../ui";

export async function getPriceAndVolume() {

    // APIs de binance, se configuran editando la url
    const urlBtcPrice = 'https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=BTCUSDT';
    const urlEthPrice = 'https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=ETHUSDT';
    const urlBtcVolume = 'https://fapi.binance.com/fapi/v1/klines/?symbol=BTCUSDT&contractType=PERPETUAL&interval=1m&limit=2';
    const urlEthVolume = 'https://fapi.binance.com/fapi/v1/klines/?symbol=ETHUSDT&contractType=PERPETUAL&interval=1m&limit=2';

    try {
        const [btcPriceResponse, ethPriceResponse, btcVolumeResponse, ethVolumeResponse] = await Promise.all([
            fetch(urlBtcPrice),
            fetch(urlEthPrice),
            fetch(urlBtcVolume),
            fetch(urlEthVolume)
        ]);

        if (!btcPriceResponse.ok || !ethPriceResponse.ok || !btcVolumeResponse.ok || !ethVolumeResponse.ok) {
            throw new Error('Error getting data from Binance');
        }

        btcPrice = await btcPriceResponse.json();
        ethPrice = await ethPriceResponse.json();
        btcVolume = await btcVolumeResponse.json();
        ethVolume = await ethVolumeResponse.json();

        btcPrice = parseFloat(btcPrice.lastPrice),
            ethPrice = parseFloat(ethPrice.lastPrice),
            btcVolume = Math.floor(btcVolume[0][5]),
            ethVolume = Math.floor(ethVolume[0][5])

        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar: Element) => {
            (bar as HTMLElement).style.display = 'block'; //apuntes
        });

    } catch (error) {
        console.error(error);
        logs('getPriceError');

        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar: Element) => {
            (bar as HTMLElement).style.display = 'none'; //apuntes
        });

    }


    const btcPriceElement = document.getElementById('btc-price');
    if (btcPriceElement) {
        btcPriceElement.innerHTML = addDecimal(btcPrice, 1);
    }
    
    const ethPriceElement = document.getElementById('eth-price');
    if (ethPriceElement) {
        ethPriceElement.innerHTML = addDecimal(ethPrice, 2);
    }
    
    const btcVolumeElement = document.getElementById('btc-volume');
    if (btcVolumeElement) {
        btcVolumeElement.innerHTML = '<span class="h-vol"> Volumen M1: </span>' + btcVolume;
    }
    
    const ethVolumeElement = document.getElementById('eth-volume');
    if (ethVolumeElement) {
        ethVolumeElement.innerHTML = '<span class="h-vol"> Volumen M1: &nbsp  </span>' + ethVolume;
    }

    setTimeout('getPriceAndVolume()', 1000);
}