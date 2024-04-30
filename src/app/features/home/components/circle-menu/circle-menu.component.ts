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
    const container = event.currentTarget as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const containerX = containerRect.left;
    const containerY = containerRect.top;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const relativeX = mouseX - containerX;
    const relativeY = mouseY - containerY;

    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    const distanceX = relativeX - centerX;
    const distanceY = relativeY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance <= this.radius) {
      this.x = relativeX + 'px';
      this.y = relativeY + 'px';
    } else {
      const angle = Math.atan2(distanceY, distanceX);
      const maxDistanceX = Math.cos(angle) * this.radius;
      const maxDistanceY = Math.sin(angle) * this.radius;
      this.x = centerX + maxDistanceX + 'px';
      this.y = centerY + maxDistanceY + 'px';
    }
  }
}
