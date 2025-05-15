import { Component, Input } from '@angular/core';
import { User } from '../../model/user.entity';
import {TitleCasePipe} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  imports: [
    TitleCasePipe,
    TranslateModule
  ],
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input() user!: User;
  isExpanded = false;

  toggleExpanded(event: Event) {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  protected readonly Event = Event;
}
