import { Component } from '@angular/core';
import { SocialData } from 'src/app/interface/SocialData.interface';



@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent {
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
      link: 'https://404-not-found-dev-challenges.vercel.app',
      img: 'https://www.dropbox.com/s/ovytnyl4icboa85/instagram-line.svg?raw=1',
      title: 'instagram'
    }
  ];
}
