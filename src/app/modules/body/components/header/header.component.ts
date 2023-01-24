import {
  Component,
  HostListener,
} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sections = ["home", "about", "skills", "portfolio", "contact me"];
  expansionPanel = false;

  constructor(){}

  ngOnInit(): void {
    if (window.innerWidth > 700) {
      this.expansionPanel = true;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: number } }) {
    this.expansionPanel =  event.target.innerWidth > 700
  }

  showNav(list:HTMLElement):void {

   list.classList.toggle("show-items")

  }
}
