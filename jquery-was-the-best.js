
//#1. jquery grammar, if you want to change CSS
$(".header").css("background-color", "#BADA55"); //This works. Here I have 2 parameters in CSS.
$(".header").css("#BADA55", "background-color" ); //This doesn't work. The 'order'is wrong.Because '"#BADA55"' isn't CSS property.




//#2. ajax grammar
//you can send data to backend, or receive data from backend 
//if I want to send all of these: url, data, method, transferType, responseType, ... 50more
//how would you do that? 
$.ajax("","","","","","")  //This doesn't make sense. 

//Below works. 
//The 'order' doesn't matter. ex) url method data.
//Just give an object with what you know that you want to change.
$.ajax({
  method:"",
  url:"",
  data:"",
})

//If you have lots of function parameter, it gets messy.
//That's why instead to have lots of them, we just use object! 


// href etc, are all called 'attributes'
const link = <a href="" target="" class="" id="" onClick=""/>Link!</a>

{
  href:"",
  target:"",
  ...
}

//When we define something we tell that those are the properties of that thing,
//In the JSX world, you can list them like below;

<PlantListItem id="" className=""/> //list of properties.
//So every pair that you give to a component, such as 'className=""'
//will be assembled in an object of properties.
//And then, 
//what would be the nice name for a shortcut of properties? "PROPS"!!!!!!
