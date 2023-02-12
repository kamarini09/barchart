"use strict";

window.addEventListener("load" , init);

const model = [8, 12, 31, 22, 3, 1, 24, 29, 15, 9, 17, 18, 21, 33, 25, 3, 5, 11, 14, 23, 31, 7, 27, 19, 20, 30, 10, 6, 4, 13, 26, 30, 5, 30, 4, 15, 30, 28, 16];


function init(){
console.log("init");
loop();
}

//we have to run modifyModel and displayData one after the other
function loop(){
    modifyModel();
    displayData();
    setTimeout(loop,1000);
    
}

//we dont have data so we just use this to generate the number of customers
function getNumberOfCustomers(){
    return Math.floor(Math.random()*32);
}

//takes the model and modifies the css
function displayData(){
    for (let i=0; i<model.length; i++){
        const sizeModel = model[i];
        const bar = document.querySelectorAll(".bar")[i];

        bar.style.height = sizeModel + "px";

    }
}
 
//i want to do the something similar with the count array
function modifyModel(){
    //removesthe first value of the array
    model.shift();
    //adds a random number at the end
    model.push(getNumberOfCustomers());
    console.log(model);
}



