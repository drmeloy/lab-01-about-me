import { isCorrect } from '../src/is-correct.js';
const test = QUnit.test;

test('isCorrect should return true if user says yes', function(assert) {
    const userAnswer = 'yes';
    const userAnswerIsCorrect = isCorrect(userAnswer);
    assert.equal(userAnswerIsCorrect, true);
});

test('isCorrect should return false if user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsCorrect = isCorrect(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});