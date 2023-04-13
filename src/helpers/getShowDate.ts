export function showDate() {
    actualTime = new Date();
    
    const twoDigitsHour = (hour) => {
        if (hour < 10)
        hour = '0' + hour;
        return hour
    } // Esta función hace que si el valor tiene 1 digito se le añada un 0 a la izquierda
    
    function getWeekDay(actualTime) {
        const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
        return days[actualTime.getDay()];
    } //Comparamos el valor de una variable para segun la casilla del arreglo retornar un valor.
    
    hourSimple = `${twoDigitsHour(actualTime.getHours())}:${twoDigitsHour(actualTime.getMinutes())}:${twoDigitsHour(actualTime.getSeconds())}`;
    dateSimple = `${actualTime.getDate()} / ${actualTime.getMonth() + 1}`;
    
    document.getElementById('hour-div').innerHTML = '<p>' + hourSimple + '</p>';
    
    setTimeout('showDate()', 1000);
}