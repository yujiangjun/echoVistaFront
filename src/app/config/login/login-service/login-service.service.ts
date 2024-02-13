import { Injectable } from '@angular/core';
import {ApiService} from "../../api.service";
import {LoginRespVo} from "../login-resp-vo";
import {LoginReqVo} from "../login-req-vo";
import {Observable} from "rxjs";

@Injectable()
export class LoginServiceService {

  constructor(private api:ApiService) { }


  login(user: LoginReqVo):Observable<LoginRespVo>{
    return this.api.post<LoginReqVo,LoginRespVo>("/inner/user/login/",user)
  }
}
