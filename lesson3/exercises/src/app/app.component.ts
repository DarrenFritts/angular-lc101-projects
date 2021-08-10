import { Component } from '@angular/core';
// import { dir } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = true;
  upperLimit: boolean = false;
  lowerLimit: boolean = false;
  leftLimit: boolean = false;
  rightLimit: boolean = false;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
      rocketImage.style.bottom = '10px';
      rocketImage.style.left = '120px';
    }
  }

  handleLand(rocketImage) {
    let result = window.alert('The shuttle is landing.  Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '120px';
  }

  handleAbortMission(rocketImage) {
    let result = window.confirm('Confirm that you want to abort the mission.');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '120px';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }  else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }

    if (this.height < 0) {
      this.color = "orange";
      this.lowerLimit = true;
    } else if (this.height > 320000) {
      this.color = "orange";
      this.upperLimit = true;
    } else if (this.width < -120000) {
      this.color = "orange";
      this.leftLimit = true;
    } else if (this.width > 120000) {
      this.color = "orange";
      this.rightLimit = true;
    } else {
      this.color = "blue";
      this.upperLimit = false;
      this.lowerLimit = false;
      this.leftLimit = false;
      this.rightLimit = false;
    }
  }

  

}

  
