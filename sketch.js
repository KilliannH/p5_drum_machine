let width = 1000;
let height = 600;
let offset = 60;

//Sound stuff here
let bd;
let snr;
let hh;
let tom1;
let tom2;

//Activebutton stuff
active_button_width = 40;
active_button_height = 20;
active_y_coordinate = height / 2 + height / 5;
let active_button = [5];
let isActive_offset = 20;

//playButton here
play_width = 40;
play_height = 20;
play_y_coordinate = height / 2 + height / 5;
let playButton;

//Texts here
text_y_cordinate = 470;
let bd_txt;
let snr_txt;
let hh_txt;
let tom1_txt;
let tom2_txt;

let filter_txt;
let envelope_txt;
let pitch_txt;

let play_txt;

//The key of this app
time = 0;
wait = 1000;

//Bpm stuff here
let bpmButton;
bpm_width = 50;
bpm_height = 50;
bpm_x = 930;
bpm_y = 80;

//Blinkbutton stuff
blink_width = 12;
blink_height = 12;
blink_y_coordinate = height / 2 + height / 4 + offset + 50;
let blinkButton = [16];

//Steppers_stuff
stepper_width = 40;
stepper_height = 40;
stepper_y_coordinate = height / 2 + height / 4 + offset - 10;
stepper_offset =  50;
let bdStepperButton = [16];
let snrStepperButton = [16];
let hhStepperButton = [16];
let tom1StepperButton = [16];
let tom2StepperButton = [16];

function preload() {
  //Sound init
      bd = loadSound("/data/KICK.mp3");
      snr = loadSound("/data/SNR.mp3");
      hh = loadSound("/data/HH.mp3");
      tom1 = loadSound("/data/TOM1.mp3");
      tom2 = loadSound("/data/TOM2.mp3");
}


function setup() {

  //optimising stability
  time=0;
  frameRate(60);

  createCanvas(1000, 600);

//playButton init
playButton = new PlayButton(false)

//text init
bd_txt = new TextStuff("Bd", (width / 2) - (width / 3) - isActive_offset + 10, text_y_cordinate, 16);
snr_txt = new TextStuff("Snr", width / 3 - isActive_offset + 8, text_y_cordinate, 16);
hh_txt = new TextStuff("Hh", width / 2 - isActive_offset + 10, text_y_cordinate, 16);
tom1_txt = new TextStuff("Tom1", (width / 3) * 2 - isActive_offset, text_y_cordinate, 16);
tom2_txt = new TextStuff("Tom2",width - width / 6 - isActive_offset, text_y_cordinate, 16);

filter_txt = new TextStuff("Filter", 70, 345, 16);
envelope_txt = new TextStuff("Envlp", 70, 220, 16);
pitch_txt = new TextStuff("Pitch", 70, 95, 16);

play_txt = new TextStuff("Play", (width / 2) - (width / 3) - isActive_offset - 92, text_y_cordinate, 16);

bpmButton = new BpmButton();

//actives init
  for(i = 0; i < 5; i++)
  {
    if(i == 0) {
    active_button[i] = new ActiveButton(true);
    } else {
    active_button[i] = new ActiveButton(false);
    }
  }

  //steppers init
  for (i = 0; i < 16; i++)
  {
    bdStepperButton[i] = new StepperButton(false);
    snrStepperButton[i] = new StepperButton(false);
    hhStepperButton[i] = new StepperButton(false);
    tom1StepperButton[i] = new StepperButton(false);
    tom2StepperButton[i] = new StepperButton(false);
  }

//blinks init
//Set the blinkbuttons to 16.
  for (i = 0; i < 16; i++) {
    blinkButton[i] = new BlinkButton(false);
  }
}

