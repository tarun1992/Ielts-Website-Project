import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeningComponent } from './listening/listening.component';
import { AppRoutingModule } from './app-routing.module';
import { ReadingComponent } from './reading/reading.component';
import { WritingComponent } from './writing/writing.component';
import { SpeakingComponent } from './speaking/speaking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeningComponent,
    ReadingComponent,
    WritingComponent,
    SpeakingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
