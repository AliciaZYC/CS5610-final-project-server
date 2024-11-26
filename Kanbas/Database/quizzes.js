export default [
  {
    _id: "QZ101",
    course: "RS101",
    published: true,
    title: "Basic Math Quiz",
    description: "A simple quiz to test basic arithmetic skills.",
    quizType: "Graded Quiz",
    points: 20,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 15, // in minutes
    multipleAttempts: true,
    attempts: 3,
    showCorrectAnswers: "afterSubmit",
    accessCode: "MATH2023",
    oneQuestionAtATime: false,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    dueDate: "2024-11-13T23:59",
    availableDate: "2024-11-10T23:59",
    untilDate: "2024-11-17T23:59",
    questions: [
      {
        id: "q1",
        title: "Basic Addition",
        questionText: "What is 2 + 2?",
        type: "multiple-choice",
        points: 10,
        choices: [
          { text: "3", isCorrect: false },
          { text: "4", isCorrect: true },
          { text: "5", isCorrect: false },
          { text: "6", isCorrect: false },
        ],
      },
      {
        id: "q2",
        title: "Basic Multiplication",
        questionText: "What is 5 x 3?",
        type: "multiple-choice",
        points: 10,
        choices: [
          { text: "8", isCorrect: false },
          { text: "15", isCorrect: true },
          { text: "10", isCorrect: false },
          { text: "20", isCorrect: false },
        ],
      },
    ],
  },
  {
    _id: "QZ102",
    course: "RS101",
    published: false,
    title: "Science Fundamentals Quiz",
    description: "An introductory quiz on basic scientific concepts.",
    quizType: "Graded Quiz",
    points: 25,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    attempts: 1,
    showCorrectAnswers: "afterDueDate",
    accessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: true,
    dueDate: "2024-05-13T23:59",
    availableDate: "2024-05-13T23:59",
    untilDate: "2024-05-13T23:59",
    questions: [
      {
        id: "q1",
        title: "Water Composition",
        questionText: "What is the chemical symbol for water?",
        type: "multiple-choice",
        points: 10,
        choices: [
          { text: "H2O", isCorrect: true },
          { text: "O2", isCorrect: false },
          { text: "CO2", isCorrect: false },
          { text: "HO2", isCorrect: false },
        ],
      },
      {
        id: "q2",
        title: "Red Planet",
        questionText: "What planet is known as the Red Planet?",
        type: "multiple-choice",
        points: 15,
        choices: [
          { text: "Earth", isCorrect: false },
          { text: "Venus", isCorrect: false },
          { text: "Mars", isCorrect: true },
          { text: "Jupiter", isCorrect: false },
        ],
      },
    ],
  },
  {
    _id: "QZ103",
    course: "RS103",
    published: false,
    title: "History of Middle-earth Quiz",
    description: "A quiz on the lore and events of Middle-earth.",
    quizType: "Graded Quiz",
    points: 10,
    assignmentGroup: "Quizzes",
    shuffleAnswers: false,
    timeLimit: 25,
    multipleAttempts: true,
    attempts: 2,
    showCorrectAnswers: "immediately",
    accessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: true,
    lockQuestionsAfterAnswering: true,
    dueDate: "2024-05-13T23:59",
    availableDate: "2024-05-13T23:59",
    untilDate: "2024-05-13T23:59",
    questions: [
      {
        id: "q1",
        title: "One Ring",
        questionText: "The One Ring was destroyed in Mount Doom.",
        type: "true-false",
        points: 5,
        isTrue: true,
      },
      {
        id: "q2",
        title: "Elrond's Kingdom",
        questionText: "Elrond was the King of Rohan.",
        type: "true-false",
        points: 5,
        isTrue: false,
      },
    ],
  },
  {
    _id: "QZ104",
    course: "RS102",
    published: false,
    title: "Rocket Science Basics Quiz",
    description:
      "A quiz covering basic concepts in rocket science and propulsion.",
    quizType: "Graded Quiz",
    points: 40,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 30,
    multipleAttempts: false,
    attempts: 1,
    showCorrectAnswers: "afterDueDate",
    accessCode: "ROCKET2023",
    oneQuestionAtATime: false,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    dueDate: "2024-05-13T23:59",
    availableDate: "2024-05-13T23:59",
    untilDate: "2024-05-13T23:59",
    questions: [
      {
        id: "q1",
        title: "Rocket Principle",
        questionText: "What is the main principle of rocket propulsion?",
        type: "multiple-choice",
        points: 20,
        choices: [
          { text: "Newton's First Law", isCorrect: false },
          { text: "Newton's Second Law", isCorrect: false },
          { text: "Newton's Third Law", isCorrect: true },
          { text: "Law of Conservation of Energy", isCorrect: false },
        ],
      },
      {
        id: "q2",
        title: "Rocket Fuel",
        questionText: "Which fuel is commonly used in rockets?",
        type: "multiple-choice",
        points: 20,
        choices: [
          { text: "Gasoline", isCorrect: false },
          { text: "Liquid Hydrogen", isCorrect: true },
          { text: "Kerosene", isCorrect: false },
          { text: "Diesel", isCorrect: false },
        ],
      },
    ],
  },
  {
    _id: "QZ105",
    course: "RS102",
    published: true,
    title: "Introduction to Philosophy Quiz",
    description: "A quiz on fundamental philosophical questions and theories.",
    quizType: "Graded Quiz",
    points: 50,
    assignmentGroup: "Quizzes",
    shuffleAnswers: false,
    timeLimit: 60,
    multipleAttempts: false,
    attempts: 1,
    showCorrectAnswers: "never",
    accessCode: "",
    oneQuestionAtATime: false,
    webcamRequired: true,
    lockQuestionsAfterAnswering: false,
    dueDate: "2024-05-13T23:59",
    availableDate: "2024-05-13T23:59",
    untilDate: "2024-05-13T23:59",
    questions: [
      {
        id: "q1",
        title: "Free Will",
        questionText: "Explain the concept of free will and its importance.",
        type: "fill-in-blanks",
        points: 20,
        choices: [
          {
            text: "Free will is the ability to choose between different options and is very important.",
            isCorrect: true,
          },
        ],
      },
      {
        id: "q2",
        title: "Ethics",
        questionText: "Discuss the role of ethics in modern society.",
        type: "fill-in-blanks",
        points: 30,
        choices: [
          {
            text: "Communicating ethical expectations and ethics training.",
            isCorrect: true,
          },
        ],
      },
    ],
  },
];
