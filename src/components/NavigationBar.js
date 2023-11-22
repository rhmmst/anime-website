import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true): setSticky(false);
    })
  })
  return (
    <div>
      <Navbar className={`fixed-top ${!sticky? "":"navcolor"}`} variant="dark">
        <Container>
          <Navbar.Brand href="#home">RHMMOVIES</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TOP ANIME</Nav.Link>
            <Nav.Link href="#animelist">LIST ANIME</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
