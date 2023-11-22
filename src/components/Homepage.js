import { Col, Container, Row, Button } from "react-bootstrap"

const Homepage = () => {
  return (
    <div className="intro" id="home">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">YOUR ANIME</div>
            <div className="title">MOVIE WEBSITE</div>
            <div className="introButton mt-4 text-center">
              <a href="#animelist">
                <Button variant="info">Lihat Semua List</Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage
