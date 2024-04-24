export default class Diary { 
    #entries = [];
    #lockStatus = false;
    #password = 1234;
    
    writeDiary(newEntry) {
        if (!(typeof newEntry === 'string')) return; 
        this.#entries.push(newEntry);        
    }
    
    readDiary() {
        if (this.#lockStatus) return "Diary Locked";
        return this.#entries;
    }

    lock() { 
        this.#lockStatus = true;
    }

    unlock(pin) {
        if (pin === this.#password) this.#lockStatus = false;       
    }

    getLockStatus() {
        return this.#lockStatus;
    }

}