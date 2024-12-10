import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { USER_DATA } from '../../db/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  standalone: false,
  // changeDetection: ChangeDetectionStrategy.Default
})
export class UsersComponent implements OnInit {
  user!: User;

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  onMoreInfo(theUser: User) {
    alert(`Mr. ${theUser.lastName} is working with ${theUser.company}!`);
  }
}
