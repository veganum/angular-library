import { CommonModule } from '@angular/common';
import { Component, OnInit,ChangeDetectionStrategy, } from '@angular/core';

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
export class CardUserComponent implements OnInit {

  ngOnInit(): void { }

}
