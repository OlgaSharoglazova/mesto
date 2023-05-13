import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';

const buttonAdd = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');
const avatarButton = document.querySelector('.profile__avatar');
const popupForm = document.querySelector('.form-edit');
const nameInput = popupForm.querySelector('.popup__input-name');
const jobInput = popupForm.querySelector('.popup__input-job');
const formAddCard = document.querySelector('.form-add');
const buttonPopupAvatar = document.querySelector('.popup-avatar__button');
const buttonPopupEdit = document.querySelector('.popup-edit__button');
const buttonPopupAdd = document.querySelector('.popup-add__button');

const config = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

let userId;

api.getProfile()
  .then(res => {
    userInfo.setUserInfo({ userName: res.name, userInfo: res.about })
    userInfo.setAvatar(res.avatar)
    userId = res._id
  })
  .catch((err) => {
    console.log(err); 
  }); 

api.getInitialCards()
  .then(cardList => {
    cardList.forEach(data => {
      const newCard = createCard(data);
      section.addItem(newCard);
    })
  })
  .catch((err) => {
    console.log(err); 
  }); 

const userInfo = new UserInfo({ userNameSelector: '.profile__name',
userInfoSelector: '.profile__profession', userAvatarSelector: '.profile__avatar-img' });

const popupImg = new PopupWithImage('.popup-img');
popupImg.setEventListeners();

const createCard = (data) => {
  const card = new Card({data: data, 
   userId: userId,
   handleCardClick: (data) => {
    popupImg.open(data);
   },
   handleDeleteClick: (id) => {
    popupConfirm.open();
    popupConfirm.setSubmitAction(() => {
      api.deleteCard(id)
      .then(() => {
        card.deleteCard();
        popupConfirm.close();
      })
      .catch((err) => {
        console.log(err); 
      }); 
    });
   },
   handleLikeClick: (id) => {
    if(card.isLiked(id)) {
      api.deleteLike(id)
      .then(res => {
        card.setLikes(res.likes)
      })
      .catch((err) => {
        console.log(err); 
      }); 
    } else {
      api.addLike(id)
      .then(res => {
        card.setLikes(res.likes)
      })
      .catch((err) => {
        console.log(err); 
      }); 
    }
  }
 }, 
  '#cardTemplate'
  );
  return card.generateCard(); 
}

const popupConfirm = new PopupWithConfirmation({ popupSelector: '.popup-confirm' });
popupConfirm.setEventListeners();

const popupAdd = new PopupWithForm({ popupSelector: '.popup-add', 
handleFormSubmit: (data) => {
  api.addCard(data)
    .then((data) => {
      const newCard = createCard(data);
      section.addItem(newCard);
    })
    .catch((err) => {
      console.log(err); 
    })
    buttonPopupAdd.textContent = 'Создание...'
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
      .catch((err) => {
        console.log(err); 
      })
    buttonPopupEdit.textContent = 'Сохранение...'
    popupEdit.close();
  }
});
popupEdit.setEventListeners();

const popupAvatar = new PopupWithForm({ 
  popupSelector: '.popup-avatar', 
  handleFormSubmit: (data) => {
    api.changeAvatar(data)
    .then((res) => {
      userInfo.setAvatar(res.avatar)
    })
    .catch((err) => {
      console.log(err); 
    })
    buttonPopupAvatar.textContent = 'Сохранение...'
    popupAvatar.close();
  }
})
popupAvatar.setEventListeners();

avatarButton.addEventListener('click', () => {
  popupAvatar.open();
})

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

const addValidator = new FormValidator(config, popupForm);
addValidator.enableValidation();

const editValidator = new FormValidator(config, formAddCard);
editValidator.enableValidation();









