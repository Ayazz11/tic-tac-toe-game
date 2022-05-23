function storePlayers(){


    let input1=$('input')[0].value;
    let input2=$('input')[1].value;
    if(localStorage.getItem('players')===null){
        let store=[];
        store.push(input1,input2);
        localStorage.setItem('players',JSON.stringify(store));
    }
    else{
        store=JSON.parse(localStorage.getItem("players"));
        store.push(input1,input2);
        localStorage.setItem('players',JSON.stringify(store));
    }
    
   
    displayName();

}

function displayName(){
    document.getElementsByTagName('input')[0].value="";
    document.getElementsByTagName('input')[1].value="";

    let arrayPlayers=JSON.parse(localStorage.getItem('players'));
    let name1=arrayPlayers[arrayPlayers.length-2];
    let name2=arrayPlayers[arrayPlayers.length-1];

    document.getElementsByTagName("span")[0].textContent=name1 + " - (X)";
    document.getElementsByTagName("span")[1].textContent=name2 + " - (O)";
    $('#vs').css('width','5%');
    $('#vs').css('display','inline-block');

}


let addbtn=$('#add');
addbtn.on('click',function(){
    $("#output-name").css('display','block');
    storePlayers();
})




