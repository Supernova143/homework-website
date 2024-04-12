try {    
    document.addEventListener('DOMContentLoaded', (event) => {
        const problems = [
            '2x + 3x - 5 = 4x + 2x + 7',
            '4y - 2y + 5 = 3y + y - 3',
            'x + 2x - 4 = 3x - x + 2 - 8',
            '3z + z - 2z = 2z - 2z + 3z + 5',
            '2y + 4y - 3y = y - y + 2y + 12',
            'z + 3z - z = 4z + 2z + z - 16',
            '5x - 2x + 3x = 2x + 3x - 4x + 5',
            '2x + x - 2x = 3x - 2x + x + 4',
            'x - 5x = 2x - 12',
            '4y + 3y = 16 - y + 8'
        ];

        const answerKey = [
            '-12',
            '4',
            '-2',
            '-5',
            '12',
            '4',
            '1',
            '-4',
            '2',
            '3'
        ];

        function renderProblems() {
            problems.forEach((problem, index) => {
                const problemElement = document.getElementById(`problem${index + 1}`);
                katex.render(problem, problemElement, {throwOnError: false});
            });
        }

        // function for checking if the string inputted matches the answerKey
        function checkAnswers() {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            let correctCount = 0;

            problems.forEach((problem, index) => {
                const userAnswer = (document.getElementById(`answer${index + 1}`).value.trim()) || 'blank';
                const correctAnswer = (answerKey[index]);
                const resultDiv = document.createElement('div');

                // Evaluate user's input using math.simplify() and compare it with the correct answer
                // Use other functions depending on the question
                const evaluatedUserAnswer = math.simplify(userAnswer);
                const evaluatedCorrectAnswer = math.simplify(correctAnswer);

                if ((evaluatedUserAnswer.toString() === evaluatedCorrectAnswer.toString())) {
                    resultDiv.textContent = `Problem ${index + 1}: Correct!`;
                    resultDiv.style.color = 'green';
                    correctCount++;
                } else {
                    resultDiv.textContent = `Problem ${index + 1}: Incorrect. Try again!`;
                    resultDiv.style.color = 'red';
                }

                resultsDiv.appendChild(resultDiv);
            });

            resultsDiv.insertAdjacentHTML('afterbegin', `<p>You got ${correctCount} out of ${problems.length} problems correct.</p>`);
        }


        renderProblems();

        const checkButton = document.getElementById('checkButton');
        checkButton.addEventListener('click', checkAnswers);
    });
} catch (error) {
    console.error('An error occurred:', error);
}
