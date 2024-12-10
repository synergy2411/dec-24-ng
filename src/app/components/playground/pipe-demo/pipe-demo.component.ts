import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
  promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Promise');
    }, 3000);
  });
}
