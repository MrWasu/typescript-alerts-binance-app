export class Alert {
    
    static counter = counterForStorage;
    
    constructor(price, currency, description, type) {
        
        this._id = ++Alert.counter;
        this._price = price;
        this._currency = currency;
        this._description = description;
        this._type = type;
        this._status = false;
    }
    
    get id() {
        return this._id;
    }
    
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }

    get currency() {
        return this._currency;
    }
    set currency(currency) {
        this._currency = currency;
    }
    
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }

    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }

    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    
    toString() {
        return `---- Nº: ${this._id} / D: ${this._description} / CUR: ${this._currency} / P: ${this._price} / T: ${this._type} / S: ${this._status}`;
    }
    
    toJSON() { //apuntes
        return {
            id: this._id,
            price: this._price,
            currency: this._currency,
            description: this._description,
            type: this._type,
            status: this._status,
        };
    }
}