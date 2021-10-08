import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMenuComponent implements OnInit {

  constructor(
    public user: UserService,
  ) { }

  isCollapsed = false
  ngOnInit(): void {
  }

}
