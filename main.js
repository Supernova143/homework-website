try {    
    document.addEventListener('DOMContentLoaded', (event) => {
        const problems = [
            '3x^2y^3 \\times 2xy',
            '4xy^2 \\times 5x^2y',
            '2x^3y \\times 3xy^2',
            '5x^2y^3 \\times xy^2',
            '7x^2 \\times 3xy',
            '\\frac{2x^3}{x}',
            '\\frac{4xy^2}{y}',
            '\\frac{3x^2y^3}{x^2}',
            '\\frac{6x^3y^2}{3x}',
            '\\frac{5xy^3}{2y^2}'
        ];

        const answerKey = [
            '6x^3y^4',
            '20x^3y^3',
            '6x^4y^3',
            '5x^3y^5',
            '21x^3y',
            '2x^2',
            '4xy',
            '3xy^3',
            '2x^2y^2',
            '5xy/2'
        ];

        function renderProblems() {
            problems.forEach((problem, index) => {
                const problemElement = document.getElementById(`problem${index + 1}`);
                katex.render(problem, problemElement, {throwOnError: false});
            });
        }

        function checkAnswers() {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            let correctCount = 0;

            problems.forEach((problem, index) => {
                const userAnswer = document.getElementById(`answer${index + 1}`).value.trim() || 'blank';
                const correctAnswer = answerKey[index];
                const resultDiv = document.createElement('div');

                if (userAnswer === correctAnswer) {
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

        const checkButton = document.querySelector('button');
        checkButton.addEventListener('click', checkAnswers);
    });
} catch (error) {
    console.error('An error occurred:', error);
}
