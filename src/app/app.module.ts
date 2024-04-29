import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { provideRouter, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterOutlet, SharedModule, BrowserModule],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
