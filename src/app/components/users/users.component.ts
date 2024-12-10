import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  standalone: false,
  // changeDetection: ChangeDetectionStrategy.Default
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
    votes: 120,
  };

  onMoreInfo(theUser: any) {
    alert(`Mr. ${theUser.lastName} is working with ${theUser.company}!`);
  }
}
