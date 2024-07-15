import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter, } from '@angular/core';
import {CardUser,UserName} from './models/card-user'

@Component({
  selector: 'jfn-card-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardUserComponent {

  @Input() user!: CardUser;
  @Input() check:boolean = false;
  @Input() cardType:string = '';
  @Output() checked = new EventEmitter<UserName>();

  public onCheck():void {
    this.checked.emit(this.user?.name)
  }

}
