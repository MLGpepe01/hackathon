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

    function hideFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
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
    
    $(document).keydown(function(e){
       var currentPosit = battleship.style.top;
       //if (currentPosit.empty){
        //   currentPosit === "0px";
       //}
       var regEx = /(\d*)/;
       var nopx = regEx.exec(currentPosit);
       var battshipPosition = parseInt(nopx);
       if(e.which === 38){
           currentPosit = (battshipPosition - 10) + "px"; 
       } 
    });
    

/*global $*/

var score = 1;
var interval= Math.floor(Math.random()*10);

    function prepare(){
        $( ".enemy" ).each(function(index, element) {
            console.log(index);
        var $element = $(element);
        var origin = Math.floor((Math.random() * 460) + 1);
        $element.css("left", origin);
        console.log(origin);
    });
    }
    

$(document).ready(function() {
    prepare();
    powerup();
    setInterval(function(){
    
        console.log("1 second");
        fall();
        powerfall();
    },
    50);
    //just change the number 5000 to adjust the time that should pass before the code is executed again (1000ms is 1 second).
    
    
    
    
    
    
    
    

    function powerset(){
        var left = Math.floor((Math.random() * 460) + 1);
        var height = $(".powerup").position().top;
        console.log(left);
        $(".powerup").css("top",$(".powerup").position().top - height);
        $(".powerup").css("left", left);
        powerup();
    }
    
    function enemyset(element){
        var left = Math.floor((Math.random() * 460) + 1);
        var height = $(element).position().top;
        console.log(left);
        $(element).css("top",$(element).position().top - height);
        $(element).css("left", left);
    }

    function fall(){
        $( ".enemy" ).each(function(index, element) {
            var interval2= Math.floor(Math.random()*10);
            var $element = $(element);
            var offset= $element.position().top;
            var gameWidth = $('#game').width() - $element.width();
            if ( offset < gameWidth){
               $element.css("top", offset + interval2);
            }
            collission($element);
        });
    }
    
        
    
    function collission(element) {
    var blueLeft = $("#paddle").offset().left;
    var redLeft = element.offset().left;
    var blueRight = blueLeft + $("#paddle").width();
    var redRight = redLeft + element.width();
    var blueUp = $("#paddle").offset().top;
    var redDown = element.offset().top;
    var blueDown = blueUp + $("#paddle").height();
    var redUp = redDown + element.height();
    if(blueDown > redDown && blueUp < redUp && blueRight > redLeft && blueLeft < redRight) {
        console.log("hit");
        $("#counter").text(score++);
        $("#key").text("Nice you caught a body!!! (i couldn't find an accurate represenation of an actual body)")
        element.remove();
        createnemy();
    } else if (element.position().top > 470) {
        element.css("top",element.position().top - element.position().top);
        enemyset(element);
    } 

}

    function createnemy(){
        var math = Math.floor(score/2);
        
        for(var i= 0; i < math ; i = i +1){
            
            var div = document.createElement('div');

            div.className = 'enemy';
        
            document.getElementById('content').appendChild(div);
        
            enemyset(div);
        
        }
        
    }

$("body").keydown(function(event) {
    var offset= $("#paddle").position().left;
    var interval2= 25;
    var gameWidth = $('#game').width() - $("#paddle").width();
    console.log(offset);
    console.log($("#game").width());
    if (event.keyCode ===37 && offset > 0) {
        
        $("#paddle").css("left", offset -interval2);
        
    } else if (event.keyCode === 39 && offset < gameWidth){
        $("#paddle").css("left", offset +interval2);
    } else{
        return;
    }
});
});

 
 
    function powerdetermine(){
        var img = $(".powerup").src;
        if( img == "images/power0.jpg" ){
            setInterval(function(){
               var i = 1;
               i ++;
               console.log(i+"time left");
               if ( i < 50){
                interval/2;
               }
            },
            250);
        } else if ( img == "images/power1.jpg" ){
            setInterval(function(){
               var i = 1;
               i ++;
               console.log(i+"time left");
               if ( i < 50){
                interval*2;
               }
            },
            250);
        } else if ( img == "images/power3.jpg" ){
            setInterval(function(){
               var i = 1;
               i ++;
               console.log(i+"time left");
               if ( i < 50){
                $("#counter").text(score - 1);
               }
            },
            250);
        } else if ( img == "images/power4.jpg" ){
            setInterval(function(){
               var i = 1;
               i ++;
               console.log(i+"time left");
               if ( i < 50){
                $("#counter").text(score++);
               }
            },
            250);
        }
    }
    


$("#planet"). click()


