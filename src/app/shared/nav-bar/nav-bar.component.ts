import { Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  @ViewChild('listItem') container!: ElementRef<HTMLInputElement> ;

  menuAction():void{
    this.container.nativeElement.style.display = "grid";
  }

  menuCloseAction():void{
     if(window.innerWidth <= 800) this.container.nativeElement.style.display = "none";
  }
}
