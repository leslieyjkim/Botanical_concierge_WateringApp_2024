import { useState } from 'react'
import './App.css'
import PlantList from "./components/PlantList";
import Header from "./components/Header";

import { plantsArr } from "./data/plantData";

//const [count, setCount] = useState(0)
//useState Hook (React functionality that you "hook" into)
//Something available if you want to use it, you hook into it.
//purpose of useState Hook : Giving you a reactive state (everytime the value changes, it will cause the page to rerender)

function App() {

  const [plants, setPlants] = useState(plantsArr);     
  //Hey, let's have a 'state' called 'plants' and the way to change it will be called 'setPlants'.
  //And I'll use 'useState' hook.And the original data will be 'plantsArr' that we have. 
  //Finally, I can control my data from the webpage's rightclick: 'inspect' -> components'
  //I can update the watered date on there, it will be applicable & updated on the page real time.
  

  //below: If I want to update the specific plant's watered date with function called 'updateWateredDate'
  const updateWateredDate = (plantId) => {   //I need to know plantId
    const plantToUpdate = plants.find((plant) => plant.id === plantId) //Hey,plants, can you find the plant where the ID matches the plantId of my function?
    //above, we can use 'find'method on data of 'array' : plantsArr
    plantToUpdate.lastWatered = new Date().toLocaleDateString() 
    //Hey,plantToUpdate, you know your lastWatered date right? I want to change it to today.
    setPlants(plants) //Once we have that, I want to setPlants to plants. Because I mutated the data inside it. 
  }

  return (
    <>
      <Header amount={plants.length}/>   
    <section>
      <button onClick={() => updateWateredDate("1")}>Plant 1</button> 
      <button onClick={() => updateWateredDate("2")}>Plant 2</button>
      <button onClick={() => updateWateredDate("3")}>Plant 3</button>
      <button onClick={() => updateWateredDate("4")}>Plant 4</button>
      <button onClick={() => updateWateredDate("5")}>Plant 5</button>
      <button onClick={() => updateWateredDate("6")}>Plant 6</button>
      <button onClick={() => updateWateredDate("7")}>Plant 7</button>
      <button onClick={() => updateWateredDate("8")}>Plant 8</button>
      <button onClick={() => updateWateredDate("9")}>Plant 9</button>
      <button onClick={() => updateWateredDate("10")}>Plant 10</button>
    </section> 
    <main>
      <PlantList plants={plants}/>
    </main>
    </>
  )//Above, in the button,
  //"1" we put the string with number, because this is what we're dealing with in the Id.
  //{() => updateWateredDate("1")} The reason we wrapped inside anonymous function is...
  //because we need to update wateredDate when I click,
  //not to want to do the result of it. It's like a normal callback. 
}

export default App


//Import once in App.jsx,
//and give it to Header and PlantList. 
//This would be efficient way instead of seperated each import.
//Because, the data in React goes from the top to the bottom.
//like, from the parent to the children.
//which means, PlantList can't give data to Header. 
//So, I added line 6, import { plantsArr } from "./data/plantData"; 
//Now, Data comes from top to bottom from 1 source. 