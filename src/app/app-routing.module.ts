import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path:"", loadChildren: () => import("./modules/body/body.module").then((m) => m.BodyModule)},
  {
    path: "**",
    redirectTo:"",
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}
