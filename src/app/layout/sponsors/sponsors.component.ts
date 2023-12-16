import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent {
  secIds = [
    { id: 'sponsors#sec1', title: 'Organizers' },

  ];
  breadCrumbLinkNames: string[] = ['home', 'Sponsors&Exhibitors'];
}
