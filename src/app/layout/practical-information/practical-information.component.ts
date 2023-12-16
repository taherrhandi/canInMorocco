import { Component } from '@angular/core';

@Component({
  selector: 'app-practical-information',
  templateUrl: './practical-information.component.html',
  styleUrls: ['./practical-information.component.css']
})
export class PracticalInformationComponent {

  secIds = [
    { id: 'practical_information#sec1', title: 'Language' },
    { id: 'practical_information#sec2', title: 'Mobile Phones' },
    { id: 'practical_information#sec4', title: 'Insurance' },
    { id: 'practical_information#sec3', title: 'Force Majeure' },
    { id: 'practical_information#sec5', title: 'Banks' },
    { id: 'practical_information#sec6', title: 'Post Offices' },
    { id: 'practical_information#sec7', title: 'Electricity' },
    { id: 'practical_information#sec8', title: 'Useful numbers' },

  ];

  breadCrumbLinkNames: string[] = ['home', 'practical information'];

}
