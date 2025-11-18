class Quiz {
    // YOUR CODE HERE:
    //Dia 1 17-11-2025
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    // 2. getQuestion()
    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    // 3. moveToNextQuestion()
    moveToNextQuestion(){
        this.currentQuestionIndex++;
    }

    // 4. shuffleQuestions()
    shuffleQuestions(){
        let array = this.questions;
        let randomIdex;
        for (let i =array.length -1; i > 0; i--){
            randomIdex = Math.floor(Math.random()*(i+1));
            [array[i], array[randomIdex]] = [array[randomIdex], array[i]];
        }
    }
    // 5. checkAnswer(answer)
    checkAnswer(answer){
        const currentQuestion = this.getQuestion();
        if (currentQuestion.answer === answer) {
            this.correctAnswers++;
        }
    }

    // 6. hasEnded()
    hasEnded(){
        return this.currentQuestionIndex === this.questions.length;
    }

    //Dia 2 18-11-2025
    filterQuestionsByDifficulty(difficulty) {
        // La dificultad debe ser un número entero entre 1 y 3.
        if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
            // Si la dificultad no es válida, no modificamos el array de preguntas.
            return;
        }

        // Usamos el método filter() para crear un nuevo array
        // que solo contenga las preguntas con la dificultad especificada.
        this.questions = this.questions.filter(question => {
            // Asumimos que cada objeto de pregunta tiene una propiedad 'difficulty' (número)
            return question.difficulty === difficulty;
        });

        // Opcional: Reiniciar el índice para empezar el quiz con el nuevo conjunto de preguntas
        this.currentQuestionIndex = 0;
    }

    averageDifficulty() {
        // Si no hay preguntas, devolvemos 0 para evitar la división por cero
        if (this.questions.length === 0) {
            return 0;
        }

        // 1. Usamos reduce() para sumar los valores de la propiedad 'difficulty'
        const totalDifficulty = this.questions.reduce((accumulator, question) => {
            // El acumulador se suma con la dificultad de la pregunta actual
            return accumulator + question.difficulty;
        }, 0); // El 0 es el valor inicial del acumulador

        // 2. Dividimos la suma total por el número de preguntas para obtener el promedio
        const average = totalDifficulty / this.questions.length;

        // Devolvemos el promedio
        return average;
    }
}
