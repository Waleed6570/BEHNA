const questions = [
  {
    text: "Q1: Kya aapko mujh par trust hai?",
    options: [
      "Hamesha se tha ❤️",
      "Thoda kam ho gaya hai",
      "Khud se bhi zyada hai ❤️‍🔥"
    ],
    codes: [1, 2, 3]
  },
  {
    text: "Q2: Agar main superhero hota, to kaunsa hota?",
    options: [
      "Fauji",
      "Aap hamesha se mera superhero ho",
      "Dramebaaz Man"
    ],
    codes: [4, 5, 6]
  },
  {
    text: "Q3: Aapko mere mein sabse ajeeb ya annoying baat kya lagti hai?",
    options: [
      "Har waqt bakbak karta rehta hoon",
      "Har baat mein drama",
      "Kabhi kabhi apna dard chhupa leta hoon 💔"
    ],
    codes: [7, 8, 9]
  },
  {
    text: "Q4: Aapko mere mein sabse achhi baat kya lagti hai?",
    options: [
      "Hamesha sath deta hoon",
      "Mujhe hassata hoon",
      "Dil ka saaf hoon ❤️"
    ],
    codes: [10, 11, 12]
  }
];

const memories = [
  { src: "chai-memory.jpg", caption: "Woh chai wali shaam ❤️" },
  { src: "picnic-memory.jpg", caption: "Hamari picnic wali yaad 🌿" },
  { src: "memory-1.jpg", caption: "Bus hum dono... aur hasi 😄" },
  { src: "memory-2.jpg", caption: "Woh chhoti si baat... lekin yaadgar 📸" }
];

let currentQuestion = 0;
let currentMemory = 0;
let selectedCodes = [];

const welcomeScreen = document.getElementById("welcomeScreen");
const gateScreen = document.getElementById("gateScreen");
const questionContainer = document.getElementById("questionContainer");
const memoryContainer = document.getElementById("memoryContainer");
const finalPage = document.getElementById("finalPage");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const memoryImage = docu
