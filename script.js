const questions = [
  {
    question: "Lengkapilah kalimat berikut dengan kata yang tepat: 'Merah, Kuning, Biru adalah ...'",
    answerOptions: [
      "Warna dasar",
      "Buah-buahan",
      "Hewan",
      "Benua",
    ],
    correctAnswer: "Warna dasar",
  },
  {
    question: "Hewan apa yang memiliki tanduk?",
    answerOptions: [
      "Kucing",
      "Anjing",
      "Sapi",
    ],
    correctAnswer: "Sapi",
  },
  {
    question: "Berapakah hasil dari 5 + 5?",
    answerOptions: [
      7,
      10,
      12,
    ],
    correctAnswer: 10,
  },
  // Add more questions here if needed
  {
    question: "Apa ibukota Indonesia?",
    answerOptions: [
      "Jakarta",
      "Surabaya",
      "Bandung",
      "Semarang",
    ],
    correctAnswer: "Jakarta",
  },
  {
    question: "Siapakah presiden pertama Indonesia?",
    answerOptions: [
      "Soekarno",
      "Soeharto",
      "Megawati",
      "Jokowi",
    ],
    correctAnswer: "Soekarno",
  },
  {
    question: "Apakah nama planet terdekat dari Matahari?",
    answerOptions: [
      "Bumi",
      "Merkurius",
      "Venus",
      "Mars",
    ],
    correctAnswer: "Merkurius",
  },
  {
    question: "Berapakah hasil dari 6 x 8?",
    answerOptions: [
      42,
      48,
      56,
      64,
    ],
    correctAnswer: 48,
  },
  {
    question: "Siapakah penulis novel 'Laskar Pelangi'?",
    answerOptions: [
      "Tere Liye",
      "Andrea Hirata",
      "Dee Lestari",
      "Dewi Lestari",
    ],
    correctAnswer: "Andrea Hirata",
  },
  {
    question: "Apakah huruf ke-6 dalam alfabet?",
    answerOptions: [
      "F",
      "G",
      "H",
      "I",
    ],
    correctAnswer: "F",
  },
  {
    question: "Apa yang menjadi simbol kimia untuk air?",
    answerOptions: [
      "O",
      "H",
      "A",
      "W",
    ],
    correctAnswer: "H",
  },
];

let currentQuestionIndex = 0;
let point = 0;

const container = document.querySelector(".container");
const questionElement = document.getElementById("question");
const answerOptionsElement = document.getElementById("answer-options");
const answerBoxElement = document.getElementById("answer-box");
const answerInputElement = document.getElementById("answer-input");
let checkButtonElement = document.getElementById("check-button");
const modalElement = document.getElementById("modal");
const modalTitleElement = document.getElementById("modal-title");
const modalMessageElement = document.getElementById("modal-message");
const modalCloseButtonElement = document.getElementById("modal-close-button");

// Display the initial question
displayQuestion();

// Function to display question
function displayQuestion() {
  // Display the next question
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  // Clear previous answer options
  answerOptionsElement.innerHTML = '';

  // Create answer options for the next question
  question.answerOptions.forEach((answerOption) => {
    const answerOptionElement = document.createElement("button");
    answerOptionElement.classList.add("answer-option");
    answerOptionElement.textContent = answerOption;
    answerOptionsElement.appendChild(answerOptionElement);

    answerOptionElement.addEventListener("click", () => {
      // Update answer box
      answerInputElement.value = answerOption;

      // Change the color of the selected answer option
      const selectedAnswerElement = answerOptionsElement.querySelector(".selected-answer");
      if (selectedAnswerElement) {
        selectedAnswerElement.classList.remove("selected-answer");
      }
      answerOptionElement.classList.add("selected-answer");
    });
  });
}

// Function to display next question
function displayNextQuestion() {
  // Move to the next question
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showModal("Skor Anda", "Skor Anda: " + point);
  }

  // Reset answer input field
  answerInputElement.value = '';

  // Reset button to "Check"
  checkButtonElement.textContent = 'Check';
  checkButtonElement.removeEventListener("click", displayNextQuestion);
  checkButtonElement.addEventListener("click", checkAnswer);
}

// Function to display modal
function showModal(title, message) {
  modalTitleElement.textContent = title;
  modalMessageElement.textContent = message;
  modalElement.style.display = "block";
}

// Function to hide modal
function hideModal() {
  modalElement.style.display = "none";
}

// Function to check answer
// Function to check answer
function checkAnswer() {
  // Check if the answer is correct
  if (answerInputElement.value === questions[currentQuestionIndex].correctAnswer.toString()) {
    // Show correct answer message
    showModal("Jawaban Anda Benar!", "");
    point += 10;
  } else {
    // Show wrong answer message
    showModal("Jawaban Anda Salah!", "");
  }

  // Change button to "Selanjutnya" regardless of the answer
  checkButtonElement.textContent = 'Selanjutnya';
  checkButtonElement.removeEventListener("click", checkAnswer);
  checkButtonElement.addEventListener("click", displayNextQuestion);

  // If it's the last question, change button text to "Lihat Hasil"
  if (currentQuestionIndex === questions.length - 1) {
    checkButtonElement.textContent = "Lihat Hasil";

    // After "Lihat Hasil" is clicked, disable the check button
    checkButtonElement.removeEventListener("click", displayNextQuestion);
  checkButtonElement.addEventListener("click", showResult);
  }
}

function showResult() {
  showModal("Skor Anda", "Skor Anda: " + point);
}

// Update event listener for check button
checkButtonElement.addEventListener("click", checkAnswer);

// Add event listener to close button
modalCloseButtonElement.addEventListener("click", hideModal);
