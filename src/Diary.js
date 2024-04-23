export default class Diary { 
    #entries = [];
    
    writeDiary(newEntry) {
        this.#entries.push(newEntry);
        
    }
    readDiary() {
        return this.#entries;
    }

}