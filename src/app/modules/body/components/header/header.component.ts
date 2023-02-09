import {
  Component,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sections = ['about', 'skills', 'portfolio', 'contact me'];
  expansionPanel = false;
  showScroll = false;
  theme: Theme = 'light-theme2';
  items: Array<IconsModel> = [
    {
      link:'',
      tooltip:'Curriculum vitae',
      icon: 'ri-folder-user-line ri-2x'
    },
    {
      link:'',
      tooltip:'Git repository',
      icon: 'ri-github-fill ri-2x'
    },
    {
      link:'https://www.linkedin.com/in/shirley-aguilar-aguilar-4584161a9/',
      tooltip:'Linkedin profile',
      icon: 'ri-linkedin-fill ri-2x'
    }
  ]
  private scrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (window.innerWidth > 700) {
      this.expansionPanel = true;
    }

    this.initializeTheme();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.expansionPanel = event.target.innerWidth > 700;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showScroll = (yOffSet || scrollTop) > this.scrollHeight;
  }

  showNav(list: HTMLElement): void {
    list.classList.toggle('show-items');
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme2'
        ? (this.theme = 'dark-theme2')
        : (this.theme = 'light-theme2')
    );
  }


}
export type Theme = 'light-theme2' | 'dark-theme2';

class IconsModel {
  icon: string;
  tooltip: string;
  link: string;
}
