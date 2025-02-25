//{} are called scopes
//if it comes with function it is called scope
 

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "om"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//cannot be accessed bcz it is out out of second scope

     two()//prints om bcz it is called in function two

}

// one()

if (true) {
    const username = "om"
    if (username === "om") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);//shows error bcz it is called out of its scope
}

// console.log(username);//om


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)//shows error bcz a variable is assigned to function and it cannot be executed in other words you can't access/call addTwo before it's declaration
const addTwo = function(num){
    return num + 2
}
