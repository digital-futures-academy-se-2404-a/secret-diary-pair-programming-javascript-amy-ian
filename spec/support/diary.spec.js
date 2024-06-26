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
    
    describe("Diary Lock Status Tests:", () => {
        let testDiary;

        beforeEach(() => {
            testDiary = new Diary();             
        });

        afterEach(() => {
            testDiary = undefined;            
        })

        it("should return false when the diary getLockStatus is unlocked", () => { 
            //Arrange        
            //Act
            //Assert
            expect(testDiary.getLockStatus()).toBe(false);            
        })

        it("should lock the diary when the lock function is called", () => {
            //Arrange
            //Act
            testDiary.lock();
            //Assert
            expect(testDiary.getLockStatus()).toBe(true);
        })
        
        it("should unlock the diary when the correct PIN is entered", () => {
            //Arrange
            const pw = 1234;
            testDiary.lock();
            //Act
            testDiary.unlock(pw);
            //Assert
            expect(testDiary.getLockStatus()).toBe(false);
        })

        it("should not unlock the diary when the incorrect PIN is entered", () => {
          //Arrange
          const pw = 123488;
          testDiary.lock();
          //Act
          testDiary.unlock(pw);
          //Assert
          expect(testDiary.getLockStatus()).toBe(true);
        });

        it("should not unlock the diary when erroneous data is entered", () => {
          //Arrange
          
          testDiary.lock();
          //Act
          testDiary.unlock("cat");
          //Assert
          expect(testDiary.getLockStatus()).toBe(true);
        });

        it("should not unlock the diary when null data is entered", () => {
          //Arrange

          testDiary.lock();
          //Act
          testDiary.unlock();
          //Assert
          expect(testDiary.getLockStatus()).toBe(true);
        });
    })

    describe("Diary Locked Readability Tests:", () => { 
        let testDiary;

        beforeEach(() => {
            testDiary = new Diary();
        });

        afterEach(() => {
            testDiary = undefined;
        });
        
        it("should not be readable when the diary is locked", () => {
            //Arrange
            testDiary.writeDiary("This should not be seen")
            testDiary.lock();
            //Act
            //Assert
            expect(testDiary.readDiary()[0]).not.toBe("This should not be seen");
        });
        
        it("should be readable when the diary is unlocked", () => {
            //Arrange
            testDiary.writeDiary("This is my diary")
            testDiary.writeDiary("Today was a great day")
            testDiary.lock();
            testDiary.unlock(1234);
            //Act
            testDiary.readDiary();
            //Assert
            expect(testDiary.readDiary()).toEqual(["This is my diary", "Today was a great day"]);
        });
    })

    describe("Diary Locked Writeability Tests:", () => { 
        let testDiary;

        beforeEach(() => {
            testDiary = new Diary();
        });

        afterEach(() => {
            testDiary = undefined;
        });
        
        it("should not accept entries when the diary is locked", () => { 
            //Arrange   
            testDiary.lock();
            //Act
            testDiary.writeDiary("Another mundane day");
            testDiary.unlock(1234);
            //Assert
            expect(testDiary.readDiary().length).toBe(0);
        })

        it("should accept entries when the diary is unlocked", () => {
            //Arrange            
            testDiary.lock();
            testDiary.unlock(1234);            
            //Act
            testDiary.writeDiary("Another mundane day");            
            //Assert
            expect(testDiary.readDiary().length).toBe(1);
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