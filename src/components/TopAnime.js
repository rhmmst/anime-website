import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import { animes, topAnime } from "../utils/data"

const TopAnime = () => {
  const topAnimes = topAnime()
  return (
    <div>
      <Container className="container-space">
        <br />
        <h1 className="text-white">TOP RATING ANIME</h1>
        <br />
        <Row>
          {
            topAnimes.map((anime) => (
              <Col md={4} className="movieWrapper" id="trending" key={anime.title}>
                <Card className="movieImage">
                  <div className="rating">{anime.rating}</div>
                  <Image src={anime.image} alt={anime.title} className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">{anime.title}</Card.Title>
                      <Card.Text className="text-left sinopsis">
                        {anime.sinopsis}
                      </Card.Text>
                      <Button>Detail</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default TopAnime
