const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions= ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = [ ["Sally Ride", "Sally ride", "sally Ride", "sally ride", "sallyride"], 
["True", "true"],
["40", "forty", 40],
["Trajectory", "trajectory"],
["3", "three", 3]
];
let candidateAnswers = [];
let gradeArray = [];
let percentage = '';


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input=require('readline-sync');
  candidateName=input.question("What is your name?:")
  return candidateName
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0;i<questions.length;i++){
    const input=require('readline-sync');
    candidateAnswers+candidateAnswers.push(input.question(questions[i]))
  }

}

function compareAnswers(){
  for (let i=0;i<candidateAnswers.length;i++){
    if (correctAnswers[i].includes(candidateAnswers[i])){
      gradeArray.push(true)
  } else {
    gradeArray.push(false)
  }
  }
  return gradeArray
  }

  function grade(){
  for (let i=0;i<gradeArray.length;i++){
  if (gradeArray.includes(false)){
  placeHolder = gradeArray.indexOf(false)
  gradeArray.splice(placeHolder,1)
}
}
percentage = (gradeArray.length/questions.length)*100
return percentage
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i=0;i<correctAnswers.length;i++){
    console.log(`\n ${i+1}.) ${questions[i]} \n\tYou said: ${candidateAnswers[i]}. \n\tCorrect answer: ${correctAnswers[i]}. \n`)
  }
  compareAnswers();
}

function passNotice(){
  if (percentage > 79){
    console.log(`>>> Overall Grade: ${percentage} (${gradeArray.length} of 5 responses correct) <<< \n>>> Status: Passed <<<`)
  } else {
    console.log(`>>> Overall Grade: ${percentage} (${gradeArray.length} of 5 responses correct) <<< \n>>> Status: Failed <<<`)
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\n Welcome, ${candidateName}! \n`)
  askQuestion();
  console.log(`\n Candidate Name: ${candidateName}`)
  gradeQuiz(this.candidateAnswers);
  grade();
  passNotice();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};