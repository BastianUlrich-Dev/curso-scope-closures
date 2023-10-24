//variables

var a;
var b = 'b';
b = 'bb';
var a = 'aa';

//global scope
var fruit = 'Apple'; //global
function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia';
}