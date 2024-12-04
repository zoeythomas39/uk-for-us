function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
    };

  // show number of correct answers out of total
  if(numCorrect === 5){
    resultsContainer.innerHTML = `Congrats, mate. With 5/5 correct, you're ready for life across the pond.`;
  } else if(numCorrect === 4){
    resultsContainer.innerHTML = 'Four out of five correct? Close, but no scone.';
  } else if(numCorrect === 3){
    resultsContainer.innerHTML = 'Three out of five correct? Is that the best you can do, chap?';
  } else if(numCorrect === 2){
    resultsContainer.innerHTML = 'Two out of five correct ... got a spot of tea in your eyes, bloke?';
  } else if(numCorrect === 1){
    resultsContainer.innerHTML = 'One out of five correct. We will not say we are disappointed, just a bit cuffed.';
  } else{
    resultsContainer.innerHTML = "Zed out of five correct. Almost as if you didn't listen to a word we wrote, you bugger.";
  };
});
}

const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');
const resetButton = document.querySelector('#reset');

const myQuestions = [
  {
    question: "Which of these countries are not part of the United Kingdom?",
    answers: {
      a: "England",
      b: "Ireland",
      c: "Wales",
      d: "Scotland"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of these correctly describes the House of Commons?",
    answers: {
      a: "Members are recommended by the Prime Minister and appointed by the Crown",
      b: "Members are elected by their constituents",
      c: "Members earn appointment from relatives through hereditary match pairs",
      d: "Members are selected by the majority political party's leadership",
    },
    correctAnswer: "b"
  },
  {
  question: "Who is the current monarch of the United Kingdom?",
  answers: {
    a: "King Charles I",
    b: "King Charles II",
    c: "King Charles III",
    d: "King Charles IV"
  },
  correctAnswer: "c"
  },
  {
    question: "What three groups make up Parliament?",
    answers: {
      a: "House of Lords, House of Commons, the Crown",
      b: "The Prime Minister, his Cabinet and his ministers",
      c: "House of Lords, House of Commons, Prime Minister",
      d: "Prime Minister's Cabinet, opposition party members, 'crossbench' members",
    },
    correctAnswer: "a"
  },
  {
    question: "The [blank] serves as commander-in-chief of the British Armed Forces",
    answers: {
      a: "Prime Minister",
      b: "Secretary of State for Defence",
      c: "Monarch",
      d: "Chief of the General Staff",
    },
    correctAnswer: "c"
  }
];

buildQuiz();

submitButton.addEventListener('click', showResults);

// Function to reset the quiz
function resetQuiz() {
  // Clear all selected radio buttons
  const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
  selectedOptions.forEach(option => option.checked = false);

  // Clear the results container
  resultsContainer.innerHTML = '';

  // Optionally rebuild the quiz (if necessary)
  buildQuiz();
}

// Event listener for the reset button
resetButton.addEventListener('click', resetQuiz);
