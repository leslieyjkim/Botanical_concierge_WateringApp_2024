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

  return (
    <>
      <Header amount={plantsArr.length}/>
    <main>
      <PlantList plants={plantsArr}/>
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