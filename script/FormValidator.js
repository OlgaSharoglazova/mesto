const config = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

export class FormValidator {
  constructor(config, formElement) {
    this._form = formElement;
    this._config = config;
  }
  
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };
  
  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage); 
   } else {
      this._hideInputError(inputElement);
   } 
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }

  _disableButton = (buttonElement) => {
    buttonElement.classList.add(this._config.inactiveButtonClass);
    buttonElement.disabled = true;
  }
  _enableButton = (buttonElement) => {
    buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
  
  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement);
  } else {
      this._enableButton(buttonElement);
  } 
  }

  _setEventListeners = () => {
    const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    const buttonElement = this._form.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    this._form.addEventListener('reset', () => {
      this._disableButton(buttonElement);
    });
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      this._checkInputValidity(inputElement);
      this._toggleButtonState(inputList, buttonElement);
    });
  }); 
  }

  enableValidation = () => {
    console.log(this._form);
    const formList = Array.from(document.querySelectorAll(this._config.formSelector));
    formList.forEach(() => {
      this._setEventListeners();
  }); 
  }
}

