import {
  AfterContentInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  AfterContentChecked,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  templateUrl: './life-cycle-demo.component.html',
  styleUrl: './life-cycle-demo.component.css',
  standalone: false,
})
export class LifeCycleDemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input()
  title!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - ', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
