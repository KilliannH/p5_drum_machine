//Initialise arrays of Buttons
let bdStepperButton = new StepperButton[16];
let snrStepperButton = new StepperButton[16];
let hhStepperButton = new StepperButton[16];
let tom1StepperButton = new StepperButton[16];
let tom2StepperButton = new StepperButton[16];

let activeButton = new ActiveButton[5];
let blinkButton = new BlinkButton[16];

//Preparing soundfiles
let drumMachine = new SoundFile[5];

//A play button
let playButton;

//The key of this app
var timer = 0;
var unit = 300; //1000 for 60bpms, let's make it 300 for tests :p

//A text object to gain some lines...or not :p
let bd;
let snr;
let hh;
let tom1;
let tom2;

let filter;
let envelope;
let pitch;
let playText;

//draws stuff here
let offset = 60;
let stepper_offset = 50;
let isActive_offset = 20;

let text_y_cordinate = 470;

function setup() {
//res for Java vs res for Android
  //fullScreen();
  createCanvas(1000, 600);
  
  //let's implement instruments now.
  for(i = 0; i < 5; i++){
  drumMachine [i] = new SoundFile(this,(i+1) + ".wav");
  }
  
  //frameRate(50);//To avoid the drift when converting bpms.

  //Set the stepperbuttons to 16.
  for (i = 0; i < 16; i++) {
    bdStepperButton[i] = new StepperButton(false);
    snrStepperButton[i] = new StepperButton(false);
    hhStepperButton[i] = new StepperButton(false);
    tom1StepperButton[i] = new StepperButton(false);
    tom2StepperButton[i] = new StepperButton(false);
  }
  
    //Set the blinkbuttons to 16.
  for (i = 0; i < 16; i++) {
    blinkButton[i] = new BlinkButton(false);
  }
  
  //Instantiate the playButton
  playButton = new Play_Button(false);

  //Set the activeButtons to 5.
  for (i = 0; i < 5; i++) {
    if(i==0) {
    activeButton[i] = new ActiveButton(true);
    } else {
      activeButton[i] = new ActiveButton(false);
    }
    
    //Set the text stuff here
    bd = new Text_Stuff("Bd", (width / 2) - (width / 3) - isActive_offset + 10, text_y_cordinate, 16);
    snr = new Text_Stuff("Snr", width / 3 - isActive_offset + 8, text_y_cordinate, 16);
    hh = new Text_Stuff("Hh", width / 2 - isActive_offset + 10, text_y_cordinate, 16);
    tom1 = new Text_Stuff("Tom1", (width / 3) * 2 - isActive_offset, text_y_cordinate, 16);
    tom2 = new Text_Stuff("Tom2",width - width / 6 - isActive_offset, text_y_cordinate, 16);
    
    filter = new Text_Stuff("Filter", 70, 345, 16);
    envelope = new Text_Stuff("Envlp", 70, 220, 16);
    pitch = new Text_Stuff("Pitch", 70, 95, 16);
    
    playText = new Text_Stuff("Play", (width / 2) - (width / 3) - isActive_offset - 92, text_y_cordinate, 16);
  }
}

function draw() {
  
    background(60);
    
      //timerStuff here;
      text(timer, width - 90, 50); //timer display
      
        if(playButton.isPlaying){
          timer = timer + (20.0/unit); //bpm = 60, if bpm += 1, unit -= 16;
          for(i = 0; i < 16; i++)
          {
             if(timer>16){
                timer = 0; //this works because we check the blink only on seconds. 
                //So the end of the last /16 note is complete
              }
             if(timer > i && timer < i + 1){
               blinkButton[i].isActive = true;
             } else {
               blinkButton[i].isActive = false;
             }
          }
        } else {
          timer = 0;
          for(i = 0; i < 16; i++)
          {
            blinkButton[i].isActive = false;
          }
       }
       
  //////////////Sound plays
       for(i = 0; i < 16; i++)
        {
           if(bdStepperButton[i].isActive && blinkButton[i].isActive){  
           drumMachine[0].play();
           }
           
           else if(snrStepperButton[i].isActive && blinkButton[i].isActive){
           drumMachine[1].play();
           }
         
           else if(hhStepperButton[i].isActive && blinkButton[i].isActive){
           drumMachine[2].play();
           }
           
           else if(tom1StepperButton[i].isActive && blinkButton[i].isActive){
           drumMachine[3].play();
           }
           
           else if(tom2StepperButton[i].isActive && blinkButton[i].isActive){
           drumMachine[4].play();
           }
        }
         
       
    //Draws
    strokeWeight(4);
    playButton.displayAndFill();
    
    //buttons row 1
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(width / 2, height / 4 - offset, 60, 60);
    ellipse(width /3, height / 4 - offset, 60, 60);
    ellipse((width / 2) - (width / 3), height / 4 - offset, 60, 60);
    ellipse((width / 3) * 2, height / 4 - offset, 60, 60);
    ellipse(width - width / 6, height / 4 - offset, 60, 60);
  
    //buttons row 2
    ellipse(width / 2, height / 2 - offset * 1.4, 60, 60);
    ellipse(width /3, height / 2 - offset * 1.4, 60, 60);
    ellipse((width / 2) - (width / 3), height / 2 - offset * 1.4, 60, 60);
    ellipse((width / 3) * 2, height / 2 - offset * 1.4, 60, 60);
    ellipse(width - width / 6, height / 2 - offset * 1.4, 60, 60);
  
    //buttons row 3
    ellipse(width / 2, height / 2 + height / 4 - offset * 1.8, 60, 60);
    ellipse(width /3, height / 2 + height / 4 - offset * 1.8, 60, 60);
    ellipse((width / 2) - (width / 3), height / 2 + height / 4 - offset * 1.8, 60, 60);
    ellipse((width / 3) * 2, height / 2 + height / 4 - offset * 1.8, 60, 60);
    ellipse(width - width / 6, height / 2 + height / 4 - offset * 1.8, 60, 60);
  
    //Active_Buttons here
    activeButton[0].displayAndFill((width / 2) - (width / 3) - isActive_offset); //x cordinates in params here
    activeButton[1].displayAndFill(width / 3 - isActive_offset);
    activeButton[2].displayAndFill(width / 2 - isActive_offset);
    activeButton[3].displayAndFill((width / 3) * 2 - isActive_offset);
    activeButton[4].displayAndFill(width - width / 6 - isActive_offset);
  
  
    //Display all steppers by instruments
    for (i = 0; i < 16; i++)
    {
      if(activeButton[0].isActive){
      bdStepperButton[i].fillit();
      bdStepperButton[i].display(i);
      }
      else if(activeButton[1].isActive){
        snrStepperButton[i].fillit();
        snrStepperButton[i].display(i);
      }
      else if(activeButton[2].isActive){
        hhStepperButton[i].fillit();
        hhStepperButton[i].display(i);
      }
      else if(activeButton[3].isActive){
        tom1StepperButton[i].fillit();
        tom1StepperButton[i].display(i);
      }
      else if(activeButton[4].isActive){
        tom2StepperButton[i].fillit();
        tom2StepperButton[i].display(i);
      }
    }
  
    //Blinks here
    for (i = 0; i < 16; i++)
    {
      strokeWeight(2);
      blinkButton[i].displayAndFill(i);
    }
    
    //texts here
    bd.drawText();
    snr.drawText();
    hh.drawText();
    tom1.drawText();
    tom2.drawText();
    
    filter.drawText();
    envelope.drawText();
    pitch.drawText();
    
    playText.drawText();
    
}

