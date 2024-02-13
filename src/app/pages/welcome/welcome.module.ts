import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";


@NgModule({
  imports: [WelcomeRoutingModule, JsonPipe, NgForOf, NgIf],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
