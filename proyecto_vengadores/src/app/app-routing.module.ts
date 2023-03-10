import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
