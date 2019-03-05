import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListeningComponent } from './listening/listening.component';
import { ReadingComponent } from './reading/reading.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { WritingComponent } from './writing/writing.component';

const appRoutes: Routes = [
  {path: 'listening', component: ListeningComponent},
  {path: 'reading', component: ReadingComponent},
  {path: 'speaking', component: SpeakingComponent},
  {path: 'writing', component: WritingComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
exports: [RouterModule]
})

export class AppRoutingModule {

}
