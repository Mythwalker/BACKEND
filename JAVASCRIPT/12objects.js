//objects can be derived in two ways: 
//literals
//constructors
//singleton:-in simple lang. creates unique objects made from constructor

//from literals the objects has its many instances

const a2=new Object() //sigleton object

//LITERALS

const muSym=Symbol("key1")

const a1={ //non-singleton object
    name:"Om",//in system "name" is conidered as string
    age:19,
    city:"Pune",
    email:"user@gmail.com",
    isLoggedIn:false,
    arr1:[1,2,3],
    [muSym]: "myKey1",//to access symbol in obj use []
    "full name": "Om Dongare"
} 

// console.log(a1.email);//basic syntax
// console.log(a1[name]);//another way to access obj
// console.log(a1["full name"]);//"full name" can't be accessed with basic syntax bcz of "" used.
// console.log(a1[muSym]);//to access symbols in obj

//to change values
a1.email="example@gmail.com"
// Object.freeze(a1)  //this value now can't be changed

a1.email="example@outlook.com"
// console.log(a1.email);//will not show any error but "example@outlook.com" is not printed "example@gmail.com" is printed bcz of freeze

//adding function to obj
a1.greeting = function(){
    console.log("Hello");
}
// console.log(a1.greeting());

a1.greeting2 = function(){
    console.log(`Hello,${this.name}`);
}
// console.log(a1.greeting2());



const InstaUser = {}

InstaUser.id = "123abc"
InstaUser.name = "Sammy"
InstaUser.isLoggedIn = false

// console.log(InstaUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {    //nesting objects in objects in objects
        userfullname: {
            firstname: "Om",
            lastname: "Donagre"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4)//merge all values of obj2 and 1 in obj3
// console.log(obj3);

const obj5 = {...obj1, ...obj2} //most used
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //all below values datatype is arrays
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Om"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //instructor is nickname for courseInstructor

// {  //json   in json keys are always in ""
//     "name": "hitesh",
//     "coursename": "js",
//     "price": "free"
// }




