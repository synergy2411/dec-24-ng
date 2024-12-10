import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css',
  standalone: false,
})
export class DirectiveDemoComponent {
  dynamicTheme = { backgroundColor: 'blue', color: '#fff' };

  onEnter() {
    this.dynamicTheme = { backgroundColor: '#fff', color: 'blue' };
  }
  onLeave() {
    this.dynamicTheme = { backgroundColor: 'blue', color: '#fff' };
  }
}
