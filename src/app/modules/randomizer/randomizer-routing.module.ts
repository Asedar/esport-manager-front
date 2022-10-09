import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { RandomizerComponent } from './randomizer.component';


const routes: Routes = [
  {
    path: "randomizer",
    component: RandomizerComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomizerRoutingModule { }
 