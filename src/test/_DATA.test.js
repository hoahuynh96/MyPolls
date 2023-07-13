const { _saveQuestion, _saveQuestionAnswer, _getQuestions, _getUsers } = require("../util/_DATA");
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

describe("_saveQuestionAnswer", () => {
    it("_saveQuestionAnswer correct parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: 'sarahedo',
            qid: '8xf0y6ziyjabvozdd253nd',
            answer: 'optionOne'
        });
        expect(response).toEqual(undefined);
    });
});

describe("_getQuestions", () => {
    it("_getQuestions correct parameters", async () => {
        const response = await _getQuestions();
        expect(response).toBeTruthy();
    });
});

describe("_getUsers", () => {
    it("_getUsers correct parameters", async () => {
        const response = await _getUsers();
        expect(response).toBeTruthy();
    });
});