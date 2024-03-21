try {    
    document.addEventListener('DOMContentLoaded', (event) => {
        const problems = [
            '23^3 \\times 23^4',
            '56^{2} \\div 56^{3}',
            '(38^2)^3 \\times 38^4',
            '42^{-3} \\times 42^2',
            '(74^2)^{-2}',
            '\\frac{67^4}{67^2}',
            '\\sqrt{82^4}',
            '93^{3} \\div 93^{2}',
            '(15^{-2})^3',
            '(47^3)^{-1} \\times 47^2'
        ];

        const answerKey = [
            '23^7',
            '1/56',
            '38^10',
            '1/42',
            '1/74^4',
            '67^2',
            '84^2',
            '93',
            '1/15^6',
            '1/47'
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
