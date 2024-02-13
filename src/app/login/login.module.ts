import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzImageViewComponent} from "ng-zorro-antd/experimental/image";
import {NzImageDirective} from "ng-zorro-antd/image";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NzFormItemComponent,
    NzFormControlComponent,
    NzInputGroupComponent,
    NzColDirective,
    NzFormDirective,
    NzInputDirective,
    NzRowDirective,
    NzCheckboxComponent,
    NzButtonComponent,
    NzImageViewComponent,
    NzImageDirective
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
