import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
import {
  config,
  buttonAdd,
  profileButton,
  avatarButton,
  popupForm,
  nameInput,
  jobInput,
  formAddCard,
  buttonPopupAvatar,
  buttonPopupEdit,
  buttonPopupAdd,
  formPopupAvatar
} from '../utils/constants';

let userId;

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([res, cardList]) => {
    userInfo.setUserInfo({ userName: res.name, userInfo: res.about })
    userInfo.setAvatar(res.avatar)
    userId = res._id
    cardList.forEach(data => {
      const newCard = createCard(data);
      section.setItem(newCard);
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
  buttonPopupAdd.textContent = 'Создание...';
  api.addCard(data)
    .then((data) => {
      const newCard = createCard(data);
      section.addItem(newCard);
      popupAdd.close();
    })
    .catch((err) => {
      console.log(err); 
    })
    .finally(() => {
      buttonPopupAdd.textContent = 'Создать';
    })
  }
});
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm({ 
  popupSelector: '.popup-edit',
  handleFormSubmit: (data) => {
    buttonPopupEdit.textContent = 'Сохранение...';
    api.editProfile(data.user, data.job)
      .then(() => {
        userInfo.setUserInfo({ userName: data.user, 
          userInfo: data.job });
        popupEdit.close();
      })
      .catch((err) => {
        console.log(err); 
      })
      .finally(() => {
        buttonPopupEdit.textContent = 'Сохранить';
      })
  }
});
popupEdit.setEventListeners();

const popupAvatar = new PopupWithForm({ 
  popupSelector: '.popup-avatar', 
  handleFormSubmit: (data) => {
    buttonPopupAvatar.textContent = 'Сохранение...';
    api.changeAvatar(data)
    .then((res) => {
      userInfo.setAvatar(res.avatar)
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err); 
    })
    .finally(() => {
      buttonPopupAvatar.textContent = 'Сохранить';
    })
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

const avatarValidator = new FormValidator(config, formPopupAvatar);
avatarValidator.enableValidation();








