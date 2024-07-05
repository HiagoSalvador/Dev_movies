import Slider from '../../components/Slider';
import {Container}from './styles'
import {getMoviesChanges} from '../../services/getData'
import { useState,useEffect } from 'react'


function Movies(){
const [movie, setMovie] = useState();


useEffect(() => {
  async function Movies(){
  
   
   Promise.all([
  getMoviesChanges()

  ])

  .then(([movie]) => {
    setMovie(movie)
  
  })
.catch((error) => console.error(error) )
}
Movies()
}, [])




return(
    <Container>
      
  
      { movie && <Slider info={movie} title={'Filmes'} />}  
      
                            
    </Container>
)
}

export default Movies