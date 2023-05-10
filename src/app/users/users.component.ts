import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'DarkSasuke42'
    },
    {
      id: 2,
      name: 'Sarah19'
    },
    {
      id: 3,
      name: 'Dr.GyroCortex'
    }
  ];
}
