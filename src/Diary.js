export default class Diary { 
    #entries = [];
    #lockStatus = false;
    
    writeDiary(newEntry) {
        if (!(typeof newEntry === 'string')) return; 
        this.#entries.push(newEntry);        
    }
    
    readDiary() {
        return this.#entries;
    }

    lock() { 
        this.#lockStatus = true;
    }

    getLockStatus() {
        return this.#lockStatus;
    }

}