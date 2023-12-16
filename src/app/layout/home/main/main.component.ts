import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit{
  @ViewChild('container') container!: ElementRef<HTMLInputElement> ;
  counter:number = 1;

  url = environment.baseUrl+"#date"

  ngAfterViewInit(): void {
    interval(5000)
    .subscribe(()=>{
      this.container.nativeElement.style.backgroundImage = `url('../../../../assets/img/home/${this.counter}.jpg')`;
      this.container.nativeElement.style.opacity = "0";
      this.counter < 10 ? this.counter = this.counter + 1 : this.counter = 1;
      this.container.nativeElement.style.opacity = "1";
      
    });
  }

}
