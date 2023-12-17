import { Component } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent {

  secIds = [
    { id: 'transport#sec1', title: 'Send My Baggage' },
    { id: 'transport#sec2', title: 'Track My Baggage' },
  ];

  breadCrumbLinkNames: string[] = ['home', 'Transport'];

  showMap = false;
  reference:string|undefined;

  trackBaggage(): void {
    // Add logic here to check the reference and decide whether to show the map
    if (this.reference !== undefined) {
      this.showMap = true;
    }
  }

}
