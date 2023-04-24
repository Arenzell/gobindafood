
import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
// require('dotenv').config()

const CommonPage = () => {

  const [searchData, setSD] = useState('chicken');

  const getSearchData = (event) => {
    setSD(event.target.value);
  };

  // const key = process.env.REACT_API_KEY;

  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/food/search?apiKey=18dfcf738d3b4fe094ac66414804cbce&query=${searchData}&number=12`
    );
    const realData = await response.json();
    setData(realData.searchResults[0].results);
    setSD("");
    // setData(realData);

    // console.log(typeof (data));
    // console.log(data);
    console.log(process.env.REACT_API_KEY)
  };
  useEffect(() => {
    getData();   // eslint-disable-next-line
  }, [])

  return (
    <>
      <br />
      <br />
      <br />
      <div className="main-body">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search any Food"
            value={searchData}
            onChange={getSearchData}
          />
        </div>
        <button onClick={getData}>Get Dishes</button>
        <br />
        <br />
        {/* <h1>{searchData}</h1> */}
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
  );
};

export default CommonPage;
