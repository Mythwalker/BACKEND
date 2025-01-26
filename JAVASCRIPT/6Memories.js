/* Two types of memories
   Stack(Primitive) & Heap(Non-Primitive)*/

let myName="Om"
let anotherName=myName
anotherName="Om2"
 
console.log(myName) // Om
console.log(anotherName)//Om2 bcz 

let user1={ //it is saved in heap
    email:"example@gmail.com",
    upi:"ex123"
}
let user2=user1;
user2.email="ex345@gmail.com"

console.log(user1.email)
console.log(user2.email)//both values will be same bcz user1 is defined in a heap and user2 is also defined in heap so we cannot store multiple values in a heap. Here latest value is from user2 so for both the references values will be same


