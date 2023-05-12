
export class Card {
  constructor({data, handleCardClick}, templateSelector) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#cardTemplate')
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }

  _handleCardLike = () => {
    this._buttonLike.classList.toggle('element__heart_active');
  }

  _handleDelete = () => {
    this._element.remove();
    this._element = null;
  }

  _setLikes() {
     const likeCounter = this._element.querySelector('.element__counter');
    likeCounter.textContent = this._likes.length;
  }

  _setEventListener = () => {
    this._buttonLike.addEventListener('click', () => {
      this._handleCardLike();
    });

    this._buttonDelete.addEventListener('click', () => {
      this._handleDelete();
    });

    this._cardImage.addEventListener('click', () => {
      this.handleCardClick({name: this._name, link: this._link});  
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
    this._setLikes();
    return this._element;
  }
}



