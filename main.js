try {    
    document.addEventListener('DOMContentLoaded', (event) => {
        const problems = [
            '\\frac{2x + 3}{5} = \\frac{4}{7}',
            '\\frac{4}{y + 2} = \\frac{6}{9}',
            '\\frac{3z - 1}{7} = \\frac{4}{14}',
            '\\frac{5x - 2}{8} = \\frac{9}{12}',
            '\\frac{3}{y - 1} = \\frac{7}{10}',
            '\\frac{6}{z + 3} = \\frac{3}{4}',
            '\\frac{7x + 4}{11} = \\frac{8}{9}',
            '\\frac{5}{y - 2} = \\frac{11}{15}',
            '\\frac{9z - 5}{13} = \\frac{5}{8}',
            '\\frac{10 - 2x}{x + 3} = \\frac{12}{15}'
        ];

        const answerKey = [
            '-1/14',
            '4',
            '1',
            '8/5',
            '37/7',
            '5',
            '52/63',
            '97/11',
            '35/24',
            '19/7'
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
