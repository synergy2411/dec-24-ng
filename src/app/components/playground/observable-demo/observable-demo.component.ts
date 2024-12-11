import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css',
})
export class ObservableDemoComponent {
  unSubs$!: Subscription;

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
