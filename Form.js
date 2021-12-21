class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter school name fully");
    this.input1 = createInput("").attribute("placeholder", "Enter school registration no.");
    this.input2 = createInput("").attribute("placeholder", "Enter location of the school");
    this.input3 = createInput("").attribute("placeholder", "Enter mail-id of the school");
    this.input4 = createInput("").attribute("placeholder", "Enter phone no.");
    this.input5 = createInput("").attribute("placeholder", "Enter no. of students in school")
    this.totalVaccination = createInput("").attribute("placeholder", "Enter the total vaccination needed")
    this.playButton = createButton("Play");
    this.nextButton = createButton("next");
    this.greeting = createElement("h2");
    this.Text = createElement("h2");
    this.Text1 = createElement("h2");
    this.Text2 = createElement("h2");
    this.Text3 = createElement("h1");
    this.Text4 = createElement("h2");
    this.Text5 = createElement("h2");
    this.Text6 = createElement("h2");
    this.tVaText = createElement("h2");
  }

  setElementsPosition() {
    this.input.position(width / 2 - 660, height / 2 - 180);
    this.input1.position(width / 2 -660, height / 2.14 - 30);
    this.input2.position(width / 2 - 660, height / 1.1 - 180);
    this.input3.position(width / 1.3 - 160, height / 2.14- 30);
    this.input4.position(width / 1.3 - 160, height / 2 - 180);
    this.input5.position(width / 1.3 - 160, height / 1.1 - 180);
    this.totalVaccination.position(width / 2.1 - 200, height / 2 - 52);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.nextButton.position(width / 2 - 130, height / 1 - 100);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.Text.position(width / 2 - 150, height / 2 - 350);
    this.Text1.position(width / 2 - 660, height / 2 - 240);
    this.Text2.position(width / 2 -660, height / 2.14 - 80);
    this.Text3.position(width / 2 - 660, height / 1.85 - 0);
    this.Text4.position(width / 1.3 - 160, height / 2.14 - 80);
    this.Text5.position(width / 1.3 - 160, height / 2 - 230);
    this.Text6.position(width / 1.3 - 160, height / 1.85 - 0);
    this.tVaText.position(width / 2.1 - 200, height / 2 - 100);
  }

  setElementsStyle() {
    this.input.class("customInput1");
    this.input1.class("customInput1");
    this.input2.class("customInput1");
    this.input3.class("customInput1");
    this.input4.class("customInput1");
    this.input5.class("customInput1");
    this.totalVaccination.class("customInput1");
    this.playButton.class("customButton");
    this.nextButton.class("customButton");
    this.greeting.class("greeting");
    this.Text.class("greeting");
    this.Text1.class("greeting1");
    this.Text2.class("greeting2");
    this.Text3.class("greeting2");
    this.Text4.class("greeting2");
    this.Text5.class("greeting2");
     this.Text6.class("greeting2");
     this.tVaText.class("greeting2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.input4.hide();
    this.Text1.hide();
    this.Text2.hide();
    this.Text3.hide();
    this.Text4.hide();
    this.Text5.hide();
     this.Text6.hide();
     this.tVaText.hide();
  }

  handleMousePressed(){
    this.playButton.hide();
    var mess = `Resgistration Form`;
    this.Text.html(mess);
    var mess2 = `school registartion number`;
    this.Text2.html(mess2);
    var mess3 = `adress of the school`;
    this.Text3.html(mess3);
    var mess4 = `mail-id of the school`;
    this.Text4.html(mess4);
    var mess5 = `phone no.`;
    this.Text5.html(mess5);
        var mess6 = `No. of students in school`;
    this.Text6.html(mess6);
    var mess1 = `School name`;
    this.Text1.html(mess1);
       var mess7 = `total vaccination needed`;
    this.tVaText.html(mess7);
    this.nextButton.mousePressed(()=>{
    this.input.hide();
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.input4.hide();
    this.Text1.hide();
    this.Text2.hide();
    this.Text3.hide();
    this.Text4.hide();
    this.Text5.hide();    
    this.Text2.hide();
    this.Text3.hide();
    this.Text4.hide();
    this.Text5.hide();
    this.nextButton.hide();
    school.schoolname = this.input.value();
    school.registrationNumber = this.input1.value();
    school.location = this.input2.value();
    school.mailId = this.input3.value();
    school.phoneNumber = this.input4.value();
    school.numberOfStudents = this.input5.value();
    school.index = schoolCount;
    schoolCount += 1;
    school.addschool();
    school.updateCount(schoolCount);

    })
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
