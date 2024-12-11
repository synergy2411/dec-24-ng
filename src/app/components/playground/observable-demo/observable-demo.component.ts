import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  interval,
  take,
  filter,
  map,
  from,
  of,
} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css',
})
export class ObservableDemoComponent implements OnInit {
  unSubs$!: Subscription;

  interval$ = interval(1000);

  fromPromise$ = from(
    new Promise((resolve) => setTimeout(() => resolve(101), 2000))
  );

  of$ = of(['Monica', 'Joey', 'Ross', 'Rachel']);

  fromArray$ = from(['Monica', 'Joey', 'Ross', 'Rachel']);

  ngOnInit(): void {
    this.fromPromise$.subscribe(console.log);
    this.fromArray$.subscribe(console.log);
    this.of$.subscribe(console.log);
  }

  simpleObj$ = new Observable((observer) => {
    observer.next(101);
    observer.next(102);
    observer.next(103);
    setTimeout(() => {
      // observer.error(new Error('Something went wrong!!'));
      observer.next(104);
    }, 1500);

    setTimeout(() => {
      observer.next(105);
    }, 3000);

    setTimeout(() => {
      observer.next(106);
      observer.complete();
    }, 5000);
  });

  onSubscribeInterval() {
    this.interval$
      .pipe(
        take(5),
        filter((value) => value % 2 == 0),
        map((value) => value * 10)
      )
      .subscribe({
        next: (data) => console.log(data),
      });
  }

  onSubscribeSimpleObs() {
    console.log('Before starting Observable');
    this.unSubs$ = this.simpleObj$.subscribe({
      next: (data) => {
        console.log('DATA : ', data);
      },
      error: (error) => {
        console.log('ERROR : ', error);
      },
      complete: () => {
        console.log('[COMPLETED]');
      },
    });
    console.log('After ending Observable');
  }

  onUnsubscribeSimpleObs() {
    console.log('Unsubscribed!!');
    this.unSubs$.unsubscribe();
  }
}
