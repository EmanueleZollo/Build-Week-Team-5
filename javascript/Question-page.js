const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "C++", "Objective-C"],
  },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question: "The logo for Snapchat is a Bell.",
  //   correct_answer: "False",
  //   incorrect_answers: ["True"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
  //   correct_answer: "Binary",
  //   incorrect_answers: ["JavaScript", "C++", "Python"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question: "Pointers were not used in the original C programming language; they were added later on in C++.",
  //   correct_answer: "False",
  //   incorrect_answers: ["True"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "All of the following programs are classified as raster graphics editors EXCEPT:",
  //   correct_answer: "Inkscape",
  //   incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question:
  //     "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
  //   correct_answer: "HD Graphics 500",
  //   incorrect_answers: ["HD Graphics 700 ", "HD Graphics 600", "HD Graphics 7000"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "What did the name of the Tor Anonymity Network orignially stand for?",
  //   correct_answer: "The Onion Router",
  //   incorrect_answers: ["The Only Router", "The Orange Router", "The Ominous Router"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "What was the first commerically available computer processor?",
  //   correct_answer: "Intel 4004",
  //   incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "What is the domain name for the country Tuvalu?",
  //   correct_answer: ".tv",
  //   incorrect_answers: [".tu", ".tt", ".tl"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
  //   correct_answer: "Micronesia",
  //   incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "What does the acronym CDN stand for in terms of networking?",
  //   correct_answer: "Content Delivery Network",
  //   incorrect_answers: ["Content Distribution Network", "Computational Data Network", "Compressed Data Network"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "Which one of these is not an official development name for a Ubuntu release?",
  //   correct_answer: "Mystic Mansion",
  //   incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "In the server hosting industry IaaS stands for...",
  //   correct_answer: "Infrastructure as a Service",
  //   incorrect_answers: ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "medium",
  //   question: "AMD created the first consumer 64-bit processor.",
  //   correct_answer: "True",
  //   incorrect_answers: ["False"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
  //   correct_answer: "JavaScript",
  //   incorrect_answers: ["C#", "Python", "PHP"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question:
  //     "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
  //   correct_answer: "print(&quot;Hello World&quot;)",
  //   incorrect_answers: [
  //     "console.log(&quot;Hello World&quot;)",
  //     "echo &quot;Hello World&quot;",
  //     "printf(&quot;Hello World&quot;)",
  //   ],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
  //   correct_answer: "center",
  //   incorrect_answers: ["static", "absolute", "relative"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
  //   correct_answer: "True",
  //   incorrect_answers: ["False"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question:
  //     "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
  //   correct_answer: "Heartbleed",
  //   incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "What does LTS stand for in the software market?",
  //   correct_answer: "Long Term Support",
  //   incorrect_answers: ["Long Taco Service", "Ludicrous Transfer Speed", "Ludicrous Turbo Speed"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question: "The Windows 7 operating system has six main editions.",
  //   correct_answer: "True",
  //   incorrect_answers: ["False"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question: "The Windows ME operating system was released in the year 2000.",
  //   correct_answer: "True",
  //   incorrect_answers: ["False"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "In computing terms, typically what does CLI stand for?",
  //   correct_answer: "Command Line Interface",
  //   incorrect_answers: ["Common Language Input", "Control Line Interface", "Common Language Interface"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "How fast is USB 3.1 Gen 2 theoretically?",
  //   correct_answer: "10 Gb/s",
  //   incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: ".at is the top-level domain for what country?",
  //   correct_answer: "Austria",
  //   incorrect_answers: ["Argentina", "Australia", "Angola"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "The numbering system with a radix of 16 is more commonly referred to as ",
  //   correct_answer: "Hexidecimal",
  //   incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "What does the term GPU stand for?",
  //   correct_answer: "Graphics Processing Unit",
  //   incorrect_answers: ["Gaming Processor Unit", "Graphite Producing Unit", "Graphical Proprietary Unit"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question: "America Online (AOL) started out as which of these online service providers?",
  //   correct_answer: "Quantum Link",
  //   incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "This mobile OS held the largest market share in 2012.",
  //   correct_answer: "iOS",
  //   incorrect_answers: ["Android", "BlackBerry", "Symbian"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question: "What does the International System of Quantities refer 1024 bytes as?",
  //   correct_answer: "Kibibyte",
  //   incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "Laserjet and inkjet printers are both examples of what type of printer?",
  //   correct_answer: "Non-impact printer",
  //   incorrect_answers: ["Impact printer", "Daisywheel printer", "Dot matrix printer"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "How many values can a single byte represent?",
  //   correct_answer: "256",
  //   incorrect_answers: ["8", "1", "1024"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "The C programming language was created by this American computer scientist. ",
  //   correct_answer: "Dennis Ritchie",
  //   incorrect_answers: ["Tim Berners Lee", "al-Khwārizmī", "Willis Ware"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "In programming, what do you call functions with the same name but different implementations?",
  //   correct_answer: "Overloading",
  //   incorrect_answers: ["Overriding", "Abstracting", "Inheriting"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "How long is an IPv6 address?",
  //   correct_answer: "128 bits",
  //   incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question: "The acronym &quot;RIP&quot; stands for which of these?",
  //   correct_answer: "Routing Information Protocol",
  //   incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question: "Which of these is not a layer in the OSI model for data communications?",
  //   correct_answer: "Connection Layer",
  //   incorrect_answers: ["Application Layer", "Transport Layer", "Physical Layer"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "What is the number of keys on a standard Windows Keyboard?",
  //   correct_answer: "104",
  //   incorrect_answers: ["64", "94", "76"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question: "What was the name of the first Bulgarian personal computer?",
  //   correct_answer: "IMKO-1",
  //   incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "boolean",
  //   difficulty: "easy",
  //   question: "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
  //   correct_answer: "True",
  //   incorrect_answers: ["False"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "medium",
  //   question: "What does the &#039;S&#039; in the RSA encryption algorithm stand for?",
  //   correct_answer: "Shamir",
  //   incorrect_answers: ["Secure", "Schottky", "Stable"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "easy",
  //   question: "What language does Node.js use?",
  //   correct_answer: "JavaScript",
  //   incorrect_answers: ["Java", "Java Source", "Joomla Source Code"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question:
  //     "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
  //   correct_answer: "2005",
  //   incorrect_answers: ["1999", "2002", "2008"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question: "Which kind of algorithm is Ron Rivest not famous for creating?",
  //   correct_answer: "Secret sharing scheme",
  //   incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  // },
  // {
  //   category: "Science: Computers",
  //   type: "multiple",
  //   difficulty: "hard",
  //   question: "Who is the founder of Palantir?",
  //   correct_answer: "Peter Thiel",
  //   incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  // },
];

