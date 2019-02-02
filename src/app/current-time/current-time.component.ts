import { Component, OnInit } from '@angular/core';
import { Observable, Observer} from 'rxjs';

function getTime(date: Date) {
  return date.toLocaleTimeString([], {
    hour: '2-digit', 
    minute:'2-digit'
  });
}

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  timeObserver: Observable<string>; 
  time: string; // currentTime

  constructor() { }

  showTime() {
    this.time = getTime(new Date());

    this.timeObserver = Observable.create((observer: Observer<string>) => {
      setInterval(_ => observer.next(getTime(new Date())), 1000);
    });

    this.timeObserver.subscribe({
      next: (value: string) => this.time = value,
      // complete: () => this.time = ''
    });
  }


  ngOnInit() {
    this.showTime()
  }

}
