class Text_Stuff {
    x_cordinate;
    y_cordinate;
    text_content;
    text_size;
    
    //Constructor here
    constructor(text_content, x_cordinate, y_cordinate, text_size) 
    {
      this.x_cordinate = x_cordinate;
      this.y_cordinate = y_cordinate;
      this.text_content = text_content;
      this.text_size = text_size;
    }
    
    drawText(){
      fill(255);
      textSize(text_size);
      text(text_content, x_cordinate, y_cordinate);
    }
    
    convertToBpm(speed){
      return 0;
    }
  }