import { Card, popupImg } from './Card.js';

const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');

const buttonAdd = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');

const popupEditClose = popupEdit.querySelector('.popup-edit__close');
const popupAddClose = popupAdd.querySelector('.popup-add__close');
const popupImgClose = document.querySelector('.popup-img__close');

const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input-name');
const jobInput = popupForm.querySelector('.popup__input-job');

const formAddCard = document.querySelector('.popup-add__form');
const titleCardInput = formAddCard.querySelector('.popup__input-title');
const linkCardInput = formAddCard.querySelector('.popup__input-link');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const buttonSave = document.querySelector('.popup-edit__button');
const buttonAddCard = document.querySelector('.popup-add__button');

const popupOverlayList = document.querySelectorAll('.popup');

const popupImage = popupImg.querySelector('.popup-img__photo');
const popupImgTitle = popupImg.querySelector('.popup-img__title');


// функция открытия попапов
function openPopup(pop) {
  pop.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  }


profileButton.addEventListener('click', function() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

buttonAdd.addEventListener('click', function() {
  openPopup(popupAdd);
});


//функция закрытия попапов
function closePopup(popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup)); 
});


//закрытие попапа по клику на оверлей 
popupOverlayList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  })
})

//закрытие на Esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}  


//сохранение данных о пользователе
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}
buttonSave.addEventListener('click', handleFormSubmit);



formAddCard.addEventListener('submit', addCard);
//добавляем карточку пользователя
function addCard (evt) {
  evt.preventDefault();
  const formAddCard = evt.target;
  renderCard(data = {name: titleCardInput.value, link: linkCardInput.value});
  closePopup(popupAdd);
  formAddCard.reset();
}

// вставляем в DOM
function renderCard(item) {
  const card = new Card(item, '#cardTemplate', handleCardClick);
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
}

//открытие попапа с картинкой
function handleCardClick(name, link) {
  popupImage.src = link;
  popupImgTitle.textContent = name;
  openPopup(popupImg);
}






