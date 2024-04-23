import Diary from "../../src/Diary.js";

describe("Secret Diary Class Tests:", () => {
    describe("Diary Initialisation Tests:", () => {

        it("should create a new instance of the Diary class", () => {
            //Arrange
            //Act
            const testDiary = new Diary();
            //Assert
            expect(testDiary).toBeInstanceOf(Diary);
        });

    })
    
    describe("Diary Setter Tests:", () => { 
        //before and after test set ups
        let testDiary;
        beforeEach(() => {
            testDiary = new Diary();             
        });

        afterEach(() => {
            testDiary = undefined;            
        })

        //Tests   
        it("adding an entry to Diary and increases the length of entries", () => { 
            //Arrange            
            const expected = (testDiary.readDiary().length + 1);
            //Act
            testDiary.writeDiary("Hello World");
            //Assert
            expect(testDiary.readDiary().length).toBe(expected);
        })

        it("adding an invalid entry to the Diary doesn't increases the length of entries", () => { 
            //Arrange            
            const expected = testDiary.readDiary().length;
            //Act
            testDiary.writeDiary();
            //Assert
            expect(testDiary.readDiary().length).toBe(expected);
        })

    })
    
    describe("Diary Getter Tests:", () => {
        let testDiary;

        beforeEach(() => {
            testDiary = new Diary();             
        });

        afterEach(() => {
            testDiary = undefined;            
        })

        it("should return the diary entries when readEntries is called", () => {
            //Arrange
            testDiary.writeDiary("I feel like we should say: ")
            testDiary.writeDiary("Hello World");
            const expected = ["I feel like we should say: ", "Hello World"];
            //Act
            //Assert
            expect(testDiary.readDiary()).toEqual(expected);
        });
    })
})


/*
    //Tests   
        it("desc", () => { 
            //Arrange            
            
            //Act
            
            //Assert
            
        })

*/