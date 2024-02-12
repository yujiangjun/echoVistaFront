import {Injectable} from "@angular/core";

@Injectable()
export class AuthServices {
  getAuth(): string {
    let token = localStorage.getItem('token');
    return token ?? '';
  }

  setAuth(token: string) {
    localStorage.setItem('token', token);
  }
}
