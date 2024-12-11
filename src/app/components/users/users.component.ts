import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { DataService } from '../../services/data.service';
// import { USER_DATA } from '../../db/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  standalone: false,
  // changeDetection: ChangeDetectionStrategy.Default
})
export class UsersComponent implements OnInit {
  users!: Array<User>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.users = USER_DATA;
    this.users = this.dataService.getUserdata();
  }

  onMoreInfo(theUser: User) {
    alert(`Mr. ${theUser.lastName} is working with ${theUser.company}!`);
  }
}
