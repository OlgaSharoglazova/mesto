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
console.log(popupOverlayList);

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

//закрытие попапа по клику на оверлей доработать
popupOverlayList.forEach((p) => {
  p.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('container')) {
      closePopup(popUp);
    }
  })
})

//закрытие попапа на Esc
popupOverlayList.forEach((p) => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup(p); 
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

//показать ошибку инпута
const showInputError = (errorTextElement, validationMessage, activeErrorClass) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
}

//скрыть ошибку
const hideInputError = (errorTextElement, activeErrorClass) => {
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = '';
}
//кнопка недоступна
const disableButton = (submitButton, validSubmitButtonClass) => {
  submitButton.classList.add(validSubmitButtonClass);
  submitButton.disabled = true;
}
//кнопка доступна
const enableButton = (submitButton, validSubmitButtonClass) => {
  submitButton.classList.remove(validSubmitButtonClass);
  submitButton.disabled = false;
}
//проверка инпутов на валидность
const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
  const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);
  console.log(errorTextElement);
  if(!input.validity.valid) {
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  } else {
    hideInputError(errorTextElement);
  }
}

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
}
//кнопка меняет цвет
const toggleButtonState = (submitButton, validSubmitButtonClass, inputList) => {
  if(!hasInvalidInput(inputList)) {
    enableButton(submitButton, validSubmitButtonClass);
  } else {
    disableButton(submitButton, validSubmitButtonClass);
  }
}

//навешиваем слушатели
const setEventListeners = (formList, inputList, errorClassTemplate, activeErrorClass, submitButton, validSubmitButtonClass) => {
  formList.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  });
  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input, errorClassTemplate, activeErrorClass);
      toggleButtonState(submitButton, validSubmitButtonClass, inputList);
    });
  });
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  const inputList = document.querySelectorAll(config.inputSelector);
  const submitButton = document.querySelector(config.submitButtonSelector);
  setEventListeners(formList, inputList, config.errorClassTemplate, config.activeErrorClass, submitButton, config.validSubmitButtonClass);
}


enableValidation({
  formSelector: '.form',
  inputSelector: '.input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error',
  submitButtonSelector: '.popup__button',
  validSubmitButtonClass: '.popup__button_inactive'
});



