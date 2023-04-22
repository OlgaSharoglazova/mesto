import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector('.form');
    this._inputList = this._popupElement.querySelectorAll('.input');
  }

  _getInputValues = () => {
    this._formValues = {};
    this._inputList.forEach(input => {
      const value = input.value;
      const name = input.name;
      this._formValues[name] = value;
    }
      );
      return this._formValues;
  };
  
  setEventListeners = () => {
    super.setEventListeners;
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  }

  close = () => {
    super.close();
    this._popupForm.reset();
  }

}