import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {BodyComponent} from "./components/body.component";
import {HomeComponent} from "./components/home/home.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";

const routes: Routes = [
  {
    path:"", component:BodyComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "portfolio", component: PortfolioComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BodyRoutingModule {}
