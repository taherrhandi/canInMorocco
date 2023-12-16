import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subject, distinctUntilChanged } from 'rxjs';

type CardData = {
  info: string;
  monthDay: string;
  year: number;
};

type Timer = ReturnType<typeof setInterval>;

@Component({
  selector: 'app-important-dates',
  templateUrl: './important-dates.component.html',
  styleUrls: ['./important-dates.component.css']
})
export class ImportantDatesComponent implements AfterViewInit, OnDestroy {
  cardData: CardData[] = [
    { info: 'Start date (Ceremony)', monthDay: 'March 21st', year: 2024 },
    {
      info: 'First Match',
      monthDay: 'March 21st',
      year: 2024,
    },
    {
      info: 'Quarterfinal',
      monthDay: 'April 01st',
      year: 2024,
    },
    {
      info: 'Semi Final',
      monthDay: 'April 06th',
      year: 2024,
    },
    {
      info: 'Match for 3rd place',
      monthDay: 'April 10th',
      year: 2024,
    },
    {
      info: 'Final',
      monthDay: 'April 11th',
      year: 2024,
    },
    // {
    //   info: 'Invited session tutorial paper',
    //   monthDay: 'January 20th',
    //   year: 2024,
    // },
    // // {
    // //   info: 'Invited session discussion paper',
    // //   monthDay: 'January 20th',
    // //   year: 2024,
    // // },
    // { info: 'Invited open track paper', monthDay: 'January 20th', year: 2024 },
    // {
    //   info: 'Invited open track tutorial paper',
    //   monthDay: 'January 20th',
    //   year: 2024,
    // },
    // {
    //   info: 'Ivited open track discussion paper',
    //   monthDay: 'January 20th',
    //   year: 2024,
    // },
  ];

  flexDiv: HTMLDivElement | null = null;
  sliderCtrl: HTMLDivElement | null = null;
  currentItemIdx: number = 0;
  translate: Subject<string> = new Subject();
  sliderTimer: Timer;
  private delta: number = 1;

  private readonly SLIDER_TIMER_INTERVAL = 6000;
  private readonly CARD_SIZE = 284.61;
  private readonly SLIDER_CTRL_MARGIN_BLOCK = 140;
  private readonly FLEX_DIV_GAP = '1.7em';

  public constructor() {
    this.translate.pipe(distinctUntilChanged()).subscribe({
      next: (v) => {
        if (this.flexDiv !== null) {
          this.flexDiv.style.transform = v;
        }
      },
    });
    this.sliderTimer = setInterval(() => {
      if (this.currentItemIdx + this.delta < 0) {
        this.delta = 1;
      } else if (this.currentItemIdx + this.delta >= this.cardData.length) {
        this.delta = -1;
      }
      this.onSliderCtrlClicked(this.delta);
    }, this.SLIDER_TIMER_INTERVAL);
  }
  ngOnDestroy(): void {
    clearInterval(this.sliderTimer);
  }

  ngAfterViewInit(): void {
    this.flexDiv = document.querySelector('.flex');
    this.sliderCtrl = document.querySelector('.slider-ctrl');
    this.emitNextTranslateValue();
  }

  onSliderCircleClicked(idx: number) {
    this.currentItemIdx = idx;
    this.emitNextTranslateValue();
  }

  onSliderCtrlClicked(delta: number) {
    if (this.currentItemIdx + delta < 0) {
      this.currentItemIdx = this.cardData.length - 1;
    } else if (this.currentItemIdx + delta >= this.cardData.length) {
      this.currentItemIdx = 0;
    } else {
      this.currentItemIdx += delta;
    }
    this.emitNextTranslateValue();
  }

  private emitNextTranslateValue() {
    if (this.sliderCtrl) {
      this.translate.next(
        `translateX(calc(${
          this.sliderCtrl.clientWidth / 2 -
          this.SLIDER_CTRL_MARGIN_BLOCK -
          this.currentItemIdx * this.CARD_SIZE
        }px - ${this.currentItemIdx}*${this.FLEX_DIV_GAP})`
      );
    }
  }
}
