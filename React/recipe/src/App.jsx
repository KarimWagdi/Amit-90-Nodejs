import './App.css'
import FoodList from './components/FoodList'
import Nav from './components/Nav'
import Search from './components/Search'
import { useState } from 'react'

function App() {
    const [foodData, setFoodData] = useState([])
  return (
  <>
    <Nav />
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <FoodList foodData={foodData}/>
  </>
  )
}

export default App
