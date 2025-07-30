let currentQuestion = 1;
let answers = {};
let memoryIndex = 0;

const memories = [
  { image: "chai.jpg", caption: "Chai wali shaam jo kabhi nahi bhool sakta ☕️" },
  { image: "picnic-memory.jpg", caption: "Hamari picnic wali masti 😄" },
  { image: "batain.jpg", caption: "Wo gehri baatein... sirf hum dono ❤️" },
  { image: "ludo.jpg", caption: "Ludo ki jeet ya haar – fun humesha saath tha 🎲" },
  { image: "final-sister.jpg", caption: "Hamari sabse pyaari memory 💕" }
];

function startExperience() {
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("question1").classList.remove("hidden");
}

function nextQuestion(qNum) {
  const selected = document.querySelector(`input[name="q${qNum}"]:checked`);
  if (selected) {
    answers[`q${qNum}`] = parseInt(selected.value);
    document.getElementById(`question${qNum}`).classList.add("hidden");
    const next = document.getElementById(`question${qNum + 1}`);
    if (next) {
      next.classList.remove("hidden");
    }
  } else {
    alert("Please select an answer ❤️");
  }
}

function showMemories() {
  const selected = document.querySelector(`input[name="q4"]:checked`);
  if (selected) {
    answers["q4"] = parseInt(selected.value);
    hideAllScreens();
    memoryIndex = 0;
    loadMemory();
    document.getElementById("memoryScreen").classList.remove("hidden");
  } else {
    alert("Please select an answer ❤️");
  }
}

function nextMemory() {
  memoryIndex++;
  if (memoryIndex < memories.length) {
    loadMemory();
  } else {
    showFinalPage();
  }
}

function loadMemory() {
  const memory = memories[memoryIndex];
  document.getElementById("memoryImage").src = memory.image;
  document.getElementById("memoryCaption").textContent = memory.caption;
}

function hideAllScreens() {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
}

function calculateFinalCode() {
  // Example: add selected values to generate a number
  let total = 0;
  for (let key in answers) {
    total += answers[key];
  }
  return total;
}

function showFinalPage() {
  hideAllScreens();
  document.getElementById("finalPage").classList.remove("hidden");

  const code = calculateFinalCode();
  document.getElementById("surpriseCode").textContent = "Your Surprise Code: " + code;

  // Start fireworks 🎆
  const container = document.getElementById('fireworks-canvas');
  const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.8,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 65,
    trace: 3,
    explosion: 5,
    intensity: 30,
    lineStyle: 'round',
    hue: { min: 0, max: 360 },
    delay: { min: 15, max: 30 },
    brightness: { min: 50, max: 80 },
    decay: { min: 0.015, max: 0.03 }
  });
  fireworks.start();
}
