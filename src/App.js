import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Homepage from "./components/Homepage"
import TopAnime from "./components/TopAnime"
import AnimeList from "./components/AnimeList"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Homepage />
      </div>

      <div className="trending">
        <TopAnime />
      </div>

      <div className="superhero">
        <AnimeList />
      </div>
    </div>
  )
}

export default App
