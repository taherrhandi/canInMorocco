import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-tours',
  templateUrl: './travel-tours.component.html',
  styleUrls: ['./travel-tours.component.css']
})
export class TravelToursComponent {
  sectionInfo = [
    { id: 'travel_tour#sec1', title: 'Venue' },
    { id: 'travel_tour#sec2', title: 'Conference Venues' },
    { id: 'travel_tour#sec3', title: 'Location of the conference centers' },
    { id: 'travel_tour#sec4', title: 'Symposium Meeting Rooms' },
    { id: 'travel_tour#sec5', title: 'Transportation & Accommodation Transportation' },
    { id: 'travel_tour#sec6', title: 'Access to Rabat by Air' },
    { id: 'travel_tour#sec7', title: 'Accommodation' },
    { id: 'travel_tour#sec8', title: 'Visa and Travel Documents' },
    { id: 'travel_tour#sec9', title: 'Getting Round Rabat' },
    { id: 'travel_tour#sec10', title: 'The Essentials of Rabat' },
    { id: 'travel_tour#sec11', title: 'Restaurants In Rabat' },
  ];

  breadCrumbLinkNames: string[] = ['home', 'travel&tours'];

  selectedContent: string = 'nature';

  showContent(content: string) {
    this.selectedContent = content;
  }

}
