import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {NzImageService} from "ng-zorro-antd/image";
import {LoginReqVo} from "../config/login/login-req-vo";
import {LoginServiceService} from "../config/login/login-service/login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NzImageService,LoginServiceService]
})
export class LoginComponent implements OnInit{
  backImageUrl="../../assets/logo.png"
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const req: LoginReqVo= {
        userId: !this.validateForm.value.userName?'':this.validateForm.value.userName,
        password: !this.validateForm.value.password?'':this.validateForm.value.password
      }
      this.login(req)
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: NonNullableFormBuilder, private loginService: LoginServiceService,private router:Router) {}

  ngOnInit(): void {
    console.log('页面初始化');
    const token = localStorage.getItem('token');
    if (token){
      this.router.navigate(['/admin'])
    }
  }

  private login(data: LoginReqVo){
    this.loginService.login(data).subscribe((resp)=>{
      localStorage.setItem('userId',resp.userId);
      localStorage.setItem('token',resp.token);
      this.router.navigate(['/admin'])
    })
  }
}
