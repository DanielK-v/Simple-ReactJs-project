export default class UserMockAPI {
    static generateId() {
      return Math.floor(Math.random() * (10001 - 1 + 1)) + 1;
    }
  
    static getLoggedUserID() {
      return localStorage.getItem("logged-id");
    }
  
    static seedAdmin() {
      let admin = {
        username: "daniel",
        password: "adminpass",
        isAdmin: true,
        id: UserMockAPI.generateId()
      };
  
      let users = JSON.parse(localStorage.getItem("users"));
  
      if (!users) {
        users = [];
      }
  
      let doesExist = users.find(u => u.username === "daniel" && u.isAdmin);
  
      if (!doesExist) {
        users.push(admin);
  
        let usersJSON = JSON.stringify(users);
        localStorage.setItem("users", usersJSON);
      }
    }
  
    static login(username, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let users = JSON.parse(localStorage.getItem("users"));
  
          let currentUser = users.find(
            u => u.username === username && u.password === password
          );
  
          if (currentUser) {
            localStorage.setItem("logged-id", currentUser.id);
            resolve(currentUser);
          } else {
            reject("Wrong username or password.");
          }
        }, 1500);
      });
    }
  
    static register(user) {
      return new Promise((resolve, reject) => {
        let users = JSON.parse(localStorage.getItem("users"));
  
        if (!users) {
          users = [];
        }
  
        let doesExist = users.find(u => u.username === user.username);
  
        if (!doesExist) {
          user.id = UserMockAPI.generateId();
  
          users.push(user);
          let usersJSON = JSON.stringify(users);
          localStorage.setItem("users", usersJSON);
  
          resolve();
        } else {
          reject();
        }
      });
    }
  }