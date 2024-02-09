var questions = [
    {
      question: "Apa ibukota Indonesia?",
      answer: "Jakarta"
    },
    {
      question: "Apa nama benua terbesar di dunia?",
      answer: "Asia"
    },
    // tambahkan soal dan jawaban yang benar untuk setiap pertanyaan di sini
    {
      "question": "Berapakah jumlah planet dalam tata surya?",
      "answer": "8"
    },
    {
      "question": "Siapakah penemu lampu pijar?",
      "answer": "Thomas Edison"
    },
    {
      "question": "Apa warna bendera Indonesia?",
      "answer": "Merah Putih"
    },
    {
      "question": "Berapa jumlah hari dalam seminggu?",
      "answer": "7"
    },
    {
      "question": "Siapakah presiden pertama Indonesia?",
      "answer": "Soekarno"
    },
    {
      "question": "Berapa jumlah bulan dalam setahun?",
      "answer": "12"
    },
    {
      "question": "Apa nama binatang yang memiliki belalai panjang?",
      "answer": "Gajah"
    },
    {
      "question": "Berapa jumlah kaki yang dimiliki seekor kucing?",
      "answer": "4"
    },
    {
      "question": "Siapakah penulis dongeng 'Si Kancil'?",
      "answer": "Raden Panji"
    },
    {
      "question": "Apa nama huruf pertama dalam abjad?",
      "answer": "A"
    }
  ];
  
  function createCard(question, index) {
    var cardContainer = document.getElementById('cards-container');
  
    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('onclick', 'flipCard(this, ' + index + ')');
  
    var cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
  
    var cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.textContent = 'Pertanyaan:';
    var questionText = document.createElement('p');
    questionText.textContent = question.question;
    cardFront.appendChild(questionText);
  
    var cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    var form = document.createElement('form');
    form.setAttribute('onsubmit', 'checkAnswer(event, ' + index + ')');
    var label = document.createElement('label');
    label.setAttribute('for', 'answer-' + index);
    label.textContent = 'Jawaban:';
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'answer-' + index);
    input.setAttribute('required', 'true');
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submitButton);
    cardBack.appendChild(form);
  
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
  
    card.appendChild(cardInner);
    cardContainer.appendChild(card);
  }
  
  function flipCard(card, index) {
    card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
  }
  
  function checkAnswer(event, questionIndex) {
    event.preventDefault();
    var answer = document.getElementById('answer-' + questionIndex).value.toLowerCase();
    var correctAnswer = questions[questionIndex].answer.toLowerCase();
  
    if (answer === correctAnswer) {
      showModal('Benar!');
    } else {
      showModal('Salah!');
    }
  }
  
  function showModal(text) {
    var modal = document.getElementById('modal');
    var modalText = document.getElementById('modal-text');
    modalText.textContent = text;
    modal.style.display = 'block';
  }
  
  function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  // Membuat card untuk setiap pertanyaan
  questions.forEach(function(question, index) {
    createCard(question, index);
  });
  