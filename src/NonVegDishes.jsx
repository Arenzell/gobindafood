import { useState, useEffect } from "react"
import React from 'react'
import FoodCard from "./FoodCard";
// require('dotenv').config()

const NonVegDishes = () => {

  // const key = process.env.REACT_API_KEY;
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(`https://api.spoonacular.com/food/search?apiKey=18dfcf738d3b4fe094ac66414804cbce&query='pork'&number=12`);
    const resData = await res.json();
    setData(resData.searchResults[0].results)
  }

  useEffect(() => {
    getData();  // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='main-body'>
        <div className='food-display-area'>
          {
            (data.length === 0) ? null : data.map((currELe, index) => {
              return (<FoodCard img={currELe.image}
                name={currELe.name}
                content={currELe.content}
                key={index}

              />)
            })
          }
        </div>
      </div>
    </>
  )
}

export default NonVegDishes;