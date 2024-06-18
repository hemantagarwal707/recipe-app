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
    <div 
    style={{
        width:'90%' ,
        margin:'auto',
        textAlign:'center'
    }}
    >
      <h1>{data.strMeal}</h1>
      <div 
       style={{
       display:'flex'
    }}
      >
        
     <div className="img"
      style={{width:'30%', marginTop:'2rem'}}
      >
        <img src={data.strMealThumb} alt="" style={{width:'18rem'}} />
     </div>
     <div className="content" style={{width:'60%'}}>
     <button className="btn">Ingredient</button>
     <button className="btn" >Instruction</button>

     </div>
      </div>




    </div>
    <div style={{marginTop:'1rem'}}>

    <TrendingSlider />
    </div>
    
    </>
  )
}

export default RecipeId