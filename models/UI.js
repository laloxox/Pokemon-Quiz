export class UI {
    constructor() {

    }

    /**
     * 
     * @param {string} text 
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text;


    }

        /**
         * 
         * @param {string[]} choices the string
         */
        showChoices(choices, callback){
            const choicesList = document.getElementById('choices') 
            choicesList.innerHTML = ''
        

            for (let i = 0; i < choices.length ; i++ ) {
                const button = document.createElement('button')
                button.innerText = choices[i];
                button.className = 'button';
                button.addEventListener('click', () => callback(choices[i]));
                choicesList.append(button);
            }
    }

        /**
         * 
         * @param {number} score the total score 
         */
    showScores(score) {
        const quizEndHTML = ` 
        <h1>Resultado</h1>
        <h3>Tu Puntaje: ${score}</h3>
        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML;
    }


    /**
     * 
     * @param {number} currenIndex numero de puntaje 
     * @param {*number} total total de preguntas
     */
    showProgress(currenIndex, total) {
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currenIndex} of ${total}`;

    }



}