let profileButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__container")
let nameInput = formElement.querySelector(".popup__input_type_name");
let jobInput = formElement.querySelector(".popup__input_type_job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__profession");

profileButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

popupClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value; 
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 