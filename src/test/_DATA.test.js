const { _saveQuestion } = require("../util/_DATA");
describe("_saveQuestion", () => {
    it("should return true for correct parameters", async () => {
        const response = await _saveQuestion({
            id: '8xf0y6ziyjabvozdd253nd',
            author: 'sarahedo',
            timestamp: 1467166872634,
            optionOne: {
                votes: ['sarahedo'],
                text: 'have horrible short term memory',
            },
            optionTwo: {
                votes: [],
                text: 'have horrible long term memory'
            }
        });
        expect(response).toBeTruthy();
    });
});
