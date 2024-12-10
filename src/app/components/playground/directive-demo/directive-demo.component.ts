import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css',
  standalone: false,
})
export class DirectiveDemoComponent {
  tab = 0;

  friends = ['Monica', 'Rachel', 'Chandler', 'Joey', 'Ross'];

  product = {
    name: 'iPhone',
    qty: 200,
    isAvailable: false,
  };

  dynamicTheme = { backgroundColor: 'blue', color: '#fff' };
  dynamicClasses = { feature: true, 'my-border': false };

  onClassEnter() {
    this.dynamicClasses.feature = !this.dynamicClasses.feature;
  }
  onClassLeave() {
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
  }

  onEnter() {
    this.dynamicTheme = { backgroundColor: '#fff', color: 'blue' };
  }
  onLeave() {
    this.dynamicTheme = { backgroundColor: 'blue', color: '#fff' };
  }
}
