const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupImg = document.querySelector('.popup-img');

const buttonAdd = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');

const popupEditClose = popupEdit.querySelector('.popup-edit__close');
const popupAddClose = popupAdd.querySelector('.popup-add__close');
const popupImgClose = popupImg.querySelector('.popup-img__close');

const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input-name');
const jobInput = popupForm.querySelector('.popup__input-job');

const formAddCard = document.querySelector('.popup-add__form');
const titleCardInput = formAddCard.querySelector('.popup__input-title');
const linkCardInput = formAddCard.querySelector('.popup__input-link');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const cardElements = document.querySelector('.elements');
const elementTitle = document.querySelector('.element__title');
const elementImg = document.querySelector('.element__image');

const buttonSave = document.querySelector('.popup-edit__button');
const buttonAddCard = document.querySelector('.popup-add__button');

const popupOverlayList = document.querySelectorAll('.popup');


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


//закрытие попапа по клику на оверлей 
popupOverlayList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  })
})


//закрытие попапа на Esc
popupOverlayList.forEach((popup) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup); 
    }
  });
})


//сохранение данных о пользователе
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}
buttonSave.addEventListener('click', handleFormSubmit);


//добавление карточек из массива
function createCard({link, name}) {
  const cardTemplate = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardTitle = cardTemplate.querySelector('.element__title');
  const cardImage = cardTemplate.querySelector('.element__image');
  const popupImage = document.querySelector('.popup-img__photo');
  const popupImgTitle = document.querySelector('.popup-img__title');

  cardImage.addEventListener('click', function() {
    popupImage.setAttribute('src', link);
    popupImgTitle.textContent = name;
    openPopup(popupImg);
  });

  const buttonLike = cardTemplate.querySelector('.element__heart');
  buttonLike.addEventListener('click', likeActive);

  const deleteButton = cardTemplate.querySelector('.element__basket');
  deleteButton.addEventListener('click', deleteCard);

  cardTitle.textContent = name;
  cardImage.setAttribute('src', link);
  cardImage.setAttribute('alt', name);
  return cardTemplate;
}

// вставляем из массива в DOM
function renderCard(item) {
  const card = createCard(item);
  cardElements.prepend(card);
}

initialCards.forEach(renderCard);

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


//добавление карточки пользователем
formAddCard.addEventListener('submit', addCard);

function addCard (evt) {
  evt.preventDefault();
  const formAddCard = evt.target;
  renderCard(data = {name: titleCardInput.value, link: linkCardInput.value});
  closePopup(popupAdd);
  formAddCard.reset();
}


//валидация

//const obj = {
  //formSelector: '.form',
  //inputSelector: '.input',
 // submitButtonSelector: '.popup__button',
  //inactiveButtonClass: 'popup__button_inactive',
  //inputErrorClass: 'popup__input_error',
  //errorClass: 'popup__input-error_visible'
//}

//const form = document.querySelector('.form');
//const formInput = form.querySelector('.input');
//const formError = form.querySelector(`.${formInput.id}-error`);
//console.log(formError);
//console.log(formInput);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
  console.log(errorMessage);
  errorElement.classList.add('popup__input-error_active');
  
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
  
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    console.log('yi');
    showInputError(formElement, inputElement, inputElement.validationMessage); 
    console.log(inputElement.validationMessage);
 } else {
    hideInputError(formElement, inputElement);
 } 
};

//form.addEventListener('submit', function (evt) {
 // evt.preventDefault();
//});

//formInput.addEventListener('input', function () {
  ///checkInputValidity(form, formInput);
//});
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('popup__button_inactive');
} else {
  buttonElement.classList.remove('popup__button_inactive');
} 
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.input'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  });
}); 
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    setEventListeners(formElement);
}); 
}

enableValidation();




