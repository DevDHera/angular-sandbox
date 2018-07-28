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
  enableAdd: boolean = false;

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
        },
        image: 'http://lorempixel.com/600/600/people/3'
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
        image: 'http://lorempixel.com/600/600/people/2'
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
        image: 'http://lorempixel.com/600/600/people/1'
      }
    ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'Micheal',
    //   lastName: 'Jackson'
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
