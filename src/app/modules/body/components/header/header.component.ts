import {
  Component,
  HostListener, Inject,
} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sections = ["about", "skills", "portfolio", "contact me"];
  expansionPanel = false;
  showScroll = false;
  private scrollHeight = 500;

  constructor( @Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit(): void {
    if (window.innerWidth > 700) {
      this.expansionPanel = true;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: number } }) {
    this.expansionPanel =  event.target.innerWidth > 700
  }

  @HostListener("window:scroll")
  onWindowScroll():void {
    const yOffSet = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showScroll = (yOffSet || scrollTop) > this.scrollHeight;
  }

  showNav(list:HTMLElement):void {
    list.classList.toggle("show-items")

  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

}
