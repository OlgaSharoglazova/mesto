import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__photo');
    this._popupImgTitle = this._popupElement.querySelector('.popup__caption');
  }

  open(data) {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupImgTitle.textContent = data.name;

    super.open()
  }

}