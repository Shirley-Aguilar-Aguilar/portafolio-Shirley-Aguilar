import {NgModule} from "@angular/core";

import {LogoComponent} from "./components/logo/logo.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRippleModule} from "@angular/material/core";
import {BodyRoutingModule} from "../modules/body/body-routing.module";

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    MatTooltipModule,
    MatRippleModule,
    BodyRoutingModule
  ],
  exports: [
    LogoComponent
  ],
})

export class SharedModule {}
