import { arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts } from "../data";

export function showAlertOnConsole() {

    const allArrays = [ arrBtcHigherAlerts, arrBtcLowerAlerts, arrBtcVolumeAlerts, arrEthHigherAlerts, arrEthLowerAlerts, arrEthVolumeAlerts ] 
    const allArraysString = [ 'BtcHigherAlerts', 'BtcLowerAlerts', 'BtcVolumeAlerts', 'EthHigherAlerts', 'EthLowerAlerts', 'EthVolumeAlerts' ] 

    for ( let element of allArrays) {

        let i = 1
        i++
        if ( element.length != 0 ) {
            console.log( '---------' + allArraysString[i] + ':' )

            for ( let e of element) console.log( JSON.stringify(e) )
        } 
            
    }
}