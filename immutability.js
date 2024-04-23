//Lecture note (W7 D2/ by Francis Bourgouin)

// Immutability vs mutability


let bob = "Bob"; // variable bob declares string "Bob" inside it
let bobby = bob; // variable bobby declares "Bob" 

bob = "Robert";  //If I change the "Bob" to "Robert" in first declaration, it doesn't change what bobby has in second declaration. 
 
console.log(bobby); //so it should be returning 'Bob'
//if you want to see the result on console, 'node immutability.js' in terminal

//In JavaScript, when you assign a variable to another variable, you are copying the value stored in the first variable, not creating a reference to it. 
//So, even if you change the value of the first variable later on, it won't affect the second variable.
//In this case, when you assign bob to bobby, you're copying the value "Bob" to bobby. Later, when you change the value of bob to "Robert", it doesn't affect the value stored in bobby.
//So, when you console.log(bobby), it will print "Bob", because bobby still holds the original value assigned to bob.







let user = { name: "Chicken", isAdmin: true };
let anotherUser = user;
let yetAnotherUser = { ...user };  //"spread" : a content of user inside the new object. 

user.name = "Pollo"; //Oh, I want to update the user's name from Chicken to Pollo

console.log(anotherUser); // { name: "Pollo", isAdmin: true } would be returning.
console.log(yetAnotherUser); // { name: "Chicken", isAdmin: true }, because it has different structure with new object containing.


user === anotherUser; // true, because they refer to same structure.
//Because when you build a structure like an object,
//you are essentially building like a 'drawers' with your keys inside each of drawer.
//If I make copy of user to make 'anotherUser',
//both user and anotherUser have each yarn string to the same drawer. 
//We don't copy new drawer structure, we just copy actual yarn string to link.
//which is why either if you change the name in one, it's gonna change it in both. 
//Because they both refer to the same structure. 




const studentGrades = { results: [90, 80, 95], student: "Bobby" };
const anotherStudent = { ...studentGrades }; // shallow copy, 이것만 쓰면 100이라는 새 스코어가 추가된다. 


//const anotherStudent = { ...studentGrades, results:[ ...studentGrades.results] }; //이렇게 쓰거나, 
//위의 문장을 둘로 쪼개서 위의 48번 코드에다가 밑에 anotherStudent.results = [...studentGrades.results];을 적어주면 2단계로 같은 작업을 한다. 100이라는 새 스코어가 추가 되지 않게 한다. 


studentGrades.student = "Jill"; //Jill의 이름으로 바꾸라고 오더를 내린 것임. 
studentGrades.results.push(100); //push new score

console.log(anotherStudent); //result: { results: [90, 80, 95], student: "Bobby" } It wasn't affected by the change-name here. Jill이 안 나옴. 
console.log(anotherStudent); //result: { results: [90, 80, 95, 100], student: "Bobby" } push new scores는 shows up!  변경되어서 나왔지?


//Because in the {result: [], name: ""}, the name: " " is primitive(assigned)
//but, the array is not primitive. array is a structure. referenced (not assigned). 
//the result array is a 'referenced', so this refer to another structure. 
//so that means when we "spread...", what we spread was the reference, 
//we didn't create another refer the elements there. 
//so! it means that every time that you have a structure inside a structure, 
//you will need to spread 'once more'. like below
//anotherStudent.results = [...studentGrades.results];

