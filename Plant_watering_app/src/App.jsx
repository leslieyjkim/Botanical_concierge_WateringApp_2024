import { useState } from 'react'
import './App.scss'
import PlantList from "./components/PlantList";
import Header from "./components/Header";

import { plantsArr, plantsObj } from "./data/plantData";  //I made 2 version to contrast both plantsArr and plantsObj

//const [count, setCount] = useState(0)
//useState Hook (React functionality that you "hook" into)
//Something available if you want to use it, you hook into it.
//purpose of useState Hook : Giving you a reactive state (everytime the value changes, it will cause the page to rerender)

function App() {

  const [plants, setPlants] = useState(plantsObj);     
  //Hey, let's have a 'state' called 'plants' and the way to change it will be called 'setPlants'.
  //And I'll use 'useState' hook.And the original data will be 'plantsArr' that we have. 
  //Finally, I can control my data from the webpage's rightclick: 'inspect' -> components'
  //I can update the watered date on there, it will be applicable & updated on the page real time.
  const plantList = Object.values(plants)

  //below: If I want to update the specific plant's watered date with function called 'updateWateredDate'
  const updateWateredDateArr = (plantId) => {   //I need to know plantId
    const plantToUpdate = plants.find((plant) => plant.id === plantId); //Hey,plants, can you find the plant where the ID matches the plantId of my function?
    //above, we can use 'find'method on data of 'array' : plantsArr
    const plantToUpdateIndex = plants.findIndex((plant) => plant.id === plantId);
    const updatedPlant = {...plantToUpdate};
    updatedPlant.lastWatered = new Date().toLocaleDateString(); 
    const updatedPlants = [...plants]; //Hey, updatedPlants, let's create a copy of the plantsArray. And I want to put my 'updatedPlant' in this newly Array. I don't know the index, so added line26
    updatedPlants[plantToUpdateIndex] = updatedPlant; //Hey, updatedPlants, you know the position of the plant to update index,(yeah) I want to put my 'updatedPlant' in there to replace one.
    setPlants(updatedPlants); //Once we have that, I can give setPlants to updatedPlants.
  };
  //Problem: nothing updated. Because React thinks that plants(line15) and plants(line31) are same object, so nothing change-> nothing to do.
  //So, in the above, we deal with Array,
  //in the below, we deal with Object.
  //I don't want to change the original, but I want to make new plant. So added line27./and update line27.

  const updateWateredDate = (plantId) => {
    const plantToUpdate = {...plants[plantId]};
    plantToUpdate.lastWatered = new Date().toLocaleDateString(); 

    const updatedPlants = {...plants, [plantId]: plantToUpdate };
    //the spreaded version of the plantsObj,
    //but then Hey, you know what the position of the plantId?
    //we should put the plantToUpdate there.
    //In this version(OBJ), since we dealing w/ keys, so we can directly target elements more clearly than Array version.
    setPlants(updatedPlants);
  };

  const waterAllPlants = () => {
    const updatedPlants = { ...plants };

    for (const plantId in plants) {
      const updatedPlant = { ...plants[plantId] };

      updatedPlant.lastWatered = new Date().toLocaleDateString();

      updatedPlants[plantId] = updatedPlant;
    }

    setPlants(updatedPlants);
  };

  return (
    <>
      <Header amount={plantList.length}/>   
    {/* <section>
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
    </section>  */}
    <main>
      <button 
        onClick={waterAllPlants}
        style={{
          backgroundColor: '#18b2b5',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer' 
        }}
      >WATER EVERYGTHING! 💦</button>
      <PlantList plants={plantList} updateWateredDate={updateWateredDate} /> 
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