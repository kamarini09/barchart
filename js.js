"use strict";

window.addEventListener("load" , init);

const model = [8, 12, 31, 22, 3, 1, 24, 29, 15, 9, 17, 18, 21, 33, 25, 3, 5, 11, 14, 23, 31, 7, 27, 19, 20, 30, 10, 6, 4, 13, 26, 30, 5, 30, 4, 15, 30, 28, 16];
const queueSize = getNumberOfCustomers();


function init(){

}

//we have to run modifyModel and displayData one after the other
function loop(){

}

//we dont have data so we just use this to generate the number of customers
function getNumberOfCustomers(){
    return Math.floor(Math.random()*32);
}

//takes the model and modifies the css
function displayData(){

}

//i want to do the same with the count array
function modifyModel(){

}