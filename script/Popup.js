export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open = () => {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', _handleEscClose);
    
  }

  close = () => {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', _handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close(); 
    }
  }

  setEventListeners = () => {
    console.log(this._popupElement);
    this._popupCloseButton = this._popupElement.querySelector('.popup__close');
    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    })
    this._popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    })
  }
}