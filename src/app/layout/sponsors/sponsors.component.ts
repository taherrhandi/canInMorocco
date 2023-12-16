import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent {
  secIds = [
    { id: 'sponsors#sec1', title: 'Organizers' },
    { id: 'sponsors#sec2', title: 'Academic Co-Organizers' },
    { id: 'sponsors#sec4', title: 'Institutionnal  sponsors' },
    { id: 'sponsors#sec3', title: 'Industrial  sponsors ' },

  ];
  breadCrumbLinkNames: string[] = ['home', 'Sponsors&Exhibitors'];
}
