(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var r=function(){function e(t,r){var o,i,u,c=this,a=t.data,l=t.userId,s=t.handleCardClick,f=t.handleDeleteClick,p=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,u=function(){c._buttonLike.addEventListener("click",(function(){c.handleLikeClick(c._id)})),c._buttonDelete.addEventListener("click",(function(){c.handleDeleteClick(c._id)})),c._cardImage.addEventListener("click",(function(){c.handleCardClick({name:c._name,link:c._link})}))},(i=n(i="_setEventListener"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,this._data=a,this._name=a.name,this._link=a.link,this._likes=a.likes,this._id=a._id,this._ownerId=a.owner._id,this._userId=l,this._templateSelector=r,this.handleCardClick=s,this.handleDeleteClick=f,this.handleLikeClick=p}var r,o;return r=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector("#cardTemplate").content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_addLike",value:function(){this._buttonLike.classList.add("element__heart_active")}},{key:"_deleteLike",value:function(){this._buttonLike.classList.remove("element__heart_active")}},{key:"setLikes",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes.length,this.isLiked()?this._addLike():this._deleteLike()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeCounter=this._element.querySelector(".element__counter"),this._cardImage=this._element.querySelector(".element__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._buttonLike=this._element.querySelector(".element__heart"),this._buttonDelete=this._element.querySelector(".element__basket"),this._setEventListener(),this.setLikes(this._likes),this._ownerId!==this._userId&&(this._buttonDelete.style.display="none"),this._element}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}var l=u((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_showInputError",(function(e,t){var n=r._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r._config.inputErrorClass),n.textContent=t,n.classList.add(r._config.errorClass)})),c(this,"_hideInputError",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._config.inputErrorClass),t.classList.remove(r._config.errorClass),t.textContent=""})),c(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),c(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),c(this,"_disableButton",(function(){r._buttonElement.classList.add(r._config.inactiveButtonClass),r._buttonElement.disabled=!0})),c(this,"_enableButton",(function(){r._buttonElement.classList.remove(r._config.inactiveButtonClass),r._buttonElement.disabled=!1})),c(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r._disableButton():r._enableButton()})),c(this,"_setEventListeners",(function(){r._toggleButtonState(),r._form.addEventListener("reset",(function(){r._disableButton()})),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),c(this,"enableValidation",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._form=n,this._config=t,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector)}));function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"setItem",value:function(e){this._container.append(e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popupElement.querySelector(".popup__photo"),t._popupImgTitle=t._popupElement.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupImgTitle.textContent=e.name,v(S(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popupElement.querySelector(".form"),t._inputList=t._popupElement.querySelectorAll(".input"),t._submitButton=t._popupForm.querySelector(".popup__button"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){E(P(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),E(P(u.prototype),"setEventListeners",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var I=function(){function e(t){var n=t.userNameSelector,r=t.userInfoSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userInfoElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userInfo:this._userInfoElement.textContent}}},{key:"setAvatar",value:function(e){this._userAvatarElement.src=e}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userInfo;this._userNameElement.textContent=t,this._userInfoElement.textContent=n}}],n&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var R=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"ae0200de-db36-4a97-9eb4-cce8d45d513f","Content-Type":"application/json"}});function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var F,N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._popupForm=t._popupElement.querySelector(".form"),t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleFormConfirm=e}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormConfirm()})),B(U(u.prototype),"setEventListeners",this).call(this)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h),V=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__avatar"),M=document.querySelector(".form-edit"),z=M.querySelector(".popup__input-name"),$=M.querySelector(".popup__input-job"),G=document.querySelector(".form-add"),K=document.querySelector(".popup-avatar__button"),Q=document.querySelector(".popup-edit__button"),W=document.querySelector(".popup-add__button"),X=document.querySelector(".form-avatar"),Y={formSelector:".form",inputSelector:".input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_error",errorClass:"popup__input-error_active"};function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([R.getProfile(),R.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo({userName:o.name,userInfo:o.about}),ee.setAvatar(o.avatar),F=o._id,i.forEach((function(e){var t=ne(e);ce.setItem(t)}))})).catch((function(e){console.log(e)}));var ee=new I({userNameSelector:".profile__name",userInfoSelector:".profile__profession",userAvatarSelector:".profile__avatar-img"}),te=new g(".popup-img");te.setEventListeners();var ne=function(e){var t=new r({data:e,userId:F,handleCardClick:function(e){te.open(e)},handleDeleteClick:function(e){re.open(),re.setSubmitAction((function(){R.deleteCard(e).then((function(){t.deleteCard(),re.close()})).catch((function(e){console.log(e)}))}))},handleLikeClick:function(e){t.isLiked(e)?R.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):R.addLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}},"#cardTemplate");return t.generateCard()},re=new N({popupSelector:".popup-confirm"});re.setEventListeners();var oe=new O({popupSelector:".popup-add",handleFormSubmit:function(e){W.textContent="Создание...",R.addCard(e).then((function(e){var t=ne(e);ce.addItem(t),oe.close()})).catch((function(e){console.log(e)})).finally((function(){W.textContent="Создать"}))}});oe.setEventListeners();var ie=new O({popupSelector:".popup-edit",handleFormSubmit:function(e){Q.textContent="Сохранение...",R.editProfile(e.user,e.job).then((function(){ee.setUserInfo({userName:e.user,userInfo:e.job}),ie.close()})).catch((function(e){console.log(e)})).finally((function(){Q.textContent="Сохранить"}))}});ie.setEventListeners();var ue=new O({popupSelector:".popup-avatar",handleFormSubmit:function(e){K.textContent="Сохранение...",R.changeAvatar(e).then((function(e){ee.setAvatar(e.avatar),ue.close()})).catch((function(e){console.log(e)})).finally((function(){K.textContent="Сохранить"}))}});ue.setEventListeners(),H.addEventListener("click",(function(){ue.open()})),V.addEventListener("click",(function(){oe.open()})),J.addEventListener("click",(function(){var e=ee.getUserInfo();z.value=e.userName,$.value=e.userInfo,ie.open()}));var ce=new p({items:[],renderer:function(e){var t=ne(e);ce.addItem(t)}},".elements");ce.renderItems(),new l(Y,M).enableValidation(),new l(Y,G).enableValidation(),new l(Y,X).enableValidation()})();