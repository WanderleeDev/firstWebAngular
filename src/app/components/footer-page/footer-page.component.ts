import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent {
  listTechnology = [
    'Vscode',
    'Html',
    'Sass',
    'Typescript',
    'Angular',
    'Git'
  ];
  listTools = [
    'Reactive Forms',
    'Pipes',
    'Angular-cli',
    'Angular services',
    'Angular router',
    'Binding'
  ]
}
