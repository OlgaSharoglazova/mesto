import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleFormConfirm }) {
    super(popupSelector);
    this.handleFormConfirm = handleFormConfirm;
    this._popupForm = this._popupElement.querySelector('.form');
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleFormConfirm();
    })
    super.setEventListeners();
  }
}  