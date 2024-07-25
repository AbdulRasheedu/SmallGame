function bat(){
    console.log('You Chosen Bat');
    computer_choice = Math.round(Math.random()*3);
    if(computer_choice > 0 && computer_choice<=1){
        console.log('computer chosen bat');
    }
    else if(computer_choice <=2){
        console.log('computer chosen ball');
    }
    else{
        console.log('computer chosen stump');
    }
    // alert(computer_choice);
}



 

  