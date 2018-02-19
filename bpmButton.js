class BpmButton {

    //constructor here
    constructor() {
    }

      displayAndFill()
      {
          strokeWeight(4);
          fill(0, 100, 200);
          ellipse(bpm_x, bpm_y, bpm_width, bpm_height);
          noFill()
          line(bpm_x, 62, bpm_x, 70);
      }
}
