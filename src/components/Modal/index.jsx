import { useEffect, useState } from 'react'
import {Container, BackGround,Button}from './styles'
import {getMovieVideos} from '../../services/getData'

function Modal({movieId, setShowModal}){
    const[movie, setMovie] = useState ()

    



    useEffect(() => {
        
        async function getMovies(){
          
         setMovie (await  getMovieVideos(movieId))
        }


       getMovies()
      }, [])

 
 

      return (
        
        <BackGround  onClick={() => setShowModal(false) } >
          <Container>
            {movie  && (
              <iframe
                src={`https://www.youtube.com/embed/${movie[0].key}`}
                title="Youtube Video Player"
                height="500px"
                width="100%"
              >
                
              </iframe>
            )}
            <Button onClick={() =>setShowModal (false)}> X</Button>
          </Container>
        </BackGround>
      );
    };

    export default Modal