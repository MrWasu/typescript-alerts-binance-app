import { alertTypeChoice, btcPrice, cryptoRadioChoice, ethPrice } from "../data";

export function modifiedAlertCamps() {
    // Se modifican los inputs y los valores según la eleccion en los radios

    document.getElementById("input-alert-simple").addEventListener("focus", function () {
        this.value = btcPrice;
    });

    document.getElementById("btc-radio").addEventListener("change", function () {
        cryptoRadioChoice = this.value;

        document.getElementById("input-alert-simple").addEventListener("focus", function () {
            this.value = btcPrice;
        });
    });

    document.getElementById("eth-radio").addEventListener("change", function () {
        cryptoRadioChoice = this.value;

        document.getElementById("input-alert-simple").addEventListener("focus", function () {
            this.value = ethPrice;
        });
    });

    document.getElementById("radio-simple").addEventListener("change", function () {
        document.getElementById("input-alert-simple").style.display = "block";
        document.getElementById("input-alert-1").style.display = "none";
        document.getElementById("input-alert-2").style.display = "none";
        document.getElementById("input-volume-alert").style.display = "none";
        document.querySelector("input[name='input-alert-price']").value = "";
        document.getElementById("alert-desc").value = "";
        alertTypeChoice = "simple";
    });

    document.getElementById("radio-doble").addEventListener("change", function () {
        document.getElementById("input-alert-simple").style.display = "none";
        document.getElementById("input-alert-1").style.display = "block";
        document.getElementById("input-alert-2").style.display = "block";
        document.getElementById("input-volume-alert").style.display = "none";
        document.querySelector("input[name='input-alert-price']").value = "";
        document.getElementById("alert-desc").value = "";
        alertTypeChoice = "double";
    });

    document.getElementById("radio-volume").addEventListener("change", function () {
        document.getElementById("input-alert-simple").style.display = "none";
        document.getElementById("input-alert-1").style.display = "none";
        document.getElementById("input-alert-2").style.display = "none";
        document.getElementById("input-volume-alert").style.display = "block";
        document.querySelector("input[name='input-alert-price']").value = "";
        document.getElementById("alert-desc").value = "";
        alertTypeChoice = "volume";
    });
}
