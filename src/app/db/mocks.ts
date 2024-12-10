import { User } from '../model/user.model';

export const USER_DATA: User = {
  firstName: 'bill',
  lastName: 'gates',
  company: 'microsoft',
  isWorking: true,
  dob: new Date('Dec 21, 1964'),
  income: 50000,
  avatar: './assets/avatars/bill.jpg',
  votes: 120,
};
