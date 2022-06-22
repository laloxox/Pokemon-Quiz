//@ts-check

import {questions} from './data/questions.js';
import {Quiz} from './models/quiz.js';
import {UI} from './models/UI.js'


/**
 * 
 * @param {Quiz} quiz quiz object
 * @param {UI} ui ui objetc
 */

    

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        console.log(quiz.score);
        ui.showScores(quiz.score)
    }else{
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
    quiz.guess(currentChoice);
    renderPage(quiz, ui);
        });

    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length); 
    }
};

function main() {
    const quiz = new Quiz(questions)
    const ui = new UI()

    

    renderPage(quiz, ui)
}

main();


