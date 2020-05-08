const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.getElementById('loginInForm');

let login = '';



// modalAuth.classList.add('hello')
// modalAuth.classList.contains('hello')
// modalAuth.classList.remove('modal-auth')

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}


function auth() {
  console.log('Авторизован');

}



function notAuth() {
  console.log('не авторизован');
  
  
  function logIn() {
    console.log('Логин');
    
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  loginForm.addEventListener('submit', logIn)

}

if (login) {
    auth();
} else {
  notAuth();
}
