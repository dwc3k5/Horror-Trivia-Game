//
// setInteveral(function(){ alert("Hello");},10000);
// setInterval(function(){ alert("Hello"); }, 3000);
// $(".btn1").click(function(){
//         $("p").fadeOut()
/*MainClock--------------------------------------------------------------------*/
var minDown = 3;
var secDown = 0;
var secQ = 15;
var begun =false;
var currentQ =1;
var question = "question" + currentQ;
var chances = 5;
var livesLeft=0;
var correct=0;
var incorrect=0;
// var q = {
// q1:{},
// q2:{}
// }
/*questions--------------------------------------------------------------------*/
var Questions ={
  question1 :{
    q1: "<h2>Which Stephen King novel features a killer car?</h2>",
    a1:"<button id='a1' class='a1 choices'>Carrie</button>",
    a2:"<button id='a2' class='a2 choices'>Christine</button>",
    a3:"<button id='a3' class='a3 choices'>It</button>",
    a4:"<button id='a4' class='a4 choices'>The Stand</button>",
    aCorrect : "Christine"},
    // aCorrect : "<button id='a2' class='a2 choices'>Christine</button>"},

   question2 :{
    q1:"<h2>What is the name of the android who attacks Ripley in the first Alien movie?</h2>",
    a1:"<button class='choices'>Rook</button>",
    a2:"<button class='choices'>Bishop</button>",
    a3:"<button class='choices'>T0317</button>",
    a4:"<button class='choices'>Bob</button>",
    aCorrect:"Bishop"},

  question3 :{
    q1:"<h2>What is question is repeated by the villain in 'When a Stranger Calls'?</h2>",
    a1:"<button class='choices'>Why are you running from me?</button>",
    a2:"<button class='choices'>have you found me yet?</button>",
    a3:"<button class='choices'>Have you checked the children?</button>",
    a4:"<button class='choices'>Do you want to play a game?</button>",
    aCorrect:"Have you checked the children?"},

  question4:{
    q1:"<h2>The monster from 'It Follows' will fixate on a person until they are dead, or...</h2>",
    a1:"<button class='choices'>They have sex with another person</button>",
    a2:"<button class='choices'>They atone for what they've done</button>",
    a3:"<button class='choices'>They make an adequate sacrifice</button>",
    a4:"<button class='choices'>The creature is banished by an ancient ritual</button>",
    aCorrect:"They have sex with another person"},

  question5:{
    q1:"<h2>How many nights must one survive in Freddy Fazbear's Pizza?</h2>",
    a1:"<button class='choices'>2</button>",
    a2:"<button class='choices'>3</button>",
    a3:"<button class='choices'>4</button>",
    a4:"<button class='choices'>5</button>",
    aCorrect:"5"},

  question6:{
    q1:"<h2>What was the name of the person possessed in 'The Exorcist'?</h2>",
    a1:"<button class='choices'>Reagan</button>",
    a2:"<button class='choices'>Michael</button>",
    a3:"<button class='choices'>Amanda</button>",
    a4:"<button class='choices'>Catherine</button>",
    aCorrect:"Reagan"},

  question7:{
    q1:"<h2>In 'The Omen', Where is the mark of the Devil on Damien?</h2>",
    a1:"<button class='choices'>His back right shoulder</button>",
    a2:"<button class='choices'>His back left shoulder</button>",
    a3:"<button class='choices'>His scalp</button>",
    a4:"<button class='choices'>The bottom of his foot</button>",
    aCorrect:"His scalp"},

  question8:{
    q1:"<h2>Which author created the C'Thulhu mythos?</h2>",
    a1:"<button class='choices'>R.L. Stine</button>",
    a2:"<button class='choices'>H.P. Lovecraft</button>",
    a3:"<button class='choices'>Edgar Allen Poe</button>",
    a4:"<button class='choices'>Brahm Stoker</button>",
    aCorrect:"H.P. Lovecraft"},

  question9:{
    q1:"<h2>In the movie 'Blade' Wesley Snipes character is often also called...</h2>",
    a1:"<button class='choices'>Day Walker</button>",
    a2:"<button class='choices'>Half Breed</button>",
    a3:"<button class='choices'>Defiler</button>",
    a4:"<button class='choices'>Hunter</button>",
    aCorrect:"Day Walker"},

  question10:{
    q1:"<h2>What is the name of the dangerous virus in the Resident Evil series?</h2>",
    a1:"<button class='choices'>The X virus</button>",
    a2:"<button class='choices'>The Omega virus</button>",
    a3:"<button class='choices'>The Alpha virus</button>",
    a4:"<button class='choices'>The T-virus</button>",
    aCorrect:"The T-virus"},

  question11:{
    q1:"<h2>Vicitims of Pennywise are most delicious when they are?</h2>",
    a1:"<button class='choices'>Young</button>",
    a2:"<button class='choices'>Alone</button>",
    a3:"<button class='choices'>Afraid</button>",
    a4:"<button class='choices'>Asleep</button>",
    aCorrect:"Afraid"},

  question12:{
    q1:"<h2>Who's heartbeat is heard in 'A Telltale Heart'?</h2>",
    a1:"<button class='choices'>a lover's</button>",
    a2:"<button class='choices'>an old man's</button>",
    a3:"<button class='choices'>a mother's</button>",
    a4:"<button class='choices'>a child's</button>",
    aCorrect:"an old man's"},

  question13:{
    q1:"<h2>A person has __ days to live after watching the vhs in 'The Ring'?</h2>",
    a1:"<button class='choices'>5</button>",
    a2:"<button class='choices'>7</button>",
    a3:"<button class='choices'>9</button>",
    a4:"<button class='choices'>14</button>",
    aCorrect:"7"},

  question14:{
    q1:"<h2>Which R.L. Stine book features Slappy?</h2>",
    a1:"<button class='choices'>Night of the Living Dummy</button>",
    a2:"<button class='choices'>Welcome to Dead House</button>",
    a3:"<button class='choices'>The Haunted Mask</button>",
    a4:"<button class='choices'>Stay out of the basement!</button>",
    aCorrect:"Night of the Living Dummy"},

  question15:{
    q1:"<h2>In 'Cabin in the Woods' Chris Hemsworth's character, 'Curt', dies when he...</h2>",
    a1:"<button class='choices'>Accidently falls off a cliff</button>",
    a2:"<button class='choices'>Is attacked by a merman</button>",
    a3:"<button class='choices'>Gets attacked by hillbilly zombies</button>",
    a4:"<button class='choices'>Drives a motorcycle into an invisible wall</button>",
    aCorrect:"Drives a motorcycle into an invisible wall"},

  question16:{
    q1:"<h2>During the music video 'Thriller' Michael Jackson is revealed to be a...</h2>",
    a1:"<button class='choices'>vampire</button>",
    a2:"<button class='choices'>werewolf</button>",
    a3:"<button class='choices'>illusion</button>",
    a4:"<button class='choices'>ghost</button>",
    aCorrect:"werewolf"},

  question17:{
    q1:"<h2>Who haunted children's nightmares??</h2>",
    a1:"<button class='choices'>Michael Myers</button>",
    a2:"<button class='choices'>Jason Voorhees</button>",
    a3:"<button class='choices'>Freddy Krueger</button>",
    a4:"<button class='choices'>Pennywise</button>",
    aCorrect:"Freddy Krueger"},

    question18:{
      q1:"<h2>Where did Alfred Hitchcock make his cameo appearance in 'The Birds'?</h2>",
      a1:"<button class='choices'>Drinking a beer in a pub</button>",
      a2:"<button class='choices'>Running from birds at a gas station</button>",
      a3:"<button class='choices'>Dead in a cemetary</button>",
      a4:"<button class='choices'>Walking dogs out of a pet store</button>",
      aCorrect:"Walking dogs out of a pet store"},

    question19:{
      q1:"<h2>Hannibal Lecter first appeared in what film?</h2>",
      a1:"<button class='choices'>The Silence of The Lambs</button>",
      a2:"<button class='choices'>Hannibal</button>",
      a3:"<button class='choices'>Red Dragon</button>",
      a4:"<button class='choices'>Along came a Spider</button>",
      aCorrect:"The Silence of The Lambs"},

    question20:{
      q1:"<h2>In the original ghostbusters, 'The Destructor' manifests in the form of?</h2>",
      a1:"<button class='choices'>A giant black hound</button>",
      a2:"<button class='choices'>Evil versions of the ghostbusters</button>",
      a3:"<button class='choices'>An army of ghosts</button>",
      a4:"<button class='choices'>The Stay Puft Marshmallow Man</button>",
      aCorrect:"The Stay Puft Marshmallow Man"},


};
/*question1placed--------------------------------------------------------------*/

