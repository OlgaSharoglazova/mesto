
const popup = document.querySelectorAll('.popup');
const popupClose = document.querySelectorAll('.popup__close');
console.log(popup);

const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupImg = document.querySelector('.popup-img');

const buttonAdd = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');
const popupImgOpen = document.querySelector('.element__image');

const popupEditClose = popupEdit.querySelector('.popup-edit__close');
const popupAddClose = popupAdd.querySelector('.popup-add__close');
const popupImgClose = popupImg.querySelector('.popup-img__close');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');

const formAddCard = document.querySelector('.popup-add__form');
const inputTitle = formAddCard.querySelector('.popup__input_type_title');
const inputLink = formAddCard.querySelector('.popup__input_type_link');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const elementTitle = document.querySelector('.element__title');
const elementImg = document.querySelector('.element__image');

const buttonSave = document.querySelector('.popup__button');
const buttonAddCard = document.querySelector('.popup-add__button');

const cardElement = document.querySelector('.element');

// функция открытия попапов
function openPopup(pop) {
  pop.classList.add('popup_opened');
}

profileButton.addEventListener('click', function() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

buttonAdd.addEventListener('click', function() {
  openPopup(popupAdd);
});

popupImgOpen.addEventListener('click', function() {
  openPopup(popupImg);
});


//функция закрытия попапов
function closePopup(pop) {
  pop.classList.remove('popup_opened');
}

popupEditClose.addEventListener('click', function() {
  closePopup(popupEdit);
});

popupAddClose.addEventListener('click', function() {
  closePopup(popupAdd);
});

popupImgClose.addEventListener('click', function() {
  closePopup(popupImg);
});

//сохранение данных
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}
buttonSave.addEventListener('click', handleFormSubmit);

//лайк
cardElement.querySelector('.element__heart').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__heart_active');
});

//карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//сохранение карточки
function handleCardSubmit (evt) {
  evt.preventDefault(); 
  elementTitle.textContent = inputTitle.value;
  elementImg.setAttribute('src') = inputLink.value;//не работает
  closePopup(popupAdd);
}
buttonAddCard.addEventListener('click', handleCardSubmit);