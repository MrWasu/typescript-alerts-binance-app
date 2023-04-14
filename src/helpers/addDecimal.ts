export function addDecimal(num:number, dec:number):any {
    // Añade un decimal 

    if (!num.toString().includes(".") && dec == 1) {
        return num.toFixed(dec);
    }
    else if (dec == 2) {
        return num.toFixed(dec);
    }
    return num;
}