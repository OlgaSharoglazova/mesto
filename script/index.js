import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { items } from './cards.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';




const popupAdd = new PopupWithForm('.popup-add');
popupAdd.setEventListeners();


const popupImg = new PopupWithImage('.popup-img');
popupImg.setEventListeners();



const buttonAdd = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');

const popupForm = document.querySelector('.form-edit');
const nameInput = popupForm.querySelector('.popup__input-name');
const jobInput = popupForm.querySelector('.popup__input-job');

const formAddCard = document.querySelector('.form-add');
const titleCardInput = formAddCard.querySelector('.popup__input-title');
const linkCardInput = formAddCard.querySelector('.popup__input-link');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const buttonSave = document.querySelector('.popup-edit__button');

const popupOverlayList = document.querySelectorAll('.popup');

const popupImage = document.querySelector('.popup__photo');
const popupImgTitle = document.querySelector('.popup__caption');



const config = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};


const userInfo = new UserInfo();
  const popupEdit = new PopupWithForm('.popup-edit', handleFormSubmit = (data) => {
    userInfo.setUserInfo(data);
  });
popupEdit.setEventListeners();

// profileButton.addEventListener('click', function() {
//   openPopup(popupEdit);
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// });

// buttonAdd.addEventListener('click', function() {
//   openPopup(popupAdd);
// });

// //сохранение данных о пользователе
// function handleFormSubmit (evt) {
//     evt.preventDefault(); 
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     closePopup(popupEdit);
// }
// buttonSave.addEventListener('click', handleFormSubmit);

formAddCard.addEventListener('submit', addCard);
//добавляем карточку пользователя
function addCard (evt) {
  evt.preventDefault();
  const formAddCard = evt.target;
  renderCard({name: titleCardInput.value, link: linkCardInput.value});
  popupAdd.close();
  formAddCard.reset();
}

// вставляем новую карточку в DOM
function renderCard(cardData) {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
 }

//функция создания карточки
 const createCard = (data) => {
  const card = new Card({data: data, 
   handleCardClick: (data) => {
    popupImg.open(data);
   }
  }, 
  '#cardTemplate'
  );
  return card.generateCard(); 
}


const section = new Section({items: items,
  renderer: (item) => {
    const cardElement = createCard(item);
    section.addItem(cardElement);
  }
},
'.elements'
);
section.renderItems();


//валидация
const addValidator = new FormValidator(config, popupForm);
addValidator.enableValidation();

const editValidator = new FormValidator(config, formAddCard);
editValidator.enableValidation();






