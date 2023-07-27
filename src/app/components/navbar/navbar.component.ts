import { Component } from '@angular/core';
import { SocialData } from 'src/app/interface/SocialData.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hasNavActive = false;
  socialData :SocialData[] = [
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
    console.log('[DEBUG] Data saved:', this.hasNavActive);
    
  }
}