function lose(){
  $("body, html").attr({"background-color":"black",
                        "background-image":""});
  $("body").html("<div class='row'><a href='https://dwc3k5.github.io/Horror-Trivia-Game/'><button id='begin'>Play again?</button></a></div><div class='row'><button id='begin'>You are Dead!</button></div><div class='row'><button>Correct Answers: "+correct+"</button><button>Incorrect Answers: "+incorrect+"</button>");
}

function survive(){
$("body").html("<div class='row'><button id='begin'>You Survived!</button></div><div class='row'><button>Correct Answers: "+correct+"</button><button>Incorrect Answers: "+incorrect+"</button>");
}

function backgroundSwap(){

  $("body,html").css("background-image","url(assets/images/creepyWoods.jpg)");
  $("body,html").css("background-size", "cover");
}

function nextQuestion(){
  $("#q").html(Questions[question].q1);
  $("#a1").html(Questions[question].a1);
  $("#a2").html(Questions[question].a2);
  $("#a3").html(Questions[question].a3);
  $("#a4").html(Questions[question].a4);
}

function scoreTrack(){
  livesLeft++;
  if(livesLeft===1){
    $("#scoreTrack").attr("src","assets/images/ten.png");
  }else if(livesLeft===2){
    $("#scoreTrack").attr("src","assets/images/nine.png");
  }else if(livesLeft===3){
    $("#scoreTrack").attr("src","assets/images/eight.png");
  }else if(livesLeft===4){
    $("#scoreTrack").attr("src","assets/images/seven.png");
  }else if(livesLeft===5){
    $("#scoreTrack").attr("src","assets/images/six.png");
    $("body,html").css("background-image","url(assets/images/creepyWoods.jpg)");
    $("body,html").css("background-size", "cover");
  }else if(livesLeft===6){
    $("#scoreTrack").attr("src","assets/images/five.png");
  }else if(livesLeft===7){
    $("#scoreTrack").attr("src","assets/images/four.png");
    $("body,html").css("background-image","url(assets/images/bloodAlleyBackground.jpg)");
    $("body,html").css("background-size", "cover");
  }else if(livesLeft===8){
    $("#scoreTrack").attr("src","assets/images/three.png");
  }else if(livesLeft===9){
    $("#scoreTrack").attr("src","assets/images/two.png");
  }else if(livesLeft===10){
    $("#scoreTrack").attr("src","assets/images/one.png");
  }else if(livesLeft===11){
    $("#scoreTrack").attr("src","assets/images/zero.png");
  }}

