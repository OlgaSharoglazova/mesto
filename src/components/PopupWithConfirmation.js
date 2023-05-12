import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    
    this._popupForm = this._popupElement.querySelector('.form');
  }

  setSubmitAction(action) {
    this._handleFormConfirm = action;

  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormConfirm();
    })
    super.setEventListeners();
  }
}  