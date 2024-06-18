import React, { useEffect, useState } from 'react'

const PopularSlider = () => {
    const [data, setData] = useState([])

    useEffect(() => {
  
      const fetchData = async () => {
        const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        const data = await api.json();
  
         //console.log(data.meals);
        setData(data.meals)
      }
  
      fetchData();
    }, [])
  return (
    <>
    
    {data.map((d) => {
        return (
   <div>
   <img src={d.strMealThumb} alt="" style={{ width:'18rem', height:'17rem' }} />
   
   </div>

         
           
         
        )
      })}
</>
    )
}
export default PopularSlider