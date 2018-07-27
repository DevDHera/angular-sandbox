import { Component } from '@angular/core';

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
  firstName: string;
  lastName: string;
  age: number;
  address;

  myTuple: [string, number, boolean];

  // Methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 20;
    this.address = {
      street: 'First Lane',
      city: 'Kurunegala',
      province: 'NWP'
    };

    this.myTuple = ['Hi', 12, true];
  }
}
