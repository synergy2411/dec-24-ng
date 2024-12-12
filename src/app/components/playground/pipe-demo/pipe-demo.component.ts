import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
  todoCollection = [
    { label: 'shopping', status: 'pending' },
    { label: 'grocery', status: 'completed' },
    { label: 'insurance', status: 'pending' },
    { label: 'planting', status: 'completed' },
  ];

  filteredStatus = '';

  promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Promise');
    }, 3000);
  });

  contactNumber = 9876543210;

  onAddTodo() {
    this.todoCollection.push({ label: 'New Todo', status: 'pending' });
  }

  trackById(todo: { label: string; status: string }) {
    return todo.label;
  }
}
