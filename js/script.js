/* global $ */
/* global localStorage */
$("document").ready(function(){

//First Page 
   var name="#"
   console.log('hi');

    $("#sumbitName").click(function(){
     name=$("#spaceshipName").val();
     localStorage.setItem('spaceship', name);
     console.log(localStorage.getItem("spaceship"));
     console.log(name);
    });
    
    $("#theName").html(localStorage.getItem('spaceship'));

    $('h1').click(function(){
        $('h1').css('color', 'teal');
        $('h1').text('Click The Button, Do not waste your time clicking the text!');
    });

   
    
    //Thrid Page 
    $("#btn4").click(function(){ 
        alert("Using the Up and Down key you will be able to move your spaceship to battle and defeat them by firing lasers using the space key and collecting items to build your own planet.");
    });
     
     
    });
    $('h1').click(function(){
       alert("You Have A Virus, click on the grey button to remove it"); 
    });
    
    //Forth Page
    
    //Moving the Spaceship
    $("body").keydown(function(event) {
    var offset= $("#battleship").position().top;
    var interval2= 25;
    var gameheight = $('#game').height() - $("#battleship").height();
    console.log(offset);
    if (event.keyCode ===38 && offset > 0) {
        
        $("#battleship").css("top", offset -interval2);
        console.log("up");
        console.log(offset);
        
    } else if (event.keyCode === 40 && offset < gameheight){
        $("#battleship").css("top", offset +interval2);
        console.log("down");
        console.log(offset);
    } else{
        return;
    }
});
    
/* enemies */

var score = 1;
var interval= Math.floor(Math.random()*10);

    function prepare(){
        $( ".enemy" ).each(function(index, element) {
            console.log(index);
        var $element = $(element);
        var origin = Math.floor((Math.random() * 460) + 1);
        $element.css("top", origin);
        console.log(origin);
    });
    }
    
   function enemyset(element){
        var left = Math.floor((Math.random() * 500) + 1);
        var height = $(element).position().top;
        console.log(left);
        $(element).css("top",$(element).position().top - height);
        $(element).css("top", left);
    }

    function fall(){
        $( ".enemy" ).each(function(index, element) {
            var interval2= Math.floor(Math.random()*10);
            var $element = $(element);
            var offset= $element.position().left - 1;
            console.log(offset);
            var gameWidth = $('#game').width() - $element.width();
            console.log(gameWidth);
            
            if ( offset<gameWidth){
               $element.css("left", offset -interval2);
            }
            collission($element);
        });
    }
    
        
    
    function collission(element) {
    var blueLeft = $("#battleship").offset().left;
    var redLeft = element.offset().left;
    var blueRight = blueLeft + $("#battleship").width();
    var redRight = redLeft + element.width();
    var blueUp = $("#battleship").offset().top;
    var redDown = element.offset().top;
    var blueDown = blueUp + $("#battleship").height();
    var redUp = redDown + element.height();
    if(blueDown > redDown && blueUp < redUp && blueRight > redLeft && blueLeft < redRight) {
        console.log("hit");
        $("#counter").text(score++);
        
        element.remove();
        createnemy();
    } else if (element.position().top > 470) {
        element.css("top",element.position().top - element.position().top);
        enemyset(element);
    } 

}

    


$(document).ready(function() {
    prepare();
    setInterval(function(){
    
        console.log("1 second");
        fall();
    },
    50);
});


 $("#planet").click(function(){
    $("#planet").html("<img id='NewImage'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5hvaeoStNuxHsAQF1tUM5q-IqDYMW1VmZwo5qODq4exa1QZl'>");
     
 });
    


