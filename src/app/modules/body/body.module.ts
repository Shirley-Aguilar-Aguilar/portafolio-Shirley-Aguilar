import { NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import { BodyComponent} from "./components/body.component";
import { BodyRoutingModule} from "./body-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { NgOptimizedImage} from "@angular/common";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { SkillsComponent } from './components/skills/skills.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactInformationComponent,
    SkillsComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    NgOptimizedImage,
    RouterModule,
    MatTooltipModule,
    MatRippleModule,
    InfiniteScrollModule,
    MatSlideToggleModule
  ],
  providers: []
})

export class BodyModule{}
