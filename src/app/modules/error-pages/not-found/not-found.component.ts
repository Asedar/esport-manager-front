import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private auth: AuthService) { }

  isLogedIn(): boolean{
    return this.auth.isUserLogedIn();
  }

  ngOnInit(): void {
  }

}
