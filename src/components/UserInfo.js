export class UserInfo {
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector } ) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userInfoElement = document.querySelector(userInfoSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userInfo: this._userInfoElement.textContent
    }
  }

  setAvatar(avatar) {
    this._userAvatarElement.src = avatar;
  }

  setUserInfo({ userName, userInfo }) {
    this._userNameElement.textContent = userName;
    this._userInfoElement.textContent = userInfo;
  }

}