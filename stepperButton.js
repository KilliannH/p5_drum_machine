class StepperButton {

//In Javascript you CANNOT declare object variables outside of the constructor.
//Like a ball, you pass the constructor parameter to the instance itself
//and this instance will be visible outside of the scope of the constructor like you want.

    //constructor here
    constructor(isActive)
    {
        this.isActive = isActive;
    }

      display(i)
      {
        strokeWeight(2);
          rect(width / 9 + (stepper_offset) * i, stepper_y_coordinate, stepper_width, stepper_height);
      }

      fillit()
      {
        if(this.isActive){
          fill(255, 0, 0);
        } else {
            noFill();
        }
      }
  }
