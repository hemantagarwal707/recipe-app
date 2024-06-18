import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'


const RecipeId = () => {
  const {idMeal} = useParams()
  // console.log(useParams())

  const [data, setData] = useState([])
  

  useEffect(() => {

    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      const data = await api.json();

      // console.log(data.meals);
      setData(data.meals[0])
      console.log(data)
    }

    fetchData();
  }, [idMeal])

  return (
    <>
    <Navbar />
    <TrendingSlider />
    </>
  )
}

export default RecipeId