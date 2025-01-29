let myDate=new Date()
// console.log(myDate); //2025-01-28T12:38:04.838Z
// console.log(myDate.toString()) //Tue Jan 28 2025 12:38:50 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())//Tue Jan 28 2025
// console.log(myDate.toISOString())//2025-01-28T12:40:52.537Z
// console.log(myDate.toJSON())//2025-01-28T12:40:52.537Z
// console.log(myDate.toLocaleDateString())// 1/28/2025
// console.log(myDate.toLocaleTimeString())// 12:40:52 PM

//type of date is OBJECT

//to declare specific date

let newDate= new Date(2024,0,23) //year,month,date,hrs,min,sec and so on
console.log(newDate.toDateString());//Tue Jan 23 2024

//In JS months start with "0"

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")//in custom format month start from 1
let myCreatedDate = new Date("01-14-2023")


let myTime=Date.now()
// console.log(myTime);//1738068595715
// console.log(myCreatedDate.getTime());//to get time of specific date  1673654400000

// console.log(Math.floor(Date.now()*1000));//to get time in sec


// let newDate2= new Date()
// console.log(newDate.getDay);
// console.log(newDate.getFullYear);
// console.log(newDate.getHours);//and so on









