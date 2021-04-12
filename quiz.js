



const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

const quizQuestions = [{

    question: "Afshin is currently a moderator of:",

    answers: {

      a: "Introduction to coding for Researchers",

      b: "Human-computer interaction",

      c: "Interactive programming languages",

      d: "Low and high fidelity prototyping"

    },

    correctAnswer: "a"

  },

  {

    question: "afshin works closely with:",

    answers: {

      a: "Undergraduate Students",

      b: "Honours students",

      c: "Higher Degree Research Students",

      d: "All of the above"

    },

    correctAnswer: "c"

  },

  {

    question: "afshin’s web design and development skills include:",

    answers: {

      a: "Contextual inquiry",

      b: "Participant observation",

      c: "User interface design",

      d: "Prototype sorting"

    },

    correctAnswer: "c"

  },

  {

    question: "afshin is super passionate about:",

    answers: {

      a: "People",

      b: "Innovation",

      c: "Human-centred design",

      d: "All of the above and more!"

    },

    correctAnswer: "d"

  }]; 


function buildQuiz() {const output = []; 
    for(i=0; i<quizQuestions.length; i++)
    {const answers = [];
        for(letter in quizQuestions[i].answers){

            answers.push(
            
                '<label>'
            
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            
                + letter + ': '
            
                + quizQuestions[i].answers[letter]
            
                + '</label>'
            
                );
            }
            
                output.push(

                    '<div class="question">' + quizQuestions[i].question + '</div>'
                  
                    + '<div class="answers">' + answers.join('') + '</div>'
                  
                    );}
                    quizContainer.innerHTML = output.join('');}



                    function showResults(){

                        // gather answer containers from our quiz
                      
                        var answerContainers = quizContainer.querySelectorAll('.answers');
                      
                      
                        // keep track of user's answers 
                      
                        var numCorrect = 0;
                      
                          // for each question find the selected answer
                      
                          for(i=0; i<quizQuestions.length; i++){
                      
                            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                      
                              // if answer is correct add to the number of correct answers
                      
                              if(userAnswer===quizQuestions[i].correctAnswer){
                      
                                numCorrect++;
                      
                                // and colour the answers green
                      
                                answerContainers[i].style.color = 'lightgreen';
                      
                              }
                      
                              // if answer is wrong or blank
                      
                              else{
                      
                                // colour the answers red
                      
                                answerContainers[i].style.color = 'red';
                      
                              }
                      
                            }
                      
                       
                      
                            // show number of correct answers out of total
                      
                            if (numCorrect === 0) { 
                      
                            resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
                      
                          }
                      
                          if (numCorrect === 1) { 
                      
                              resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
                      
                            }
                      
                            if (numCorrect === 2) { 
                      
                              resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
                      
                            }
                      
                            if (numCorrect === 3) { 
                      
                              resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Tara pretty well!";
                      
                            }
                      
                            if (numCorrect === 4) { 
                      
                              resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Tara so well!";
                      
                            }
                      
                      }

                    buildQuiz();


                    submitButton.onclick = function() {

                    showResults();
                     
                      }




