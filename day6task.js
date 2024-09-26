// ques 1 //
var details={
    car:"rolex",
    model:"sports",
    year:"1981",
}
console.log(details);
Object.freeze(details);
details.car="rolls royce";
console.log(details);
 
// ques 2 //
var user={
    name:"thriveni",
    age:22,
    email:"thrivenireddy@gmail.com",
}
 console.log(user);
 Object.freeze(user);
 user.name="lakshmi",
 console.log(Object.isFrozen(user));

 // ques3 //
var product={
    name:"mobile",
    category:"eletronic",
    price:"20000",
}
console.log(product);
Object.seal(product);
price:10000
console.log(Object.isSealed(product));

// ques4 //
 var laptop={
    brand:"Hp",
    model:"xps 15",
    price:"65000",
 }
 console.log(Object.keys(laptop));
laptop.Rate="65000",
console.log(Object.keys(laptop));

//ques5//
var house={
    location:"rentachintala",
    price:"30lakh",
    size:"800sqmeters",
}
console.log(Object.values(house));
house.furniture="fan,ac,fridge",
house.price="25lakh",
console.log(Object.values(house));

//ques6//
var smartphn={
    brand:"vivo",
    model:"iq neo",
    price:"29000",
}
console.log(smartphn);
Object.seal(smartphn);
smartphn.price="25000";
console.log(smartphn);
console.log(Object.isSealed(smartphn));

//ques7 //
var book={
    title:"ramayanam",
    author:"valmiki",
    publishedyear:"7th centuary",
}
console.log(book);
Object.freeze(book);
book.publishedyear="5th centuary",
console.log(Object.isFrozen(book));

//ques8 //
var person={
    firstname:"thriveni",
    lastname:"ch",
    age:"22",
}
console.log(person);
console.log(Object.values(person));
console.log(Object.keys(person));

//QUES9 //
var course={
    title:"python fullstack",
    instructor:"vamsi sir",
    duration:"7-8months",
}
console.log(course);
// console.log(Object.entries(course));
delete course.duration;
console.log(Object.entries(course));
console.log(course)

//ques10//
// Create an object representing an employee with properties name, position, and salary. Seal the object using Object.seal(),
//  modify the position, and then use Object.keys() to list all properties and verify that no new properties can be added.

var employee={
    name:"thriveni",
    salary:"50k",
    position:"developer",
}
console.log(employee);
Object.seal="position",
position="hr";
console.log(Object.keys(employee));