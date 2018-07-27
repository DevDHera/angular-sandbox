import { Component } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  //template: '<h2>John Doe</h2>'
  //   styles: [
  //     `
  //       h2 {
  //         color: blue;
  //       }
  //     `
  //   ]
})
export class UserComponent {
  // Properties
  user: User;

  // Methods
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 20,
      address: {
        street: 'First Lane',
        city: 'Kurunegala',
        province: 'NWP'
      }
    };
  }
}
