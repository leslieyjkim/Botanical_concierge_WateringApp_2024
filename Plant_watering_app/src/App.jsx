import { useState } from 'react'
import './App.css'
import PlantList from "./components/PlantList";
import Header from "./components/Header";

//const [count, setCount] = useState(0)
//useState Hook (React functionality that you "hook" into)
//Something available if you want to use it, you hook into it.
//purpose of useState Hook : Giving you a reactive state (everytime the value changes, it will cause the page to rerender)

function App() {

  return (
    <>
      <Header />
    <main>
      <PlantList />
    </main>
    </>
  )
}

export default App
