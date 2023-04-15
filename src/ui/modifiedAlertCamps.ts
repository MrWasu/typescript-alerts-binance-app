import { btcPrice, cryptoRadioChoice, ethPrice, setAlertTypeChoice, setCryptoRadioChoice } from "../data";

export function modifiedAlertCamps() {
    // Se modifican los inputs y los valores según la eleccion en los radios

    document.getElementById("input-alert-simple")?.addEventListener("focus", function () {
        (this as HTMLInputElement).value = String(btcPrice);
    });

    document.getElementById("btc-radio")?.addEventListener("change", function () {
        const _cryptoRadioChoice = (this as HTMLInputElement).value;
        setCryptoRadioChoice(_cryptoRadioChoice);

        document.getElementById("input-alert-simple")?.addEventListener("focus", function () {
            (this as HTMLInputElement).value = String(btcPrice); //apuntes
        });
    });

    document.getElementById("eth-radio")?.addEventListener("change", function () {
        const _cryptoRadioChoice = (this as HTMLInputElement).value;
        setCryptoRadioChoice(_cryptoRadioChoice);

        document.getElementById("input-alert-simple")?.addEventListener("focus", function () {
            (this as HTMLInputElement).value = String(ethPrice);
        });
    });

    document.getElementById("radio-simple")?.addEventListener("change", function () {
        document.getElementById("input-alert-simple")!.style.display = "block";
        document.getElementById("input-alert-1")!.style.display = "none";
        document.getElementById("input-alert-2")!.style.display = "none";
        document.getElementById("input-volume-alert")!.style.display = "none";
        (document.querySelector("input[name='input-alert-price']") as HTMLInputElement).value = "";
        (document.getElementById("alert-desc") as HTMLInputElement).value = "";
        
        const _alertTypeChoice:string = "simple";
        setAlertTypeChoice(_alertTypeChoice)
    });

    document.getElementById("radio-doble")?.addEventListener("change", function () {
        document.getElementById("input-alert-simple")!.style.display = "none";
        document.getElementById("input-alert-1")!.style.display = "block";
        document.getElementById("input-alert-2")!.style.display = "block";
        document.getElementById("input-volume-alert")!.style.display = "none";
        (document.querySelector("input[name='input-alert-price']") as HTMLInputElement).value = "";
        (document.getElementById("alert-desc") as HTMLInputElement).value = "";
        
        const _alertTypeChoice:string = "double";
        setAlertTypeChoice(_alertTypeChoice)
    });

    document.getElementById("radio-volume")?.addEventListener("change", function () {
        document.getElementById("input-alert-simple")!.style.display = "none";
        document.getElementById("input-alert-1")!.style.display = "none";
        document.getElementById("input-alert-2")!.style.display = "none";
        document.getElementById("input-volume-alert")!.style.display = "block";
        (document.querySelector("input[name='input-alert-price']") as HTMLInputElement).value = "";
        (document.getElementById("alert-desc") as HTMLInputElement).value = "";
       
        const _alertTypeChoice:string = "volume";
        setAlertTypeChoice(_alertTypeChoice)
    });
}
