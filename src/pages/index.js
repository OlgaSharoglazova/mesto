import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { items } from '../utils/cards.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api';

api.getProfile()
.then(res => {
  userInfo.setUserInfo({ userName: res.name, userInfo: res.about })
})

api.getInitialCards()
.then(cardList => {
  cardList.forEach(data => {
    section.addItem
  })
})


const buttonAdd = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.form-edit');
const nameInput = popupForm.querySelector('.popup__input-name');
const jobInput = popupForm.querySelector('.popup__input-job');
const formAddCard = document.querySelector('.form-add');

const config = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

const userInfo = new UserInfo({ userNameSelector: '.profile__name',
userInfoSelector: '.profile__profession' });

const popupImg = new PopupWithImage('.popup-img');
popupImg.setEventListeners();

const popupAdd = new PopupWithForm({ popupSelector: '.popup-add', 
handleFormSubmit: (data) => {
  const cardElement = createCard(data);
  section.addItem(cardElement);
  popupAdd.close();
  }
});
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm({ 
  popupSelector: '.popup-edit',
  handleFormSubmit: (data) => {
  userInfo.setUserInfo({ userName: data.user, 
    userInfo: data.job });
    popupEdit.close();
  }
});
popupEdit.setEventListeners();

buttonAdd.addEventListener('click', () => {
  popupAdd.open();
});

profileButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  nameInput.value = info.userName;
  jobInput.value = info.userInfo;
  popupEdit.open();
});

formAddCard.addEventListener('submit', addCard);
//добавляем карточку пользователя
function addCard (evt) {
  evt.preventDefault();
  const formAddCard = evt.target;
  popupAdd.close();
  formAddCard.reset();
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






