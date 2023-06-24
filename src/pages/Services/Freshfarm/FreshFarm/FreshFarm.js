import React from 'react'
import Banner from '../../../Home/Banner/Banner'
import FreshFarmBanner from '../FreshFarmBanner/FreshFarmBanner'
import  Category  from '../Category/Category';
import MostStory from '../MostStory/MostStory';
import './FreshFarm.css'


const FreshFarm = () => {
  return (
    <div>
     
      <FreshFarmBanner></FreshFarmBanner>
      <Category></Category>
      <hr />
      <MostStory></MostStory>
    </div>
  )
}

export default FreshFarm
