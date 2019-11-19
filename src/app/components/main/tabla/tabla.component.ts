import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servicios/servicioUsers/users.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  users;
  constructor(protected usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      }
    )
  }

}
