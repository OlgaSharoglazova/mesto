const items = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupImg = document.querySelector('.popup-img');
const popupImage = popupImg.querySelector('.popup-img__photo');
const popupImgTitle = popupImg.querySelector('.popup-img__title');

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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

  _openCardClick() {
    popupImage.src = this._link;
    popupImgTitle.textContent = this._name;
    popupImg.classList.add('popup_opened');
  }

  _setEventListener() {
      this._buttonLike.addEventListener('click', () => {
        this._handleCardLike();
      });

      this._buttonDelete.addEventListener('click', () => {
        this._handleDelete();
      });

      this._cardImage.addEventListener('click', () => {
        this._openCardClick();
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
  }
}

items.forEach((item) => {
  const card = new Card(item, '#cardTemplate');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});