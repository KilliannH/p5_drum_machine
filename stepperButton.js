class StepperButton {
    isActive;
    
    //display_stuff
    stepper_width = 40;
    stepper_height = 40;
    y_coordinate = height / 2 + height / 4 + offset - 10;
    
    //constructor here
    constructor(isActive) 
    {
        this.isActive = isActive;
    }
      
      display(i) 
      {
          rect(width / 9 + (stepper_offset) * i, y_coordinate, stepper_width, stepper_height);
      }
      
      fillit() 
      {
        if(isActive){
          fill(255, 0, 0);
        } else {
            noFill();
        }
      }
  }