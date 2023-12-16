import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  secIds = [
    { id: 'registration#sec1', title: 'Reservation fees ' },
    { id: 'registration#sec2', title: 'Payement' },
    { id: 'registration#sec3', title: 'Reservation Procedure' },
    { id: 'registration#sec4', title: 'Cancellation' },
    // { id: 'registration#sec5', title: 'Limitation Of Liability Relation The Symposium' },
    // { id: 'registration#sec6', title: 'Privacy Policy' },
    { id: 'registration#sec7', title: 'Inquiries Regarding Reservation' },
  ];

  breadCrumbLinkNames: string[] = ['home', 'Reservation'];
}