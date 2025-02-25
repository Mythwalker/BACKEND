const user = {
    username:"om",
    ID:1022,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        
    }
}
//"this" defines context of present things
user.welcomeMessage()//om //here om is current context
// user.username = "sam"//context is changed to sam
// user.welcomeMessage()//sam 

//console.log(this); // prints contxt of every scenario

// function chai(){
//     let username = "om"
//     console.log(this.username);
// }//undefined bcz this is used in objects only
//chai()


// const chai = function(){
//     let username = "om"
//     console.log(this.username);
// }//same undefined
//chai()


//arrow function

// const chai = () =>{
//     let username = "om"
//     console.log(this.username);
// }//same undefind
// //chai()

//arrow syntax
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

const addTwo=(num1,num2)=> num1+num2;//another  way remove return

//if wraped in {} return is necessary else not
const add=(num1,num2)=> (num1+num2);

// console.log(addTwo(3,4));//7

const Two = (num1, num2) => ({username: "om"})//object
console.log(addTwo(3,4));//om



