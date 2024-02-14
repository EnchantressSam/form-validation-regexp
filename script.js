let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");


function validateName() {
  let name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Заполните поле";
    return false;
  }
  // if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
  if (!name.match(/^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/)) {
    nameError.innerHTML = "Введите имя и фамилию";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Укажите телефон";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Укажите телефон, просто 10 цифр";
    return false;
  }
  // if(!phone.match(/^[0-9]{10}$/)){
  if (!phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) {
    phoneError.innerHTML = "Только цифры";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Добавьте почту";
    return false;
  }

  if (!email.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)) {
    emailError.innerHTML = "Почта некорректна";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30
  let left = required - message.length
  if (left > 0) {
    messageError.innerHTML = left + " Опишите проблему развернуто";
    return false;
  }


  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm(){
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = "block"
    
  submitError.innerHTML = "Форма заполнена некорректно";
  setTimeout(function(){submitError.style.display = "none"}, 4000)
  return false;
  }

  submitError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}