// we have to make a function which will change value of X=> O every time it is called;

var turn="X"
let reset =$('#reset');
reset.on('click',undo);

function change(){
    if(turn==="X"){
        turn="O"
    }
    else{
        turn="X"
    }
    return turn;
}

function tapSound(){
    let audio1=new Audio("./sounds/tom-1.mp3");
     audio1.play();
}


function changePlayer(){
    $('p')[0].innerHTML= "turn of " + " " + turn;
}


// RESET BUTTON

function undo(){
    let allBox=$('.box');
    for (let i = 0; i < allBox.length; i++) {
       allBox[i].innerHTML="";
       change();
       $('#control p')[0].innerHTML="turn of " + change();
        
    }
    $('#won').css('width','0%');
    $('#vs').css('width','0%');
    document.getElementsByTagName('span')[0].innerHTML="";
    document.getElementsByTagName('span')[1].innerHTML="";
    arrayText=[];
    $('#control p').removeClass("bold");
    $("#output-name").css('display','none');

 
    document.getElementsByTagName('input')[0].value="";
    document.getElementsByTagName('input')[1].value="";

}

// WIN LOGIC

function chekWin(){
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        let boxtext=$(".box");
        if((boxtext[e[0]].innerHTML)===(boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML)===(boxtext[e[2]].innerHTML) && boxtext[e[0]].innerHTML!==""){
            $(".box"). off('click'); 
            $('#control p')[0].innerHTML= boxtext[e[1]].innerHTML+" WON";
            $('#control p').addClass("bold");
      
             $('#won').css("width","12vw");
           
            
            arrayText=[];
            setTimeout(() => {
               undo();
            }, 3000);
        }

    });
}



let allBox=document.getElementsByClassName("box");
let arrayText=[];
for (let i = 0; i < allBox.length; i++) {

    allBox[i].addEventListener('click', ()=>{
        if( allBox[i].innerHTML===''){
            
            allBox[i].innerHTML=turn;
            
            if(allBox[i].innerHTML=="X"){
                arrayText.push("X");
            
        }
    
        else{
            arrayText.push("O");
    
        }
       console.log(arrayText);

            tapSound();
            change();
            changePlayer();
            chekWin();

            if(arrayText.length==9){
                arrayText=[];
                $('#control p')[0].innerHTML=" DRAW ";
                $('#control p').addClass("bold");

                setTimeout(() => {
                    
                    undo();
                }, 2000);
            }
          



        }

        else{
            let audio2=new Audio("./sounds/red.mp3");
            audio2.play();
         
        }
     


       
       
    })
    
}






