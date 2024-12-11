import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  take,
} from 'rxjs';

@Component({
  selector: 'app-observable-subject-demo',
  templateUrl: './observable-subject-demo.component.html',
  styleUrl: './observable-subject-demo.component.css',
})
export class ObservableSubjectDemoComponent implements OnInit {
  // subject = new Subject();

  // subject = new BehaviorSubject('Starting Value');

  // subject = new ReplaySubject(2);

  subject = new AsyncSubject();

  // BehaviourSubject : initial value to the observables
  // ReplaySubject : replay last (n) emitted vales
  // AsyncSubject : always return last value upon completion

  ngOnInit(): void {
    this.subject.subscribe((data) => console.log('Sub 1: ', data));
    this.subject.next('First Package');
    this.subject.next('Second Package');
    this.subject.subscribe((data) => console.log('Sub 2 : ', data));
    this.subject.next('Third Package');
    this.subject.subscribe((data) => console.log('Sub 3 : ', data));
    this.subject.complete();
  }
}