// choose Difficulty

function svuota1() {
  document.getElementById("svuota1").innerHTML = `
  <body onload="startQuiz()" id="Svuota">
  <header>
    <img class="logo" src="./assets/epicode_logo.png" alt="logo EPICODE" />
    <div></div>
  </header>

  <main>
    <div id="app" class="container"></div>
    <div class="asadiv" id="question-container"></div>
    <div id="question" class="titleQuestion"></div>

    <section class="answerPos" id="answerButtonsJs"></section>

    <p id="questFooter"></p>
    <footer id="questionCount">
      <div class="next-button-container controls">
        <button id="next" class="next-button" style="display: none">NEXT</button>
      </div>
    </footer>
  </main>
  <script src="./javascript/Question-page.js"></script>
</body>
`;
  correct();
  drawChart();
  nextPage();
}

let easyQuestions = [];
  const easyChallange = function () {
    easyQuestions = questions.filter(element => element.difficulty === "easy")
    return easyQuestions
    }

    console.log(easyChallange());


    let mediumQuestions = []
  const mediumChallange = function () {
    mediumQuestions = questions.filter(element => element.difficulty === "medium")
    return mediumQuestions
    }

    console.log(mediumChallange());


    let difficultQuestions = []
  const difficultChallange = function () {
    difficultQuestions = questions.filter(element => element.difficulty === "difficult")
    return difficultQuestions
    }

    console.log(difficultQuestionsChallange());

    document.getElementById("Qdiff-easy").addEventListener("click", easyChallange)
    document.getElementById("Qdiff-medium").addEventListener("click", mediumChallange)
    document.getElementById("Qdiff-hard").addEventListener("click", difficultChallange)

//TIMER

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 15;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

const createTimer = function () {
  document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(timeLeft)}</span>
