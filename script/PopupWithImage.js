import { Popup } from "./Popup.js";
// const popupImage = document.querySelector('.popup__photo');
// const popupImgTitle = document.querySelector('.popup__caption');

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._popupImage = document.querySelector('.popup__photo');
    this._popupImgTitle = document.querySelector('.popup__caption');
  }

  open = () => {
    super.open();
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    this._popupImgTitle.textContent = this._name;
  }

}