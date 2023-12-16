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
    { info: 'Date 1', monthDay: 'Juin 20th', year: 2025 },
    {
      info: 'Date 2',
      monthDay: 'Juin 21th',
      year: 2024,
    },
    {
      info: 'Date 2',
      monthDay: 'January 5th',
      year: 2024,
    },
    {
      info: 'Invited session proposal',
      monthDay: 'January 10th',
      year: 2024,
    },
    // {
    //   info: 'Contributed discussion paper',
    //   monthDay: 'January 20th',
    //   year: 2024,
    // },
    {
      info: 'Invited session paper',
      monthDay: 'January 20th',
      year: 2024,
    },
    {
      info: 'Invited session tutorial paper',
      monthDay: 'January 20th',
      year: 2024,
    },
    // {
    //   info: 'Invited session discussion paper',
    //   monthDay: 'January 20th',
    //   year: 2024,
    // },
    { info: 'Invited open track paper', monthDay: 'January 20th', year: 2024 },
    {
      info: 'Invited open track tutorial paper',
      monthDay: 'January 20th',
      year: 2024,
    },
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
