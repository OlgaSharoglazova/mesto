const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupImg = document.querySelector('.popup-img');

const buttonAdd = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');


const popupEditClose = popupEdit.querySelector('.popup-edit__close');
const popupAddClose = popupAdd.querySelector('.popup-add__close');
const popupImgClose = popupImg.querySelector('.popup-img__close');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input-name');
const jobInput = formElement.querySelector('.popup__input-job');



const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const elementTitle = document.querySelector('.element__title');
const elementImg = document.querySelector('.element__image');

const buttonSave = document.querySelector('.popup__button');
const buttonAddCard = document.querySelector('.popup-add__button');


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


//функция закрытия попапов
function closePopup(popUp) {
  popUp.classList.remove('popup_opened');
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

//сохранение данных о пользователе
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}
buttonSave.addEventListener('click', handleFormSubmit);


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

//добавление карточек из массива
const cardElements = document.querySelector('.elements');

function createCard(card) {
  const cardTemplate = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardTitle = cardTemplate.querySelector('.element__title');
  const cardImage = cardTemplate.querySelector('.element__image');
  const popupImage = document.querySelector('.popup-img__photo');
  const popupImgTitle = document.querySelector('.popup-img__title');

  cardImage.addEventListener('click', function(link, name) {
    popupImage.setAttribute('src', card.link);
    popupImgTitle.textContent = card.name;
    openPopup(popupImg);
  });

  const buttonLike = cardTemplate.querySelector('.element__heart');
  buttonLike.addEventListener('click', likeActive);

  
  const deleteButton = cardTemplate.querySelector('.element__basket');
  deleteButton.addEventListener('click', deleteCard);

  cardTitle.textContent = card.name;
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  cardElements.append(cardTemplate);
}

initialCards.forEach(createCard);


//лайк
function likeActive(evt) {
  evt.target.classList.toggle('element__heart_active');
}


//корзина
function deleteCard(evt) {
const deleteButton = evt.target;
const element = deleteButton.closest('.element');
element.remove();
}


//добавление карточки
const formAddCard = document.querySelector('.popup-add__form');

formAddCard.addEventListener('submit', addCard);

function addCard (evt) {
  evt.preventDefault();
  const formAddCard = evt.target;
  const name = formAddCard.querySelector('.popup__input-title').value;
  const link = formAddCard.querySelector('.popup__input-link').value;
  const newCard = {name, link};
  createCard(newCard);
  closePopup(popupAdd);
  formAddCard.reset();
}

