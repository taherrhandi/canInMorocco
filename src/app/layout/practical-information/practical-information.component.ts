import { Component } from '@angular/core';

@Component({
  selector: 'app-practical-information',
  templateUrl: './practical-information.component.html',
  styleUrls: ['./practical-information.component.css']
})
export class PracticalInformationComponent {

  secIds = [
    { id: 'practical_information#sec1', title: 'Language' },
    { id: 'practical_information#sec2', title: 'Badges' },
    { id: 'practical_information#sec3', title: 'Mobile Phones' },
    { id: 'practical_information#sec4', title: 'Program Changes' },
    { id: 'practical_information#sec5', title: 'Attendance Certificates' },
    { id: 'practical_information#sec6', title: 'Disclaimer' },
    { id: 'practical_information#sec7', title: 'Force Majeure' },
    { id: 'practical_information#sec8', title: 'Insurance' },
    { id: 'practical_information#sec9', title: 'Banks' },
    { id: 'practical_information#sec10', title: 'Post Offices' },
    { id: 'practical_information#sec11', title: 'Electricity' },
    { id: 'practical_information#sec12', title: 'Useful numbers' }
  ];

  breadCrumbLinkNames: string[] = ['home', 'practical information'];

}
