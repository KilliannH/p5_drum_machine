class Play_Button {
    isPlaying;
    
    //display_stuff
    play_width = 40;
    play_height = 20;
    y_coordinate = height / 2 + height / 5;
    
    //constructor here
    constructor(isPlaying) {
        this.isPlaying = isPlaying;
    }
      
      displayAndFill() 
      {
        if(isPlaying) {
          fill(0, 200, 0);
          rect(width / 9 - 60, y_coordinate, play_width, play_height);
        }
        else {
          noFill();
          rect(width / 9 - 60, y_coordinate, play_width, play_height);
        }
      }
      
}