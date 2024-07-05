import Slider from '../../components/Slider'
import Credits from '../../components/Credits'
import SpanGenres from '../../components/SpanGenres'
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from '../../services/getData'
import { getImages } from '../utils/getImages'
import {Container, BackGround, Cover, Info, ContainerMovies}from './styles'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Detail(){
    const {id} = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [similar, setSimilar] = useState()


    useEffect(() => {
        async function Detail() {
           
             Promise.all([
              getMovieById(id),
              getMovieVideos(id),
              getMovieCredits(id),
              getMovieSimilar(id),
            ])
    
             .then(([movie, movieVideos, movieCredits, similar]) => {
            setMovie(movie)
            setMovieVideos(movieVideos)
            setMovieCredits(movieCredits)
            setSimilar(similar)
        })
        .catch((error)  => console.error(error) )
       
       }
        Detail()
      }, [])




return(
    <>
    { movie && (
     <>     <BackGround  image={ getImages(movie.backdrop_path)}  />
<Container>
    <Cover>
        <img src={getImages(movie.poster_path)} />
    </Cover>
    <Info>
    <h2>{movie.title}</h2>
    <SpanGenres  genres={movie.genres}  />
    <p>{movie.overview}</p>
    <div>
   <Credits credits={movieCredits}   />
    </div>
    <div>Créditos</div>

    </Info>
</Container>
<ContainerMovies>
{movieVideos && movieVideos.map(video =>(
    <div key={video.id}>
   <h4>{video.name}</h4>
   <iframe
   src={`https://www.youtube.com/embed/${video.key}`}
   title="Youtube Video Player"
   height="500px"
   width="100%">
</iframe>

    </div>
))}
</ContainerMovies>
{similar && <Slider info={similar} title={'Filmes Similares'} />}  
</>
)}
</>
    
)

}

export  default Detail