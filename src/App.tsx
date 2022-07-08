import './styles/app.scss'
import DexTeams from './layots/DexTeams'
import pokedexRequest from './apiPokedex/apiPokedex'


function App() {

  pokedexRequest()
  
  return (
    <div className="App">
      <section className="app_section">
      
        <DexTeams/>

        <div className="current_team"></div>
      
      </section>
    </div>
      
  )
}

export default App
