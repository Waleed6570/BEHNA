// 🌸 Questions and Options
const questions = [
  {
    text: "Sabse pyari yaad humari kaun si hai?",
    options: ["Chai wali baat", "Picnic day", "Late night talks"],
    codes: [1, 2, 3] // for secret code mapping
  },
  {
    text: "Main sabse zyada kis cheez mein annoying hoon?",
    options: ["Tang karna", "Baat nahi sunna", "Zyada pyar karna"],
    codes: [4, 5, 6]
  },
  {
    text: "Aap mujhe kis naam se bulati ho?",
    options: ["Bhai", "Motu", "Chotu"],
    codes: [7, 8, 9]
  },
  {
    text: "Agar surprise mile to kya kahogi?",
    options: ["Aww thank you", "Yeh kya hai!", "Itna cute 🥹"],
    codes: [10, 11, 12]
  }
];

// 🌸 Memories
const memories = [
  { src: "chai-memory.jpg", caption: "Woh chai wali shaam ❤" },
  { src: "picnic-memory.jpg", caption: "Hamari picnic wali yaad 🌿" },
  { src: "memory-1.jpg", caption: "Bus hum dono... aur hasi 😄" },
  { src: "memory-2.jpg", caption: "Woh chhoti si baat... lekin yaadgar 📸" }
];

let currentQuestion = 0;
let currentMemory = 0;
let selectedCodes = [];

// 🌸 DOM Elements
const welcomeScreen = document.getElementById("welcomeScreen");
const gateScreen = document.getElementById("gateScreen");
const questionContainer = document.getElementById("questionContainer");
const memoryContainer = document.getElementById("memoryContainer");
const finalPage = document.getElementById("finalPage");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");
const surpriseCode = document.getElementById("surpriseCode");

// 🌸 Audio Elements (insert into HTML file manually with your mp3s)
const audioMap = {
  welcome: new Audio("welcome.mp3"),
  gate: new Audio("gate.mp3"),
  questions: new Audio("questions.mp3"),
  memories: new Audio("memories.mp3"),
  final: new Audio("final.mp3")
};

// 📣 Helper to switch music
function playMusic(type) {
  for (const key in audioMap) {
    audioMap[key].pause();
    audioMap[key].currentTime = 0;
  }
  audioMap[type].play();
  audioMap[type].loop = true;
}

// 🚀 Start
function startExperience() {
  welcomeScreen.classList.add("hidden");
  gateScreen.classList.remove("hidden");
  playMusic("gate");

  // Start gate animation
  document.querySelector(".left-gate").style.transform = "translateX(-100%)";
  document.querySelector(".right-gate").style.transform = "translateX(100%)";

  setTimeout(() => {
    gateScreen.classList.add("hidden");
    startQuestions();
  }, 3000);
}

// 🧠 Questions Logic
function startQuestions() {
  playMusic("questions");
  questionContainer.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.innerText = q.text;
  optionsContainer.innerHTML = "";

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      selectedCodes.push(q.codes[i]);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        startMemories();
      }
    };
    optionsContainer.appendChild(btn);
  });
}

// 📸 Memories
function startMemories() {
  playMusic("memories");
  questionContainer.classList.add("hidden");
  memoryContainer.classList.remove("hidden");
  showMemory();
}

function showMemory() {
  const mem = memories[currentMemory];
  memoryImage.src = mem.src;
  memoryCaption.innerText = mem.caption;
}

function nextMemory() {
  currentMemory++;
  if (currentMemory < memories.length) {
    showMemory();
  } else {
    showFinalPage();
  }
}

// 🎉 Final Page + Secret Code
function showFinalPage() {
  playMusic("final");
  memoryContainer.classList.add("hidden");
  finalPage.classList.remove("hidden");

  // Custom logic: you define combinations that produce a final number
  const code = calculateSecretCode(selectedCodes);
  surpriseCode.innerText = "Your Surprise Number: " + code;
}

// 🔐 Custom Code System
function calculateSecretCode(codes) {
  // EXAMPLE logic — change this how you like
  // E.g., sum of all selected codes
  const sum = codes.reduce((a, b) => a + b, 0);

  // OR you can define specific combinations like:
  /*
  if (codes[0] === 2 && codes[1] === 6) return 7;
  if (codes[0] === 3 && codes[1] === 4) return 5;
  */

  return sum; // simple fallback
}
