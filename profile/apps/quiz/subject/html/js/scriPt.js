//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "What is the purpose of the HTML tag?",
    options: ["To define metadata about an HTML document", "To insert media files", "To create hyperlinks", "To define a list"],
    correct: "To define metadata about an HTML document",
  },
  {
    id: "1",
    question: "What is the correct HTML for adding a background color to a page?",
    options: ['Tag: bg color=""','Tag: background color=""','Tag: color', 'Tag: body style="background-color:""'],
    correct: 'Tag: body style="background-color:""',
  },
  {
    id: "2",
    question: "Which HTML tag is used to define a footer in a web page?",
    options: ["Tag: foot", "Tag: footer", "Tag: bottom", "Tag: end"],
    correct: "Tag: footer",
  },
  {
    id: "3",
    question: "Which HTML tag is used to define the main content of a web page?",
    options: ["Tag: content", "Tag: article", "Tag: main", "Tag: section"],
    correct: "Tag: main",    
  },
  {
    id: "4",
    question: "Which tag is used to define a paragraph in HTML?",
    options: ["Text", "Para", "P", "Paragraph"],
    correct: "P",    
  },
  {
    id: "5",
    question: "What is the correct HTML tag for the largest heading?",
    options: ["Heading", "H6", "H1", "Heading6"],
    correct: "H1",    
  },
  {
    id: "6",
    question: 'What does the "alt" attribute in the  tag specify?',
    options: ["Altitude of the image", "Alternative text for an image", "Alignment of the image", "Alternate source for the image"],
    correct: "Alternative text for an image",    
  },
  {
    id: "7",
    question: "What is the correct HTML for inserting an image?",
    options: ['img href="image.jpg" alt="Image"', 'image src="image.jpg" alt="Image"', 'img src="image.jpg" alt="Image"', 'picture src="image.jpg" alt="Image"'],
    correct: 'img src="image.jpg" alt="Image"',
  },
  {
    id: "8",
    question: "What is the correct HTML for creating a hyperlink to another website?",
    options: ["Link", "http://www.example.com", "Link", '<a href="http://www.example.com">Link</a>'],
    correct: '<a href="http://www.example.com">Link</a>',  
  },
  {
    id: "9",
    question: "Which attribute is used to define inline styles in HTML?",
    options: ["style", "class", "id", "format"],
    correct: "style",    
  },
  {
    id: "10",
    question: "Which tag is used to define a table row in HTML?",
    options: ["&lt;ul&gt;", "&lt;tr&gt;", "&lt;table&gt;", "&lt;th&gt;"],
    correct: "&lt;tr&gt;",    
  },
  {
    id: "11",
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["Tag: link", "Tag: href", 'Tag: a href=""', "Tag: hyperlink"],
    correct: 'Tag: a href=""',    
  },
  {
    id: "12",
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["Tag: br", "Tag: hyperlink", "Tag: linebreak", "Tag: lb"],
    correct: "Tag: br",    
  },
  
  {
    id: "13",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correct: "Hyper Text Markup Language",    
  },
  {
    id: "14",
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["&lt;dl&gt;", "&lt;li&gt;", "&lt;ul&gt;", "&lt;ol&gt;"],
    correct: "&lt;ul&gt;",    
  },
  {
    id: "15",
    question: "In html _______ tag defines paragraph.",
    options: ["&lt;p&gt;", "&lt;para&gt;", "&lt;table&gt;", "&lt;section&gt;"],
    correct: "&lt;p&gt;",    
  },
  {
    id: "16",
    question: "What is Default extension for a HTML document?",
    options: [".htm", ".html", "both", "none"],
    correct: "both",    
  },
  {
    id: "17",
    question: "HTML tag begins with______ symbol.",
    options: ["Gratter than(>)", "Less than(<)", "&lt;!", "!&gt;"],
    correct: "Less than(<)",    
  },
  {
    id: "18",
    question: "HTML tag ends with _____symbol.",
    options: ["Gratter than(>)", "Less than(<)", "&lt;!", "!&gt;"],
    correct: "Gratter than(>)",    
  },
  {
    id: "19",
    question: "HTML comment begins with_____ symbol.",
    options: ["( < )", "( > )", "( <! )", "( !> )"],
    correct: "( <! )",    
  },
  {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",    
  },
  {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",    
  },
  {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",    
  },
  {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",    
  },
  {
    id: "",
    question: "",
    options: ["", "", "", ""],
    correct: "",    
  },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },
  // {
  //   id: "",
  //   question: "",
  //   options: ["", "", "", ""],
  //   correct: "",    
  // },

  
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};