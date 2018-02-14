class ActiveButton {
    isActive;
    
    //display_stuff
    button_width = 40;
    button_height = 20;
    y_coordinate = height / 2 + height / 5;
    
    //constructor here
    constructor(isActive) {
        this.isActive = isActive;
      }
      
      displayAndFill(x_coordinate) {
        if(isActive) {
          fill(200);
          rect(x_coordinate, y_coordinate, button_width, button_height);
        }
        else {
          noFill();
          rect(x_coordinate, y_coordinate, button_width, button_height);
        }
      }  
  }