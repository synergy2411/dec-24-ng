import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  standalone: false,
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    company: 'microsoft',
    isWorking: true,
    dob: new Date('Dec 21, 1964'),
    income: 50000,
    avatar: './assets/avatars/bill.jpg',
  };

  onMoreInfo(theUser: any) {
    alert(`Mr. ${theUser.lastName} is working with ${theUser.company}!`);
  }
}
