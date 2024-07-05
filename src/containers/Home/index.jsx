
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect, } from 'react'
import Slider from '../../components/Slider'
import { getImages } from '/src/containers/utils/getImages.js'
import Modal from '../../components/Modal'
import { getMovies, getPersonPopulares, getPopularSeries, getTopMovies, getTopSeries } from '../../services/getData'



function Home() {
  const Navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const [movies, setMovies] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [personPopulares, setPersonPopulares] = useState()

 

  useEffect(() => {
    
    async function getAllData() {
      console.time('time')
      
         Promise.all([
          getMovies(),
          getTopMovies(),
          getTopSeries(),
          getPopularSeries(),
          getPersonPopulares()
        ])

         .then(([movies,topMovies, topSeries, popularSeries,personPopulares]) => {
        setMovies(movies)
        setTopMovies(topMovies)
        setTopSeries(topSeries)
        setPopularSeries(popularSeries)
        setPersonPopulares(personPopulares)
    })
    .catch((error)  => console.error(error) )
    console.timeEnd('time')
   }
    getAllData()
  }, [])




  return (
    <>
      {movies && (
        <Background img={getImages(movies.backdrop_path)}>
          {showModal && <  Modal movieId={movies.id} setShowModal={setShowModal} />}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>

                <Button red onClick={() => Navigate(`/detalhe/${movies.id}`)}  >Assista agora</Button>
                <Button onClick={() => setShowModal(true)} > Assista o trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movies.poster_path)}
                alt="capa-do-filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
      {popularSeries && <Slider info={popularSeries} title={'Series Populares'} />}
      {personPopulares && <Slider info={personPopulares} title={'Pessoas Populares'} />}
    </>
  )
}

export default Home