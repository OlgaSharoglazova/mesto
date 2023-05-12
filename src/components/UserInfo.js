export class UserInfo {
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userInfoElement = document.querySelector(userInfoSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userInfo: this._userInfoElement.textContent,
      userAvatar: this._userAvatarElement.src
    }
  }

  setUserInfo({ userName, userInfo, userAvatar }) {
    this._userNameElement.textContent = userName;
    this._userInfoElement.textContent = userInfo;
    this._userAvatarElement.src = userAvatar;
  }

}