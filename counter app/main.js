let plusButton =  document.getElementById("plus-btn");
let minusButton = document.getElementById("minus-btn");
let displaynumber = document.getElementById("display-num");
let resetButton = document.getElementById("reset-btn")

let counter = 0;

plusButton.onclick = function (){
     
    displaynumber.textContent = counter;

     return counter++
}

minusButton.onclick = function (){

    displaynumber.textContent = counter;
 
    return counter--
}

resetButton.onclick =function (){

displaynumber.textContent = 0;

if(counter > 0){
    counter = 0
}

}
