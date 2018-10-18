export class User {
  private login: string;
  private password: string;

  setLogin(login){
    this.login = login;
  }

  setPassword(password){
    this.password = password;
  }

  getLogin(){
    return this.login;
  }

  getPassword(){
    return this.password;
  }
}

