import { NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import {BodyComponent} from "./components/body.component";
import {BodyRoutingModule} from "./body-routing.module";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [BodyComponent, HeaderComponent],
  imports: [CommonModule, BodyRoutingModule],
  providers: []
})

export class BodyModule{}
