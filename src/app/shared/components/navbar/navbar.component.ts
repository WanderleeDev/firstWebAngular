import { Component } from '@angular/core';
import { ISocialData } from '../../interface/ISocialData.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hasNavActive = false;
  socialData :ISocialData[] = [
    {
      link: 'https://github.com/WanderleeDev',
      img: 'https://www.dropbox.com/s/h93470tp28epe1j/github-line.svg?raw=1',
      title: 'github'
    },
    {
      link: 'https://www.linkedin.com/in/wanderlee-max/',
      img: 'https://www.dropbox.com/s/xb806hyl1kjy4cj/linkedin.svg?raw=1',
      title: 'linkedin'
    },
    {
      link: '#',
      img: 'https://www.dropbox.com/s/ovytnyl4icboa85/instagram-line.svg?raw=1',
      title: 'instagram'
    }
  ];

  isClicked() {
    this.hasNavActive = !this.hasNavActive;
  }
}
