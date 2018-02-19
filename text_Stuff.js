class TextStuff {
    //Constructor here
    constructor(text_content, text_x_cordinate, text_y_cordinate, text_size)
    {
      this.text_x_cordinate = text_x_cordinate;
      this.text_y_cordinate = text_y_cordinate;
      this.text_content = text_content;
      this.text_size = text_size;
    }

    drawText(){
      strokeWeight(0);
      fill(255);
      textSize(this.text_size);
      text(this.text_content, this.text_x_cordinate, this.text_y_cordinate);
    }
  }
