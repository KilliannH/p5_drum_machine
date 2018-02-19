class ActiveButton {

    constructor(isActive) {
        this.isActive = isActive;
      }

      displayAndFill(x_coordinate) {
        if(this.isActive) {
          stroke(255);
          strokeWeight(2);
          fill(200);
          rect(x_coordinate, active_y_coordinate, active_button_width, active_button_height);
        }
        else {
          stroke(255);
          strokeWeight(2);
          noFill();
          rect(x_coordinate, active_y_coordinate, active_button_width, active_button_height);
        }
      }
  }
