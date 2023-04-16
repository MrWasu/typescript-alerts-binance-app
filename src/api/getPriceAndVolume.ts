import { btcPrice, btcVolume, ethPrice, ethVolume, setBtcPrice, setBtcVolume, setEthPrice, setEthVolume } from "../data";
import { addDecimal } from "../helpers";
import { logs } from "../ui";

export async function getPriceAndVolume() {


    // APIs de binance, se configuran editando la url
    const urlBtcPrice: string = 'https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=BTCUSDT';
    const urlEthPrice: string = 'https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=ETHUSDT';
    const urlBtcVolume: string = 'https://fapi.binance.com/fapi/v1/klines/?symbol=BTCUSDT&contractType=PERPETUAL&interval=1m&limit=2';
    const urlEthVolume: string = 'https://fapi.binance.com/fapi/v1/klines/?symbol=ETHUSDT&contractType=PERPETUAL&interval=1m&limit=2';

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

        let _btcPrice: any = await btcPriceResponse.json();
        let _ethPrice: any = await ethPriceResponse.json();
        let _btcVolume: any = await btcVolumeResponse.json();
        let _ethVolume: any = await ethVolumeResponse.json();

        _btcPrice = parseFloat(_btcPrice.lastPrice)
        _ethPrice = parseFloat(_ethPrice.lastPrice)
        _btcVolume = Math.floor(_btcVolume[0][5])
        _ethVolume = Math.floor(_ethVolume[0][5])

        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar: Element) => {
            (bar as HTMLElement).style.display = 'block'; 
        });
        
        
        setBtcPrice(_btcPrice);
        setEthPrice(_ethPrice);
        setBtcVolume(_btcVolume);
        setEthVolume(_ethVolume);


    } catch (error) {
        console.error(error);
        logs('getPriceError');

        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar: Element) => {
            (bar as HTMLElement).style.display = 'none';
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
}