import { Component } from '@angular/core';
import {NzImageService} from "ng-zorro-antd/image";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
  providers:[NzImageService]
})
export class BaseComponent {
  isCollapsed = false;
  logoUrl="../../assets/logo.png";
}
