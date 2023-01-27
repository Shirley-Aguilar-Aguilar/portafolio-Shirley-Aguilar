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
  sections = ["about", "skills", "portfolio", "contact me"];
  expansionPanel = false;

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
