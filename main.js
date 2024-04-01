try {    
    document.addEventListener('DOMContentLoaded', (event) => {
        const problems = [
            '\\frac{(23^2 \\cdot 37^3)}{23^2}',
            '\\frac{54^4}{54^2 \\cdot 54^2}',
            '\\frac{(48^3 \\cdot 63^2)}{48^5}',
            '\\frac{25^{-3} \\cdot 25^2}{25^{-1}}',
            '\\frac{(31^2 \\cdot 36^3)}{31^5}',
            '\\frac{75^4}{75^2 \\cdot 75^3}',
            '\\frac{(64^2 \\cdot 82^4)}{64^3}',
            '\\frac{89^{-2} \\cdot 89^4}{89}',
            '\\frac{(91^2 \\cdot 96^2)}{91^3}',
            '\\frac{10^6}{10^2 \\cdot 10^{-1}}'
        ];

        const answerKey = [
            '37^3',
            '1',
            '63^2/48^2',
            '1',
            '36^3/31^3',
            '1/75',
            '82^4/64',
            '89',
            '96^2/91',
            '10^5'
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
