import React, {useEffect} from 'react'
import Slider from './Slider';
import Features from './Features.';
import HowItWork from './HowItWork';
import Info from './Info';
import CreateFreeAccount from './CreateFreeAccount';



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      },[]);
    return (<>
<Slider />
<Features />
<HowItWork />
<Info />
<CreateFreeAccount />    
    </>)
}

export default Home;