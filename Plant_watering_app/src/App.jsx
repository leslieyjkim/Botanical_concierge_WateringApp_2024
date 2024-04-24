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

  const [plants, setPlants] = useState(plantsArr)     
  //Hey, let's have a 'state' called 'plants' and the way to change it will be called 'setPlants'.
  //And I'll use 'useState' hook.And the original data will be 'plantsArr' that we have. 
  //Finally, I can control my data from the webpage's rightclick: 'inspect' -> components'
  //I can update the watered date on there, it will be applicable & updated on the page real time.
  
  return (
    <>
      <Header amount={plants.length}/>   
    <main>
      <PlantList plants={plants}/>
    </main>
    </>
  )
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