import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../services/user-profile.service';
import {User} from '../../model/user.entity';
import {UserInfoComponent} from '../../components/user-info/user-info.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  imports: [
    UserInfoComponent,
    NgForOf
  ],
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  users: User[] = [];

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.users = this.userProfileService.getUsers();
  }
}
