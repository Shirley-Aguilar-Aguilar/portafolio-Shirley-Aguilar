import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {BodyComponent} from "./components/body.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {ContactInformationComponent} from "./components/contact-information/contact-information.component";

const routes: Routes = [
  {
    path:"", component:BodyComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "skills", component: SkillsComponent },
      { path: "portfolio", component: PortfolioComponent },
      { path: "contact-me", component: ContactInformationComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BodyRoutingModule {}