$("button").hover(function(){
  $(this).css("color", "black");
  $(this).css("background-color","red");
}, function(){
  $(this).css("color", "red");
  $(this).css("background-color","black");
});

$(document).on("mouseenter","button",function(){
  $(this).css("color", "black");
  $(this).css("background-color","red");
}).on("mouseleave","button",function(){
  $(this).css("color","red");
  $(this).css("background-color","black");
});





$(".begin").click(function(){
  nextQuestion();
  scoreTrack();
  console.log(Questions[question].aCorrect);
  if(!begun){
  setInterval(function runner(){
  begun = true;
if(minDown>=10){
  if(secDown<10){
    $("#timer").text(minDown+":0"+secDown);
  }else if (secDown>=10){
    $("#timer").text(minDown+":"+secDown);
  }
  if(secDown===0){
    secDown=60;
    minDown--;
  }
  secDown--;
}else{
  if(secDown<10){
    $("#timer").text("0"+minDown+":0"+secDown);
  }else if (secDown>=10){
    $("#timer").text("0"+minDown+":"+secDown);
  }
  if(secDown===0){
    secDown=60;
    minDown--;
  }
  secDown--;
  }
  if(secQ<10){
    $("#qTimer").text("0"+secQ);
  }else{
    $("#qTimer").text(secQ);
  }
  if(secQ<6){
    $("#qHeader").css("color","red");
    $("#qTimer").css("color", "red");
  }else{
    $("#qHeader").css("color","white");
    $("#qTimer").css("color", "white");
  }
  if(secDown<31 && minDown===0){
    $("#timer").css("color","red");
    $("#tHeader").css("color","red");
  }else{
    $("#tHeader").css("color","white");
    $("#timer").css("color", "white");
  }
  secQ--;
  if((secDown===0 && minDown===0)||secQ===-2||livesLeft===11){
    lose();
  }
  if(currentQ===21){
    survive();
  }
},1000);}});


//
// $(document).on("click","#begin",begin());
$(document).on("click",".choices",function(){
  if(this.innerHTML===Questions[question].aCorrect){
    console.log(currentQ);
    correct++;
    secDown += secQ;
    secQ=15;
    if(secDown===0){
      secDown=60;
      minDown--;
    }
    if(secDown>60){
      secDown-=60;
      minDown++;
    }
  }else{
    incorrect++;
    scoreTrack();
    secDown -= secQ;
    secQ=15;
    if(secDown<0){
      secDown+=secQ;
      minDown--;
    }
    if(secDown>60){
      secDown-=60;
      minDown++;
    }
    if(livesLeft===11){
      lose();
    }
  }
  currentQ ++;
  question = "question" + currentQ;
  nextQuestion();
});
