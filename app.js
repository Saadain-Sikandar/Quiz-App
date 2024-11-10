// Array of Objects

var questions = [
    {
      question: "HTML Stands for",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  ];

  

  var ques = document.getElementById("questions");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var nextBtn = document.getElementById("Nextbtn");
  var index = 0;
  var score = 0;
  var sec = 59;
  var min = 1;
  var timeinterval;


  function timer(){

    var time = document.getElementById("timer");

    time.innerText = `${min}: ${sec}`;
    sec --;
    if(sec<0){
      min --;
      sec = 59;

      if(min < 0){
        min = 0; 
        sec = 0;
        Nextquestion();
      }

    }

  }

  function Nextquestion(){

    sec = 59;
    min = 1;

    var options = document.getElementsByClassName("options");

    for(var i = 0 ;i<options.length;i++){

        if(options[i].checked){
            var selectedOption = options[i].value;
            var getOption = questions[index-1][`option${selectedOption}`];
            var correctAns = questions[index - 1 ][`corrAnswer`];
            if(getOption == correctAns){

              score++;

            }
        }
        options[i].checked = false;
        nextBtn.disabled = true;
    }

    if(index > questions.length-1){

      if(score<=5){

        Swal.fire("You need to work Hard! \n your Score is :"+score);

      }

      else if(score<=7){

        Swal.fire({
          title: "Nice Try, You can do it better",
          text: `your score is ${score}`,
          icon: "success"
        }); 
      }

      else{
        Swal.fire({
          title: "Excellent Work!",
          text: `your score is ${score}`,
          icon: "success"
        }); 

      } 

      clearInterval(timeinterval);

    }

    else{
        ques.innerText = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;

    }

  }

  function Clicked(){

    nextBtn.disabled = false;

  }

  function start(){

   var startQ = document.getElementById("start");

   min = 1 ;
   sec = 59 ;
   Nextquestion();

   startQ.disabled = true;
   timeinterval =  setInterval(timer,100);

  }


