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
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
      correct_answer: "Binary",
      incorrect_answers: ["JavaScript", "C++", "Python"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "All of the following programs are classified as raster graphics editors EXCEPT:",
      correct_answer: "Inkscape",
      incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
      correct_answer: "HD Graphics 500",
      incorrect_answers: ["HD Graphics 700 ", "HD Graphics 600", "HD Graphics 7000"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What did the name of the Tor Anonymity Network orignially stand for?",
      correct_answer: "The Onion Router",
      incorrect_answers: ["The Only Router", "The Orange Router", "The Ominous Router"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What was the first commerically available computer processor?",
      correct_answer: "Intel 4004",
      incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What is the domain name for the country Tuvalu?",
      correct_answer: ".tv",
      incorrect_answers: [".tu", ".tt", ".tl"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
      correct_answer: "Micronesia",
      incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What does the acronym CDN stand for in terms of networking?",
      correct_answer: "Content Delivery Network",
      incorrect_answers: ["Content Distribution Network", "Computational Data Network", "Compressed Data Network"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which one of these is not an official development name for a Ubuntu release?",
      correct_answer: "Mystic Mansion",
      incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In the server hosting industry IaaS stands for...",
      correct_answer: "Infrastructure as a Service",
      incorrect_answers: ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "medium",
      question: "AMD created the first consumer 64-bit processor.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
      correct_answer: "JavaScript",
      incorrect_answers: ["C#", "Python", "PHP"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
      correct_answer: "print(&quot;Hello World&quot;)",
      incorrect_answers: [
        "console.log(&quot;Hello World&quot;)",
        "echo &quot;Hello World&quot;",
        "printf(&quot;Hello World&quot;)",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
      correct_answer: "center",
      incorrect_answers: ["static", "absolute", "relative"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
      correct_answer: "Heartbleed",
      incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does LTS stand for in the software market?",
      correct_answer: "Long Term Support",
      incorrect_answers: ["Long Taco Service", "Ludicrous Transfer Speed", "Ludicrous Turbo Speed"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The Windows 7 operating system has six main editions.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The Windows ME operating system was released in the year 2000.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In computing terms, typically what does CLI stand for?",
      correct_answer: "Command Line Interface",
      incorrect_answers: ["Common Language Input", "Control Line Interface", "Common Language Interface"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "How fast is USB 3.1 Gen 2 theoretically?",
      correct_answer: "10 Gb/s",
      incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: ".at is the top-level domain for what country?",
      correct_answer: "Austria",
      incorrect_answers: ["Argentina", "Australia", "Angola"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "The numbering system with a radix of 16 is more commonly referred to as ",
      correct_answer: "Hexidecimal",
      incorrect_answers: ["Binary", "Duodecimal", "Octal"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What does the term GPU stand for?",
      correct_answer: "Graphics Processing Unit",
      incorrect_answers: ["Gaming Processor Unit", "Graphite Producing Unit", "Graphical Proprietary Unit"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "America Online (AOL) started out as which of these online service providers?",
      correct_answer: "Quantum Link",
      incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "This mobile OS held the largest market share in 2012.",
      correct_answer: "iOS",
      incorrect_answers: ["Android", "BlackBerry", "Symbian"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What does the International System of Quantities refer 1024 bytes as?",
      correct_answer: "Kibibyte",
      incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Laserjet and inkjet printers are both examples of what type of printer?",
      correct_answer: "Non-impact printer",
      incorrect_answers: ["Impact printer", "Daisywheel printer", "Dot matrix printer"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "How many values can a single byte represent?",
      correct_answer: "256",
      incorrect_answers: ["8", "1", "1024"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "The C programming language was created by this American computer scientist. ",
      correct_answer: "Dennis Ritchie",
      incorrect_answers: ["Tim Berners Lee", "al-Khwārizmī", "Willis Ware"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In programming, what do you call functions with the same name but different implementations?",
      correct_answer: "Overloading",
      incorrect_answers: ["Overriding", "Abstracting", "Inheriting"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "How long is an IPv6 address?",
      correct_answer: "128 bits",
      incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "The acronym &quot;RIP&quot; stands for which of these?",
      correct_answer: "Routing Information Protocol",
      incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "Which of these is not a layer in the OSI model for data communications?",
      correct_answer: "Connection Layer",
      incorrect_answers: ["Application Layer", "Transport Layer", "Physical Layer"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the number of keys on a standard Windows Keyboard?",
      correct_answer: "104",
      incorrect_answers: ["64", "94", "76"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What was the name of the first Bulgarian personal computer?",
      correct_answer: "IMKO-1",
      incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What does the &#039;S&#039; in the RSA encryption algorithm stand for?",
      correct_answer: "Shamir",
      incorrect_answers: ["Secure", "Schottky", "Stable"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What language does Node.js use?",
      correct_answer: "JavaScript",
      incorrect_answers: ["Java", "Java Source", "Joomla Source Code"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
      correct_answer: "2005",
      incorrect_answers: ["1999", "2002", "2008"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "Which kind of algorithm is Ron Rivest not famous for creating?",
      correct_answer: "Secret sharing scheme",
      incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "Who is the founder of Palantir?",
      correct_answer: "Peter Thiel",
      incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
    },
  ];

let easyQuestions = []
  const easyChallange = function () {
<<<<<<< Updated upstream
    easyQuestions = questions.filter(element => element.difficulty === "hard")
    return easyQuestions
    }

    console.log(easyChallange());
=======
    easyQuestions = questions.filter(element => element.difficulty === "easy")
    return easyQuestions
    }

    console.log(easyChallange());


    let mediumQuestions = []
  const mediumChallange = function () {
    easyQuestions = questions.filter(element => element.difficulty === "medium")
    return mediumQuestions
    }

    console.log(mediumChallange());


    let difficultQuestions = []
  const difficultQuestionsChallange = function () {
    easyQuestions = questions.filter(element => element.difficulty === "difficult")
    return easyQuestions
    }

    console.log(difficultQuestionsChallange());

    
>>>>>>> Stashed changes
