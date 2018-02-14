class BlinkButton {
  isActive;
  //display_stuff
  blink_width = 12;
  blink_height = 12;
  y_coordinate = height / 2 + height / 4 + offset + 50;
  
  //constructor here
  constructor(isActive) {
      this.isActive = isActive;
    }
    
    displayAndFill(i) {
      if(isActive) {
        fill(255, 0, 0);
        ellipse(width / 9 + 20 + (stepper_offset) * i, y_coordinate, blink_width, blink_height);
      }
      else {
        noFill();
        ellipse(width / 9 + 20 + (stepper_offset) * i, y_coordinate, blink_width, blink_height);
      }
    }
}