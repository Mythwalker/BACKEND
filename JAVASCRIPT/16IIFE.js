//Immediately Invoked Function Expression(IIFE)

//global scope ke polution ya variable ko saaf karne ke liye IIFE use karte hai

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')