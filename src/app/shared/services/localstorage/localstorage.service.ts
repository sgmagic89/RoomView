import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable()
export class LocalStorageService {

constructor() { }

getItem(key: string): any {
    let item: any = localStorage.getItem(key);
    if ( item !== null) {
    try {
        item = this.Decrypt(item);
        } catch (e) {
        }
    }
    console.log(item);
    return item;
}

storeItem(key: string, itemToStore: any) {
    if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
    }
    localStorage.setItem(key, this.Encrypt(itemToStore));
}

clearItem(key: string, clearAll: boolean = false) {
    if (clearAll) {
        localStorage.clear();
    }else {
        localStorage.removeItem(key);
    }
}

Encrypt(data: any): string {
    if (data !== null) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), 'tokencypherkey').toString();
    }
    return null;
}

Decrypt(key: string): any {
    if (key !== null) {
    const bytes  = CryptoJS.AES.decrypt(key, 'tokencypherkey');
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return null;
}

}
