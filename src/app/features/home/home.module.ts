import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { provideRouter } from '@angular/router';
import { homeRoutes } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [],
  providers: [provideRouter(homeRoutes)],
})
export class HomeModule {}
