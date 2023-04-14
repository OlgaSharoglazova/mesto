
export class FormValidator {
  constructor(config, formElement) {
    this._form = formElement;
    this._config = config;
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
  }
  
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };
  
  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
   } else {
      this._hideInputError(inputElement);
   } 
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }

  _disableButton = () => {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  _enableButton = () => {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
  
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableButton();
  } else {
      this._enableButton();
  } 
  }

  _setEventListeners = () => {
    this._toggleButtonState();
    this._form.addEventListener('reset', () => {
      this._disableButton();
    });
    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
      
    });
  }); 
  }

  enableValidation = () => {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    })
    this._setEventListeners();
  }
}

