

//показать ошибку инпута
const showInputError = (errorTextElement, validationMessage, config) => {
  errorTextElement.textContent = validationMessage;
  console.log(errorTextElement);
  errorTextElement.classList.add(config.activeErrorClass);
}

//скрыть ошибку
const hideInputError = (errorTextElement, config) => {
  errorTextElement.classList.remove(config.activeErrorClass);
  errorTextElement.textContent = '';
}
//кнопка недоступна
const disableButton = (submitButton, config) => {
  submitButton.classList.add(config.invalidSubmitButtonClass);
  submitButton.disabled = true;
}
//кнопка доступна
const enableButton = (submitButton, config) => {
  submitButton.classList.remove(config.invalidSubmitButtonClass);
  submitButton.disabled = false;
}
//проверка инпутов на валидность
const checkInputValidity = (inputElement, config, activeErrorClass) => {
  const errorTextElement = document.querySelector(`${config.errorClassTemplate}${inputElement.name}`);
  if(!inputElement.validity.valid) {
    console.log(inputElement.validity);
    showInputError(errorTextElement, inputElement.validationMessage, activeErrorClass);
  } else {
    console.log(errorTextElement);
    hideInputError(errorTextElement);
  }
}

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((inputElement) => !inputElement.validity.valid);
}
//кнопка меняет состояние
const toggleButtonState = (submitButton, inputList) => {
  console.log(submitButton);
  if(!hasInvalidInput(inputList)) {
    enableButton(submitButton);
  } else {
   disableButton(submitButton);
  }
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  console.log(inputList);
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  console.log(submitButton);
  inputList.forEach((inputElement) => {
    console.log(inputElement);
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButton, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      setEventListeners(formElement, config);
    });
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error',
  submitButtonSelector: '.popup__button',
  invalidSubmitButtonClass: 'popup__button_inactive'
});

//запретить форме сабмититься, наложение обработчиков
//const setEventListeners = (formList, inputList, errorClassTemplate, activeErrorClass, invalidSubmitButtonClass, submitButton) => {
  //formList.forEach((form) => {
   // form.addEventListener('submit', (e) => {
    //  e.preventDefault();
    //});
  //});
  //inputList.forEach((input) => {
   // input.addEventListener('input', (e) => {
      //проверка валидности данных
     // checkInputValidity(input, errorClassTemplate, activeErrorClass);
     // toggleButtonState(submitButton, inputList, invalidSubmitButtonClass);
   // });
  //});
//}







// включение валидации вызовом enableValidation
// все настройки передаются при вызове
//const enableValidation = (config) => {
  //const formList = document.querySelectorAll(config.formSelector);
 // formList.forEach(form => setEventListeners(form, config));
 // console.log(formList);
  //const inputList = formList.querySelectorAll(config.inputSelector);
  //const submitButton = formList.querySelector(config.submitButtonSelector);
 // setEventListeners(form, config.errorClassTemplate, config.activeErrorClass, config.invalidSubmitButtonClass, submitButton);
//}


//из тренажера

//enableValidation();

