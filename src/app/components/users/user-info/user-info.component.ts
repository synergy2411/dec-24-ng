import { Component, Input } from '@angular/core';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
  standalone: false,
})
export class UserInfoComponent {
  @Input() user!: User;
}
