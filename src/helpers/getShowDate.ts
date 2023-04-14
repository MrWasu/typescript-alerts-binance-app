export function showDate() {

    let actualTime: Date = new Date();

    const twoDigitsHour = (hour: any) => {
        if (hour < 10)
            hour = '0' + hour;
        return hour
    } // Esta función hace que si el valor tiene 1 digito se le añada un 0 a la izquierda

    function getWeekDay(actualTime: any) {
        const days: string[] = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
        return days[actualTime.getDay()];
    } //Comparamos el valor de una variable para segun la casilla del arreglo retornar un valor.

    let hourSimple: string = `${twoDigitsHour(actualTime.getHours())}:${twoDigitsHour(actualTime.getMinutes())}:${twoDigitsHour(actualTime.getSeconds())}`;
    let dateSimple: string = `${actualTime.getDate()} / ${actualTime.getMonth() + 1}`;

    //document.getElementById('hour-div').innerHTML = '<p>' + hourSimple + '</p>';

    const hourDiv = document.getElementById('hour-div');
    if (hourDiv) {
        if (hourSimple !== null) {
            hourDiv.innerHTML = `<p>${hourSimple}</p>`;
        }
    }

    
    setTimeout('showDate()', 1000);
}