function mouseClicked() {
  ellipse(60, 60, 70, 80)

}

function keyPressed() {
//for loop detects what step is going to be selected;
for (i = 0; i < 16; i++) 
{
  //checking active steppers for BD.
  if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && activeButton[0].isActive ) 
  {
    bdStepperButton[i].isActive = !bdStepperButton[i].isActive;  
    break;
  }
  
  //checking active steppers for Snr.
  else if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && activeButton[1].isActive ) 
  {
    snrStepperButton[i].isActive = !snrStepperButton[i].isActive;  
    break;
  }
  
  //checking active steppers for HH.
  else if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && activeButton[2].isActive ) 
  {
    hhStepperButton[i].isActive = !hhStepperButton[i].isActive; 
    break;
  }
  
  //checking active steppers for Tom1.
  else if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && activeButton[3].isActive ) 
  {
    tom1StepperButton[i].isActive = !tom1StepperButton[i].isActive; 
    break;
  }
  
  //checking active steppers for Tom2.
  else if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && activeButton[4].isActive ) 
  {
    tom2StepperButton[i].isActive = !tom2StepperButton[i].isActive; //Store this boolean as data on an array  
    break;
  }
}


//playButton detection
if (mouseX > width / 9 - 60 && mouseX < width / 9 - 20 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20)
{
  playButton.isPlaying = !playButton.isPlaying;
}

//Active buttons
//checking the 1st one
if (mouseX > (width / 2) - (width / 3) - isActive_offset && mouseX < (width / 2) - (width / 3) - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20) 
{
  for (i = 0; i < 5; i++)
  {
    activeButton[i].isActive = false;
    if (i == 0) 
    {
      activeButton[i].isActive = true; ///////Tant que c'est vrai, on sait qu'on manipule la data pour la bd.
    }
  }
}

  //checking the 2nd one
  if (mouseX > width / 3 - isActive_offset && mouseX < width / 3 - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20) 
  {
    for (i = 0; i < 5; i++)
    {
      activeButton[i].isActive = false;
      if (i == 1) 
      {
        activeButton[i].isActive = true;//////// tant que c'est vrai on sait qu'on manipule la data pour la snare
      }
    }
  }

  //checking the 3rd one
  if (mouseX > width / 2 - isActive_offset && mouseX < width / 2 - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20) 
  {
    activeButton[2].isActive = true;

    for (i = 0; i < 5; i++)
    {
      activeButton[i].isActive = false;
      if (i == 2) 
      {
        activeButton[i].isActive = true;
      }
    }
  }

  //checking the 4th one
  if (mouseX > (width / 3) * 2 - isActive_offset && mouseX < (width / 3) * 2 - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20) 
  {

    for (i = 0; i < 5; i++)
    {
      activeButton[i].isActive = false;
      if (i == 3) 
      {
        activeButton[i].isActive = true;
      }
    }
  }

  //cheking the 5th one
  if (mouseX > width - width / 6 - isActive_offset && mouseX < width - width / 6 - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20) 
  {
    for (i = 0; i < 5; i++)
    {
      activeButton[i].isActive = false;
      if (i == 4) 
      {
        activeButton[i].isActive = true;
      }
    }
  }
}
