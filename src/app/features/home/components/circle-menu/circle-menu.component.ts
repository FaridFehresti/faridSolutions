import { Component } from '@angular/core';

@Component({
  selector: 'app-circle-menu',
  templateUrl: './circle-menu.component.html',
  styleUrl: './circle-menu.component.less',
})
export class CircleMenuComponent {
  x: string = '0';
  y: string = '0';
  radius: number = 200; // Adjust this value to set the maximum distance from the center

  updateCoordinates(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    this.x = event.pageX - target.offsetLeft + 'px';
    this.y = event.pageY - target.offsetTop + 'px';
  }
}