</div>
`;
};

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      handleTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `
    <div class="timer-wrapper">
      <span class="timer-text-up">REMAINING</span><br>
      <span class="timer-seconds">${seconds}</span><br>
      <span class="timer-text-down">SECONDS</span>
    </div>
  `;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
    document.getElementById("base-timer-path-remaining").classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document.getElementById("base-timer-path-remaining").classList.remove(info.color);
    document.getElementById("base-timer-path-remaining").classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
  document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
}

// start QUIZ

/*const startButton = document.getElementById("start");*/
const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answerButtonsJs");
const nextButton = document.getElementById("next");

const questF = document.getElementById("questFooter");

/*nextButton.addEventListener("click", startQuiz);*/
nextButton.addEventListener("click", showNextQuestion);

let currentQuestionI = -1;
let score = 0;
let scoreX = 0;
let answered = false;
let quest = 1;
let selectedButton = null;

function startQuiz() {
  currentQuestionI = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  setRemainingPathColor(TIME_LIMIT);
  // startTimer();
}

function Giacomino (btn) {
      btn.addEventListener("click", function (event) {
      if (event.target.classList.contains("answer")) {
        selectAnswer(event);
      }
      score--
    });
}



function showQuestion() {
  createTimer();
  resetBtn();
  if (inputBlock.value === misto) {
    let currentQuestion = questions[currentQuestionI];
  questionElement.innerHTML = currentQuestion.question;
  } else if (inputBlock.value === easy){
    let currentQuestion = easyQuestions[currentQuestionI];
    questionElement.innerHTML = currentQuestion.question;
  }
  } else if (inputBlock.value === medium){
    let currentQuestion = mediumQuestions[currentQuestionI];
    questionElement.innerHTML = currentQuestion.question;
  } else {
    let currentQuestion = difficultQuestions[currentQuestionI];
    questionElement.innerHTML = currentQuestion.question;
  }
  

  questF.innerHTML = `QUESTION ${quest++} <span>/ ${questions.length}</span>`;

  let answers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);
  randomQuestions(answers);

  answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer;
    button.classList.add("answer");
    answersButton.appendChild(button);
    answersButton.addEventListener("click", function (event) {
      if (event.target.classList.contains("answer")) {
        selectAnswer(event);
      }
    });
  });
}

function selectAnswer(event) {
  if (answered) return;
  answered = true;

  const selectedAnswer = event.target.innerHTML;
  const correctAnswer = questions[currentQuestionI].correct_answer;

  const answerButtons = document.querySelectorAll(".answer");
console.log(answerButtons);

  // answerButtons.forEach(button => (button.disabled = true));

  // if (selectedButton !== null) {
  //   selectedButton.classList.remove("selectedButton");
  // }

  if (selectedButton === event.target) {
    selectedButton = null;
  } else {
    if (selectedAnswer === correctAnswer) {
      score++;
      console.log("Risposta corretta!");
    } else {
      console.log("Risposta errata.");
    }
    event.target.classList.toggle("selectedButton");
    selectedButton = event.target;
    nextButton.style.display = "inline-block";
    console.log(score);
    for (let i =0; i < answerButtons.length; i++) {
      Giacomino(answerButtons[i])
    }
    // Giacomino (answerButtons)
  }
}

function showNextQuestion() {
  currentQuestionI++;
  answered = false;
  document.getElementById("question-container").innerHTML = "";
  nextButton.style.display = "none";
  if (currentQuestionI < questions.length) {
    showQuestion();
    resetTimer();
  } else {
    scoreX = score;
    console.log(scoreX);
    svuota();
  }
}

// VEDO SE IL NUMERO É INTERO, SE LO É RITORNA SENZA DECIMALI, SE INVECE NE HA TORNA CON

function isInteger(value) {
  return Number.isInteger(value);
}
function formatPercentage(percentage) {
  if (isInteger(percentage)) {
    return percentage + "%";
  } else {
    return percentage.toFixed(1) + "%";
  }
}

function correct() {
  let correctPercentage = (scoreX / questions.length) * 100;
  let wrongPercentage = 100 - correctPercentage;

  document.getElementById("resultScore").innerHTML =
    "Correct <br><strong>" +
    formatPercentage(correctPercentage) +
    "</strong> <br><p>" +
    scoreX +
    " / " +
    questions.length +
    " " +
    "questions </p>";
  document.getElementById("wrong").innerHTML =
    "Wrong <br><strong>" +
    formatPercentage(wrongPercentage) +
    " </strong><br><p>" +
    (questions.length - scoreX) +
    " / " +
    questions.length +
    " " +
    "questions </p>";
}

// FUNZIONE PER SVUOTARE L'HTML

function svuota() {
  document.getElementById("Svuota").innerHTML = `
<body>
<header>
  <img class="logo" src="./assets/epicode_logo.png" alt="logo-EPICODE" />
