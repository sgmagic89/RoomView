import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable()
export class LocalStorageService {

constructor() { }

/**
    * getItem() - Get an item from local storage
    * @param <string> the key for the item to get
    * @return <any> Returns the item if found
    */
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

/**
    * storeItem() - Store an item in the local storage
    * @param <string, any> the key for the item to store, data to store
    * @return <None> No return value
    */
storeItem(key: string, itemToStore: any) {
    if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
    }
    localStorage.setItem(key, this.Encrypt(itemToStore));
}

/**
    * clearItem() - Deletes an item from local storage
    * @param <string, boolean> the key for the item to delete, whether to delete all items from local storage
    * @return <None> No return value
    */
clearItem(key: string, clearAll: boolean = false) {
    if (clearAll) {
        localStorage.clear();
    }else {
        localStorage.removeItem(key);
    }
}

/**
    * Encrypt() - Encrypts data
    * @param <any> The object to encrypt
    * @return <string> returns the encrypted value
    */
Encrypt(data: any): string {
    if (data !== null) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), 'tokencypherkey').toString();
    }
    return null;
}

/**
    * Decrypt() - Decrypts data
    * @param <string> The key of the object to decrypt
    * @return <string> returns the decrypted object
    */
Decrypt(key: string): any {
    if (key !== null) {
    const bytes  = CryptoJS.AES.decrypt(key, 'tokencypherkey');
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return null;
}

}
