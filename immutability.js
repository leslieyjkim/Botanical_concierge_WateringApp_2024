//Lecture note

// Immutability vs mutability


let bob = "Bob";
let bobby = "Bob";

Bob = "Robert";

console.log(bobby); //it should be showing 'bob'

//In JavaScript, when you assign a variable to another variable, you are copying the value stored in the first variable, not creating a reference to it. 
//So, even if you change the value of the first variable later on, it won't affect the second variable.
//In this case, when you assign bob to bobby, you're copying the value "Bob" to bobby. Later, when you change the value of bob to "Robert", it doesn't affect the value stored in bobby.
//So, when you console.log(bobby), it will print "Bob", because bobby still holds the original value assigned to bob.


let user = { name: "Chicken", isAdmin: true };
let anotherUser = user;
user.name = "Pollo";

console.log(anotherUser); // { name: "Pollo", isAdmin: true }



let yetAnotherUser = { ...user };  //spread a content of user inside the new object. 
console.log(yetAnotherUser); // { name: "Chicken", isAdmin: true }, because it has different structure with new object.

user === anotherUser; // true, because they refere to same structure.



const studentGrades = { results: [90, 80, 95], student: "Bobby" };
const anotherStudent = { ...studentGrades }; // shallow copy
anotherStudent.results = [...studentGrades.results];

studentGrades.student = "Jill"; //Jill의 이름으로 바꾸라고 지령을 내린 것임. 
console.log(anotherStudent); //result: { results: [90, 80, 95], student: "Bobby" } 이렇게 나옴. jill이름이 아님. 

studentGrades.results.push(100); //push new score
console.log(anotherStudent); //result: { results: [90, 80, 95, 100], student: "Bobby" } 이렇게 나옴. 이건 shows up!  변경되어서 나왔지?