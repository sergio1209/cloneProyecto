import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/models/user.interface';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private service: UserService) {}

  onSubmit() {
    this.service.Post('/user', <User>this.userForm.value);
  }

}
