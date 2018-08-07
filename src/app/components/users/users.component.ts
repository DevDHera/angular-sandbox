import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

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
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 24,
        address: {
          street: 'Second Lane',
          city: 'Wahara',
          province: 'NWP'
        },
        isActive: false,
        registered: new Date('03/12/2018 09:30:00')
      },
      {
        firstName: 'Carol',
        lastName: 'Shelby',
        age: 40,
        address: {
          street: 'Lake Aveniev',
          city: 'Miami',
          province: 'Florida'
        },
        isActive: true,
        registered: new Date('11/02/2017 08:30:00')
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