function draw() {

 background(40);

 //timerStuff here;
strokeWeight(1);
text(time, width - 70, 40); //timer display

if(playButton.isPlaying)
  {
    if(millis() - time >= wait)
    {
      for(i = 0; i < 16; i++)
        blinkButton[i].isActive = !blinkButton[i].isActive;
        time = millis();//also update the stored time
      }
  }

 playButton.displayAndFill();

//active displays
  active_button[0].displayAndFill((width / 2) - (width / 3) - isActive_offset);
  active_button[1].displayAndFill(width / 3 - isActive_offset);
  active_button[2].displayAndFill(width / 2 - isActive_offset);
  active_button[3].displayAndFill((width / 3) * 2 - isActive_offset);
  active_button[4].displayAndFill(width - width / 6 - isActive_offset);

//blinks displays
for (i = 0; i < 16; i++)
{
blinkButton[i].displayAndFill(i);
}

// steppers display
//Display all steppers by instruments
  for (i = 0; i < 16; i++)
  {
    if(active_button[0].isActive){
    bdStepperButton[i].fillit();
    bdStepperButton[i].display(i);
    }
    else if(active_button[1].isActive){
      snrStepperButton[i].fillit();
      snrStepperButton[i].display(i);
    }
    else if(active_button[2].isActive){
      hhStepperButton[i].fillit();
      hhStepperButton[i].display(i);
    }
    else if(active_button[3].isActive){
      tom1StepperButton[i].fillit();
      tom1StepperButton[i].display(i);
    }
    else if(active_button[4].isActive){
      tom2StepperButton[i].fillit();
      tom2StepperButton[i].display(i);
    }
  }

  //texts here
  bd_txt.drawText();
  snr_txt.drawText();
  hh_txt.drawText();
  tom1_txt.drawText();
  tom2_txt.drawText();

  filter_txt.drawText();
  envelope_txt.drawText();
  pitch_txt.drawText();

  play_txt.drawText();

  bpmButton.displayAndFill();

//////////////Sound plays
for(i = 0; i < 16; i++)
  {
    if(bdStepperButton[i].isActive && blinkButton[i].isActive && !bd.isPlaying())
    {
      bd.play();
    }

    if(snrStepperButton[i].isActive && blinkButton[i].isActive && !snr.isPlaying())
    {
      snr.play();
    }

    if(hhStepperButton[i].isActive && blinkButton[i].isActive && !hh.isPlaying())
    {
      hh.play();
    }

    if(tom1StepperButton[i].isActive && blinkButton[i].isActive && !tom1.isPlaying())
    {
      tom1.play();
    }

    if(tom2StepperButton[i].isActive && blinkButton[i].isActive && !tom2.isPlaying())
    {
      tom2.play();
    }
  }
}

//mouse detection here
function mousePressed()
{
  //for loop detects what step is going to be selected;
  for (i = 0; i < 16; i++)
  {
    //checking active steppers for BD.
    if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && active_button[0].isActive )
    {
      bdStepperButton[i].isActive = !bdStepperButton[i].isActive;
      break;
    }

    //checking active steppers for Snr.
    else if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && active_button[1].isActive )
    {
      snrStepperButton[i].isActive = !snrStepperButton[i].isActive;
      break;
    }

    //checking active steppers for HH.
    else if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && active_button[2].isActive )
    {
      hhStepperButton[i].isActive = !hhStepperButton[i].isActive;
      break;
    }

    //checking active steppers for Tom1.
    else if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && active_button[3].isActive )
    {
      tom1StepperButton[i].isActive = !tom1StepperButton[i].isActive;
      break;
    }

    //checking active steppers for Tom2.
    else if (mouseX > width / 9 && mouseX < width / 9 + 40 + i * (stepper_offset) && mouseY > height / 2 + height / 4 + offset - 10 && mouseY < height / 2 + height / 4 + offset - 10 + 40 && active_button[4].isActive )
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
      active_button[i].isActive = false;
      if (i == 0)
      {
        active_button[i].isActive = true; ///////Tant que c'est vrai, on sait qu'on manipule la data pour la bd.
      }
    }
  }
    //checking the 2nd one
    if (mouseX > width / 3 - isActive_offset && mouseX < width / 3 - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20)
    {
      for (i = 0; i < 5; i++)
      {
        active_button[i].isActive = false;
        if (i == 1)
        {
          active_button[i].isActive = true;
        }
      }
    }

    //checking the 3rd one
    if (mouseX > width / 2 - isActive_offset && mouseX < width / 2 - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20)
    {
      active_button[2].isActive = true;

      for (i = 0; i < 5; i++)
      {
        active_button[i].isActive = false;
        if (i == 2)
        {
          active_button[i].isActive = true;
        }
      }
    }

    //checking the 4th one
    if (mouseX > (width / 3) * 2 - isActive_offset && mouseX < (width / 3) * 2 - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20)
    {

      for (i = 0; i < 5; i++)
      {
        active_button[i].isActive = false;
        if (i == 3)
        {
          active_button[i].isActive = true;
        }
      }
    }

    //cheking the 5th one
    if (mouseX > width - width / 6 - isActive_offset && mouseX < width - width / 6 - isActive_offset + 40 && mouseY > height / 2 + height / 5 && mouseY < height / 2 + height / 5 + 20)
    {
      for (i = 0; i < 5; i++)
      {
        active_button[i].isActive = false;
        if (i == 4)
        {
          active_button[i].isActive = true;
        }
      }
    }
  }
