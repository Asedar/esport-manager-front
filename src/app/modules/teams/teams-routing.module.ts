import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TeamsComponent } from './teams.component';


const routes: Routes = [{
  path: "teams",
  component: TeamsComponent,
  canActivate: [AuthGuard],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
