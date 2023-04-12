function removeButtons() {
    // Botones de borrar para cada alarma 

    $('button').filter('.btn-remove').on("click", function () {

        let pos = -1
        for (let element of arrBtcHigherAlerts) {
            if (this.id == element.id) {
                pos = arrBtcHigherAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrBtcHigherAlerts.splice(pos, 1);
                pos = -1; 
                logs('alert-deleted', element);
            }
        }
        for (let element of arrBtcLowerAlerts) {
            if (this.id == element.id) {
                pos = arrBtcLowerAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrBtcLowerAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
        for (let element of arrBtcVolumeAlerts) {
            if (this.id == element.id) {
                pos = arrBtcVolumeAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrBtcVolumeAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
        for (let element of arrEthHigherAlerts) {
            if (this.id == element.id) {
                pos = arrEthHigherAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrEthHigherAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
        for (let element of arrEthLowerAlerts) {
            if (this.id == element.id) {
                pos = arrEthLowerAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrEthLowerAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
        for (let element of arrEthVolumeAlerts) {
            if (this.id == element.id) {
                pos = arrEthVolumeAlerts.indexOf(element);
            }
            if (pos != -1) {
                arrEthVolumeAlerts.splice(pos, 1);
                pos = -1;
                logs('alert-deleted', element);
            }
        }
    });

    saveLocalStorage();
}