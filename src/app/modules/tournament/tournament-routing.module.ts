import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TournamentDetailsComponent } from './components/tournament-details/tournament-details.component';
import { TournamentComponent } from './tournament.component';


const routes: Routes = [
  {
    path: "tournaments",
    component: TournamentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tournaments/:id',
    component: TournamentDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
