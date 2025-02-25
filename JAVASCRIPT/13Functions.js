function MyName(){
    console.log("O");
    console.log("M"); 
}
// MyName()
//without parethesis the function can not be executed 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function login(username){
    if(!username){
        console.log("Enter a name");
        return
    }
    return `${username} just logged in`
}

// console.log(login("Om"));
//if any value is not given then "undfined just login" is printed

//... is rest/spread operator 
//if ... is not used then it will print only first value that is 20
function CalculateCartPrice(...num1){
    return num1;
}
// console.log(CalculateCartPrice(20,40,20));//[20,40,20]

function CalculateCartPrice(num2,num3,...num1){
    return num1;
}
// console.log(CalculateCartPrice(10,20,30,40));
//[30,40] is printes bcz 10 is for num2 20 for num3 and we are returning only num1 so rest other values after first two will be executed for num1


/*How to pass objects to function */
//user object cretated
const user={
    itemID:"Plate",
    price: 200
}
function Handelobject(anyobject){
    console.log(`Item is ${anyobject.itemID} and price is ${anyobject.price}`);
}
// Handelobject(user);//Item is Plate and price is 200

//another way to access object, no need to create object
Handelobject({
    itemID:"Cup",
    price:300
})//Item is Cup and price is 300


/* Passing arrays in function*/
const myNewArray=[20,30,40,50]
function returnArray(getValue){
    return getValue[1]
}
// console.log(returnArray(myNewArray));//30
// console.log(returnArray([10,20,30]))//20
