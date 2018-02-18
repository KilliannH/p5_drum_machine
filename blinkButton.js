class BlinkButton {

  //display_stuff

  //constructor here
  constructor(isActive) {
      this.isActive = isActive;
    }

    displayAndFill(i) {
      if(this.isActive) {
        strokeWeight(2);
        fill(255, 0, 0);
        ellipse(width / 9 + 20 + (stepper_offset) * i, blink_y_coordinate, blink_width, blink_height);
      }
      else {
        strokeWeight(2);
        noFill();
        ellipse(width / 9 + 20 + (stepper_offset) * i, blink_y_coordinate, blink_width, blink_height);
      }
    }
}
