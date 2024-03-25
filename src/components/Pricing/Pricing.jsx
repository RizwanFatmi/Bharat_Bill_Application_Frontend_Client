import React, {useEffect} from 'react'
import PricingSlider from './PricingSlider'
import PricingSearchCard from './PricingSearchCard'
import CreateFreeAccount from '../Home/CreateFreeAccount'


const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <>

    <PricingSlider />
    <PricingSearchCard /> 
    <CreateFreeAccount />

   
    </>
  )
}

export default Pricing