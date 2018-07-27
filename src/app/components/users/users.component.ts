import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        address: {
          street: 'First Lane',
          city: 'Kurunegala',
          province: 'NWP'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 24,
        address: {
          street: 'Second Lane',
          city: 'Wahara',
          province: 'NWP'
        }
      },
      {
        firstName: 'Carol',
        lastName: 'Shelby',
        age: 40,
        address: {
          street: 'Lake Aveniev',
          city: 'Miami',
          province: 'Florida'
        }
      }
    ];

    this.addUser({
      firstName: 'Micheal',
      lastName: 'Jackson',
      age: 54,
      address: {
        street: 'Mansion',
        city: 'Brooklyn',
        province: 'NY'
      }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
