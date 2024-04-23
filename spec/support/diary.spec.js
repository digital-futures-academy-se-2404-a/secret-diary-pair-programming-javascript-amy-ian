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
})