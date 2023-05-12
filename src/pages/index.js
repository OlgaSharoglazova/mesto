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
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';

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

api.getProfile()
  .then(res => {
    userInfo.setUserInfo({ userName: res.name, userInfo: res.about })
  })

api.getInitialCards()
  .then(cardList => {
    cardList.forEach(data => {
      const newCard = createCard(data);
      section.addItem(newCard);
    })
  })

const userInfo = new UserInfo({ userNameSelector: '.profile__name',
userInfoSelector: '.profile__profession' });

const popupImg = new PopupWithImage('.popup-img');
popupImg.setEventListeners();

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

const popupAdd = new PopupWithForm({ popupSelector: '.popup-add', 
handleFormSubmit: (data) => {
  api.addCard(data)
    .then((data) => {
      const newCard = createCard(data);
      section.addItem(newCard);
    })
    popupAdd.close();
  }
});
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm({ 
  popupSelector: '.popup-edit',
  handleFormSubmit: (data) => {
    api.editProfile(data.user, data.job)
      .then(() => {
        userInfo.setUserInfo({ userName: data.user, 
          userInfo: data.job });
      })
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

const section = new Section({items: [],
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
// const section = new Section({items: items,
//   renderer: (item) => {
//     const cardElement = createCard(item);
//     section.addItem(cardElement);
//   }
// },
// '.elements'
// );









