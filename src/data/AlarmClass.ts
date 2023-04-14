import { counterForStorage } from "./Variables";

export class Alert { //! revisar private

    public static counter: number = counterForStorage; // apuntes
    public _id: number;
    public _price: number;
    public _currency: string;
    public _description: string;
    public _type: string;
    public _status: boolean;
    
    constructor(price: number, currency: string, description: string, type: string) {
    
        this._id = ++Alert.counter;
        this._price = price;
        this._currency = currency;
        this._description = description;
        this._type = type;
        this._status = false;
    }
    
    get id(): number {
        return this._id;
    }
    
    get price(): number {
        return this._price;
    }
    
    set price(price: number) {
        this._price = price;
    }
    
    get currency(): string {
        return this._currency;
    }
    
    set currency(currency: string) {
        this._currency = currency;
    }
    
    get description(): string {
        return this._description;
    }
    
    set description(description: string) {
        this._description = description;
    }
    
    get type(): string {
        return this._type;
    }
    
    set type(type: string) {
        this._type = type;
    }
    
    get status(): boolean {
        return this._status;
    }
    
    set status(status: boolean) {
        this._status = status;
    }
    
    toString(): string {
        return `---- Nº: ${this._id} / D: ${this._description} / CUR: ${this._currency} / P: ${this._price} / T: ${this._type} / S: ${this._status}`;
    }
    
    toJSON(): any { //apuntes
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