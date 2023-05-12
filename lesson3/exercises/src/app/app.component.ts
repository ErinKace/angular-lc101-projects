import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height: number = 0;
  horizontal: number = 0;
  message = 'Space shuttle ready for takeoff!';
  takenOff: boolean = false;

  handleTakeOff() {
    let result = window.confirm("Are you sure the shuttle is ready for take off?");
    if(result) {
      this.color = 'blue';
      this.message = "Shuttle in flight.";
      this.horizontal = 0;
      this.height = 10000;
    }
  }

  handleLand(image) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.color = 'green';
    this.message = "The shuttle has landed.";
    this.height = 0;
    image.style.bottom='0px';
  }

  handleAbort(image) {
    let result = window.confirm("Are you sure you want to abort the mission?");
    if (result) {
      this.color = 'red';
      this.message = "Mission aborted.";
      this.height = 0;
      image.style.bottom='0px';
    }
  }

  moveRocket(image, direction:string) {
    if (direction === 'right') {
      let movement = parseInt(image.style.left) + 10 + 'px';
      image.style.left = movement;
      this.horizontal = this.horizontal + 10000;
   }
   if (direction === 'left') {
    let movement = parseInt(image.style.left) - 10 + 'px';
    image.style.left = movement;
    this.horizontal = this.horizontal - 10000;
   }
   if (direction === 'up') {
    let movement = parseInt(image.style.bottom) + 10 + 'px';
    image.style.bottom = movement;
    this.height = this.height + 10000;
   }
   if (direction === 'down') {
    let movement = parseInt(image.style.bottom) - 10 + 'px';
    image.style.bottom = movement;
    this.height = this.height - 10000;
   }
  }

  collisionWarning() {
    if (this.height >= 320000 || this.height < 0 || this.horizontal < 0 || this.horizontal >= 330000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

}
