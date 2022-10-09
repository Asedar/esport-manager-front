import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('slideRight', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: '1'
      })),
      transition('void => *', [style({transform: 'translateX(-50%)', opacity: '0'}), animate('2000ms cubic-bezier(0.35, 0, 0.25, 1)')])
    ]),
    trigger('slideDown', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: '1'
      })),
      transition('void => *', [style({transform: 'translateY(-100%)', opacity: '0'}), animate('2000ms cubic-bezier(0.35, 0, 0.25, 1)')])
    ]),
    trigger('slideUp', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: '1'
      })),
      transition('void => *', [style({transform: 'translateY(50%)', opacity: '0'}), animate('2000ms cubic-bezier(0.35, 0, 0.25, 1)')])
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
