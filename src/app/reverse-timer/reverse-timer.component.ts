import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { padZero } from '../../utils';

@Component({
  selector: 'app-reverse-timer',
  templateUrl: './reverse-timer.component.html',
  styleUrls: ['./reverse-timer.component.css']
})
export class ReverseTimerComponent implements OnInit {
  timerValue = 0;
  timer$: Observable<number>;

  constructor() { }

  startTimer() {
    this.timer$ = timer(this.timerValue, 1000);

    this.timer$.subscribe((value: number) => {
      this.timerValue = (360000 - value) > 0 ? (360000 - value) : (value - 360000);

    });
  }

  getTimerSeconds() {
    return padZero(this.timerValue % 60);
  }

  getTimerMinutes() {
    return padZero(Math.floor(this.timerValue / 60) % 60);
  }

  ngOnInit() {
    this.startTimer()
  }

}
