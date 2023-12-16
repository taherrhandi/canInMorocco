import { Component, Input } from '@angular/core';

type SectionInfo = {
  id: string;
  title: string;
};


@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.css']
})
export class ScaffoldComponent {
  @Input() title: string = 'No title';
  @Input() breadCrumbLinkNames: string[] = ['home', 'about'];
  @Input() sectionsInfo: SectionInfo[] = [];
  @Input() headerBackgroundImage: string = "assets/head/about.jpg";
  private sections: HTMLElement[] = [];
  private idPreffix = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  
  constructor() {
    if (this.idPreffix.indexOf('#') > -1) {
      this.idPreffix = this.idPreffix.substring(0, this.idPreffix.indexOf('#'));
    }
  }
}
