import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListeningComponent } from './listening/listening.component';

const appRoutes: Routes = [
  {path: 'listening', component: ListeningComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
exports: [RouterModule]
})

export class AppRoutingModule {

}
