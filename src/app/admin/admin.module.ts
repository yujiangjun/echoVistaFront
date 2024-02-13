import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Index3Component } from './index3/index3.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { BaseComponent } from './base/base.component';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NzIconDirective} from "ng-zorro-antd/icon";



@NgModule({
  declarations: [
    Index3Component,
    BaseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutComponent,
    NzSiderComponent,
    NzMenuDirective,
    NzHeaderComponent,
    NzIconDirective,
    NzContentComponent,
    NzSubMenuComponent,
    NzMenuItemComponent
  ],
  exports: [
    Index3Component
  ]
})
export class AdminModule { }
