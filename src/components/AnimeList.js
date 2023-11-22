import { Container } from "react-bootstrap"
import { animes } from "../utils/data"
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./footer";

const AnimeList = () => {
  return (
    <div>
      <Container className="container-space" id="animelist">
        <br />
        <h1 className="text-white list-title">ANIME LIST</h1>
        <br />
        <Carousel>
          {
            animes.map((anime) => (
              <Carousel.Item interval={3000} key={anime.title} className="carousel-box">
                <img src={anime.image} alt={anime.title}  className="carousel-image"/>
                <Carousel.Caption className="carousel-caption">
                  <h3>{anime.title}</h3>
                  <div className="detail">
                    Rating: {anime.rating} <br/>
                    Date: {anime.date} <br/>
                    Studio: {anime.studio} <br/>
                    Synopsis:
                  </div>
                  <div className="carousel-sinopsis">{anime.sinopsis}</div>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          }

        </Carousel>
      </Container>
        <div className="footer">
          <Footer/>
        </div>
    </div>
  )
}

export default AnimeList
