import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { provideRouter } from '@angular/router';
import { homeRoutes } from './home.routes';
import { CircleMenuComponent } from './components/circle-menu/circle-menu.component';

@NgModule({
  declarations: [HomeComponent, CircleMenuComponent],
  imports: [],
  providers: [provideRouter(homeRoutes)],
})
export class HomeModule {}
