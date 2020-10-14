import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomizer-input',
  templateUrl: './randomizer-input.component.html',
  styleUrls: ['./randomizer-input.component.css']
})
export class RandomizerInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options = [
    {value: 'top', viewValue: 'Top'},
    {value: 'mid', viewValue: 'Mid'},
    {value: 'jungle', viewValue: 'Jungle'},
    {value: 'bottom', viewValue: 'Bottom'},
    {value: 'support', viewValue: 'Support'}
  ];

}