</header>
    <main>
      <div class="results-title-container">
        <h2>Results</h2>
        <h4>The summary of your answers:</h4>
      </div>
      <section class="results-section-container">
        <div class="results-left-container">
          <h2 class="correct-wrong" id="resultScore">Correct<br /><strong class="percentage">%</strong></h2>
          <p class="right-answers"></p>
        </div>
        <div class="results-central-container">
        <canvas id="myDonutChart" width="500px" height="500px"></canvas>
        </div>
        <div class="results-right-container">
          <h2 class="correct-wrong" id="wrong">Wrong<br /><strong class="percentage">%</strong></h2>
          <p class="wrong-answers"></p>
        </div>
      </section>
      <footer class="results-footer">
      <a><button class="results-button">RATE US</button></a>
      </footer>
    </main>
</body>
`;
  correct();
  drawChart();
  nextPage();
}

function randomQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function resetBtn() {
  nextButton.style.display = "none";
  const answersButtonChildren = answersButton.children;
  const numberOfChildren = answersButtonChildren.length;

  for (let i = 0; i < numberOfChildren; i++) {
    answersButton.removeChild(answersButtonChildren[0]);
  }
}

// DOMANDA SUCCESSIVA ALLO SCADERE DEL TIMER

function resetTimer() {
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  clearInterval(timerInterval);
  setCircleDasharray();
  setRemainingPathColor(timeLeft);
  startTimer();
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    remainingPathColor = alert.color;
  } else if (timeLeft <= warning.threshold) {
    remainingPathColor = warning.color;
  } else {
    remainingPathColor = info.color;
  }

  document.getElementById("base-timer-path-remaining").classList.remove(alert.color, warning.color, info.color);
  document.getElementById("base-timer-path-remaining").classList.add(remainingPathColor);
}

function handleTimesUp() {
  onTimesUp();
}

function onTimesUp() {
  if (currentQuestionI === questions.length) {
    window.location.href = "./Results-page.html";
  } else {
    showNextQuestion();
  }
}

// RESULT PAGE

const drawChart = function () {
  const corrette = (scoreX / questions.length) * 100;
  const sbagliate = 100 - (scoreX / questions.length) * 100 + (questions.length - scoreX);

  const coloreCorrette = "cyan";
  const coloreSbagliate = "MediumVioletRed";

  const canvas = document.getElementById("myDonutChart");
  const ctx = canvas.getContext("2d");

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const radius = Math.min(canvasWidth, canvasHeight) / 2;

  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  function drawDonutArc(startAngle, endAngle, colore) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.arc(centerX, centerY, radius * 0.7, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = colore;
    ctx.fill();
  }

  function drawText() {
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const fontSize = 25;
    ctx.font = `${fontSize}px Inter`;

    if (corrette >= 60) {
      ctx.fillStyle = "white";
      ctx.font = `bold ${fontSize}px Inter`;
      ctx.fillText("Congratulations!", centerX, centerY - fontSize * 2);
      ctx.fillStyle = "cyan";
      ctx.fillText("You passed the exam.", centerX, centerY - fontSize);
      ctx.fillStyle = "white";
      ctx.font = `18px Inter`;
      ctx.fillText("We'll send you the certificate", centerX, centerY + fontSize * 0.75);
      ctx.fillText("in a few minutes.", centerX, centerY + fontSize * 1.5);
      ctx.fillText("Check your email (including", centerX, centerY + fontSize * 2.25);
      ctx.fillText("promotions / spam folder)", centerX, centerY + fontSize * 3);
    } else {
      ctx.font = `bold ${fontSize}px Inter`;
      ctx.fillStyle = "red";
      ctx.fillText("You failed the exam.", centerX, centerY - fontSize);
      ctx.fillStyle = "white";
      ctx.font = `18px Inter`;
      ctx.fillText("But don't worry,", centerX, centerY + fontSize * 0.75);
      ctx.fillText("you can always retry", centerX, centerY + fontSize * 1.5);
    }
  }

  const total = corrette + sbagliate;
  const corretteAngle = (corrette / total) * 2 * Math.PI;
  const sbagliateAngle = (sbagliate / total) * 2 * Math.PI;
  drawDonutArc(-Math.PI / 2 - corretteAngle, -Math.PI / 2, coloreCorrette);

  drawDonutArc(-Math.PI / 2, -Math.PI / 2 + sbagliateAngle, coloreSbagliate);

  drawText();
};

const nextPage = function () {
  const websiteButton = document.querySelector(".results-button");
  const newLink = document.querySelector("a");

  const feedbackLink = function () {
    newLink.classList.add("linky");
    newLink.setAttribute("href", "./Feedback-page.html");
    return websiteButton.appendChild(newLink);
  };

  websiteButton.addEventListener("click", feedbackLink);
};