export default class Diary { 
    #entries = [];
    
    writeDiary(newEntry) {
        if (!(typeof newEntry === 'string')) return; 
        this.#entries.push(newEntry);        
    }
    
    readDiary() {
        return this.#entries;
    }

}