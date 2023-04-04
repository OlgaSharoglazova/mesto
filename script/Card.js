import { items } from './cards.js';
export const popupImg = document.querySelector('.popup-img');

export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#cardTemplate')
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }

  _handleCardLike() {
    this._buttonLike.classList.toggle('element__heart_active');
  }

  _handleDelete() {
    this._element.remove();
  }

  _setEventListener() {
    this._buttonLike.addEventListener('click', () => {
      this._handleCardLike();
    });

    this._buttonDelete.addEventListener('click', () => {
      this._handleDelete();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._buttonLike = this._element.querySelector('.element__heart');
    this._buttonDelete = this._element.querySelector('.element__basket');

    this._setEventListener();
    return this._element;
  }
}

items.forEach((item) => {
  const card = new Card(item, '#cardTemplate', handleCardClick);
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});