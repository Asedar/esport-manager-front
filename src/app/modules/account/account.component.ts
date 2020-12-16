import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Deserialize } from 'cerialize';
import { Player } from '../teams/models/player.model';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accService: AccountService) { }

  ngOnInit(): void {
    this.accService.getConfig().subscribe(config => {
      this.accService.getMyAccount(config.apiURL)
        .subscribe(
          response => {
            this.account = Deserialize(response.data, Player);
          },
          error => {

          })
    })
  }

  account: Player;


}
