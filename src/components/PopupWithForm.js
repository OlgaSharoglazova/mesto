import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector('.form');
    this._inputList = this._popupElement.querySelectorAll('.input');
    this._submitButton = this._popupForm.querySelector('.popup__button');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  };
  
  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
  
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      })
    
    super.setEventListeners();
  }

}