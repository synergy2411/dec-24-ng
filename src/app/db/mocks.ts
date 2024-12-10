import { User } from '../model/user.model';

export const USER_DATA: Array<User> = [
  {
    firstName: 'bill',
    lastName: 'gates',
    company: 'microsoft',
    isWorking: true,
    dob: new Date('Dec 21, 1964'),
    income: 50000,
    avatar: './assets/avatars/bill.jpg',
    votes: 120,
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    company: 'apple',
    isWorking: false,
    dob: new Date('Aug 1, 1964'),
    income: 0,
    avatar: './assets/avatars/steve.webp',
    votes: 180,
  },
  {
    firstName: 'tim b.',
    lastName: 'lee',
    company: 'world wide web',
    isWorking: true,
    dob: new Date('Sep 13, 1964'),
    income: 30000,
    avatar: './assets/avatars/tim.webp',
    votes: 70,
  },
];
