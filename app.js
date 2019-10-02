import { isCorrect } from './src/is-correct.js';

const quizButton = document.getElementById('quiz-button');

quizButton.onclick = () => {
    confirm('You ready to take the test?!');

    const question1 = prompt('Has Dan lived and worked on four continents?');
    const answer1 = question1.toLowerCase().trim();
    if (isCorrect(answer1) === true){
        alert('That\'s right! Dan has lived and worked in Thailand, New Zealand, Ecuador, and the USA!');
    } else {
        alert('Sorry! Dan has lived and worked on four continents.');
    }

    const question2 = prompt('Was the brewery Dan opened named Badass Brewing?');
    const answer2 = question2.toLowerCase().trim();
    if (isCorrect(answer2) === true){
        alert('Wrong! While that\'s a great name, Dan\'s brewery is named Bandido Brewing.');
    } else {
        alert('You got it! Dan\'s brewery is named Bandido Brewing.');
    }

    const question3 = prompt('Does Dan play the saxophone?');
    const answer3 = question3.toLowerCase().trim();
    if (isCorrect(answer3) === true){
        alert('Nooooo! He wishes! Dan mostly plays guitar though.');
    } else {
        alert('You\'re so smart! Dan has always wanted to play the sax though.');
    }

    const question4 = prompt('Does Dan have a twin sister?');
    const answer4 = question4.toLowerCase().trim();
    if (isCorrect(answer4) === true){
        alert('Nothing gets by you! Dan has a twin sister named Lindsay.');
    } else {
        alert('C\'mon! Were you even paying attention?!');
    }
};