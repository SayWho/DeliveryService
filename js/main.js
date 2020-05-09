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
const loginForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const cardsRestaurant = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo')

let login = localStorage.getItem('person');

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}


function auth() { 
 
    function logOut() {
    login = null;
    localStorage.removeItem('person');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';   
    buttonOut.removeEventListener('click', logOut);
    checkAuth(); 

  }

  console.log('Авторизован');

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut)

}



function notAuth() {
  console.log('не авторизован');
  
  
  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;
     
    localStorage.setItem('person', login);

    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();
    
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);

}

function checkAuth() {
  if (login) {
    auth();
  } else {
    notAuth();
  }
}

checkAuth();

function createCardRestaurant () {

  const card = `
    <a class="card card-restaurant">
      <img src="img/tanuki/preview.jpg" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">Тануки</h3>
          <span class="card-tag tag">60 мин</span>
        </div>
        <div class="card-info">
          <div class="rating">
            4.5
          </div>
          <div class="price">От 1 200 ₽</div>
          <div class="category">Суши, роллы</div>
        </div>
      </div>
    </a>
  `;
  
  
 cardsRestaurant.insertAdjacentHTML('beforeend', card);

}

createCardRestaurant();
createCardRestaurant();
createCardRestaurant();


function openGoods(event) {

  const target = event.target;

  const restaurant = target.closest('.card-restaurant');

  if(restaurant) {
    containerPromo.classList.add('hide')
    restaurants.classList.add('hide')
    menu.classList.remove('hide')

  }


}

cardsRestaurant.addEventListener('click', openGoods);
logo.addEventListener('click', function(){
  containerPromo.classList.remove('hide')
  restaurants.classList.remove('hide')
  menu.classList.add('hide')
})

