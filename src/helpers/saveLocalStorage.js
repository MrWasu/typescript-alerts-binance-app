function saveLocalStorage() { 

    // Se encarga de almacenar en el local storage todos los arreglos que contienen las alertas

    const arrTypes = ['BtcHigher', 'BtcLower', 'BtcVolume', 'EthHigher', 'EthLower', 'EthVolume'];

    arrTypes.forEach(type => {
        localStorage.setItem(`arr${type}Alerts`, JSON.stringify(eval(`arr${type}Alerts`), (key, value) => { 
            if (value instanceof Alert) {
                return value.toJSON();
            }
            return value;
        }));
    });
}