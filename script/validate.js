// //валидация
// //конфигурация
// const config = {
//   formSelector: '.form',
//   inputSelector: '.input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_inactive',
//   inputErrorClass: 'popup__input_error',
//   errorClass: 'popup__input-error_active'
// };
// //показать спан с ошибкой
// const showInputError = (formElement, inputElement, errorMessage, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(config.errorClass);
// };
// //скрыть спан с ошибкой
// const hideInputError = (formElement, inputElement, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.classList.remove(config.errorClass);
//   errorElement.textContent = '';
// };
// // показываем или скрываем ошибку
// const checkInputValidity = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, config); 
//  } else {
//     hideInputError(formElement, inputElement, config);
//  } 
// };
// //проверка инпута на валидность
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//   return !inputElement.validity.valid;
// }); 
// }
// //неактивная кнопка
// const disableButton = (buttonElement, config) => {
//   buttonElement.classList.add(config.inactiveButtonClass);
//   buttonElement.disabled = true;
// }
// //активная кнопка
// const enableButton = (buttonElement, config) => {
//   buttonElement.classList.remove(config.inactiveButtonClass);
//   buttonElement.disabled = false;
// }
// //проверяем, какая должна быть кнопка
// const toggleButtonState = (inputList, buttonElement, config) => {
//   if (hasInvalidInput(inputList, config)) {
//     disableButton(buttonElement, config);
// } else {
//     enableButton(buttonElement, config);
// } 
// }
// //навешиваем слушатели на инпуты, кнопки
// const setEventListeners = (formElement, config) => {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, config);
//   formElement.addEventListener('reset', () => {
//     disableButton(buttonElement, config);
//   });
//   inputList.forEach((inputElement) => {
//   inputElement.addEventListener('input', function () {
//     checkInputValidity(formElement, inputElement, config);
//     toggleButtonState(inputList, buttonElement, config);
//   });
// }); 
// }
// //навешиваем слушатель на формы
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, config);
// }); 
// }
// //вызываем проверку форм
// enableValidation(config);

