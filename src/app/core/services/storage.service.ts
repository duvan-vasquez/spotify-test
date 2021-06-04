import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor(private storage: Storage) {
        this.storage.create();
    }

    setItem(key, data){
        this.storage.set(key, data);
    }

    getItem(key)  {
        return this.storage.get(key);
    }

    removeItem(key) {
        this.storage.remove(key);
    }
}
