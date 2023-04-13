function checkdata() {
    // comprueba el estado de la API de Binance y manda imprilo en el log

    if (btcPrice !== null && btcPrice !== undefined && btcPrice != 0 && ethPrice !== null && ethPrice !== undefined && ethPrice != 0 && btcVolume !== null && btcVolume !== undefined && btcVolume != 0 && ethVolume !== null && ethVolume !== undefined && ethVolume != 0) {
        logs('getPrice');
    }
    else {
        logs('getPriceError');
    }
}