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
  firstName = 'John';
  lastName = 'Doe';
  age = 20;
  address = {
    street: '2nd Aveniue',
    city: 'Kurunegala',
    province: 'NWP'
  };

  // Methods
  constructor() {}
}
