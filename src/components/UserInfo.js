export default class UserInfo {
    constructor( userName, userStatus) {
      this.userName = userName;
      this.userStatus = userStatus;
    }
  
    getUserInfo() {
      const userInfo = {
        name: this.userName.textContent,
        status: this.userStatus.textContent,
      };
      return userInfo;
    }
  
    setUserInfo(data) {
      this.userName.textContent =data.name;
      this.userStatus.textContent = data.status;
    }
  }