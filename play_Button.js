class PlayButton {

    //constructor here
    constructor(isPlaying) {
        this.isPlaying = isPlaying;
    }

      displayAndFill()
      {
        if(this.isPlaying) {
          strokeWeight(4);
          fill(0, 200, 0);
          rect(width / 9 - 60, play_y_coordinate, play_width, play_height);
        }
        else {
          strokeWeight(4);
          noFill();
          rect(width / 9 - 60, play_y_coordinate, play_width, play_height);
        }
      }

}
