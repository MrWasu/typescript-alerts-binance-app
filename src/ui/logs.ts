import { dateSimple, hourSimple, logContent, logIdDontRepeat } from "../data";

export function logs(arg1?: any, arg2?: any, arg3?: any): void {
    // Añade registros al campo de log que emula una consola

    const hourAndDate: string = '<span class="date-log">' + dateSimple + ' - ' + hourSimple + '</span>';

    if (arg1 === 'start') logContent.push(`<li class="log-start">- ${hourAndDate} :: Iniciando Aplicación </li>`);
    else if (arg1 === 'getPrice') logContent.push(`<li class="log-start">- ${hourAndDate} :: Datos cargados CORRECTAMENTE desde Binance </li>`);
    else if (arg1 === 'getLocalStorage') logContent.push(`<li class="log-start">- ${hourAndDate} :: Datos cargados CORRECTAMENTE desde LocalStorage</li>`);
    else if (arg1 === 'getPriceError') logContent.push(`<li class="log-error">- ${hourAndDate} :: ERROR en la recogida de datos desde Binance </li>`);
    else if (arg1 === 'alert' && arg2 === 'price') logContent.push(`<li class="log-added">- ${hourAndDate} :: Alerta de precio añadida en ${arg3?.toUpperCase()} </li>`);
    else if (arg1 === 'alert' && arg2 === 'volume') logContent.push(`<li class="log-added">- ${hourAndDate} :: Alerta de volumen añadida en ${arg3?.toUpperCase()} </li>`);
    else if (arg1 === 'alert-match') {
        if (!logIdDontRepeat.includes(arg2?.id)) {
            logContent.push(`<li class="log-match">- ${hourAndDate} :: Alerta alcanzada en ${arg2?.price}  </li>`);
            logIdDontRepeat.push(arg2?.id);
        }
    }
    else if (arg1 === 'alert-deleted') logContent.push(`<li class="log-deleted">- ${hourAndDate} :: Alerta eliminada </li>`);


    let logContentString = logContent.join(' '); // al pasarlo desde jquery reproduce las , del arreglo
    document.getElementById('logs-content')!.innerHTML = logContentString;

    document.getElementById('reset-log')!.addEventListener('click', function () {
        logContent = [];
        document.getElementById('logs-content')!.innerHTML = logContent;
    });


    // Barra de scroll para el log que hace que se quede siempre en la parte inferior
    var container = document.getElementById('logs-content')!;
    container.scrollTop = container.scrollHeight - container.clientHeight;
}
