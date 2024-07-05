import Slider from "../../components/Slider";
import { useState,useEffect } from "react"
import {Container} from './styles'
import { getTopSeries } from "../../services/getData";

function Series(){
  const [topSeries, setTopSeries] = useState();

useEffect(() => {
  async function Series(){

    Promise.all([
      getTopSeries()
    ])

   .then(([topSeries]) =>{
    setTopSeries(topSeries)
   
   })
   .catch((error) => console.error(error) )
  }
Series()
}, [])




return(
    <Container>
       
      {topSeries && 
      
      (< Slider info={topSeries} title={'Series'}  />
  )}
                            
    </Container>
)
}

export default Series