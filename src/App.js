import "./styles/App.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">Hello</header>
  //     <div>
  //       <ul>
  //         {networksData.networks.slice(0, 10).map((nw) => (
  //           <li key={nw.id}>
  //             {nw.name}
  //             <br />
  //             location: {nw.location.city} <span> </span>
  //             <button onClick={() => selectNetwork(nw.id)}>Select</button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //     <h3>Stations</h3>
  //     {isLoadingStations && <div>Loading</div>}
  //     {currentNetwork && stationsData && !isLoadingStations && (
  //       <ul>
  //         {stationsData.network.stations.slice(0, 20).map((st) => (
  //           <li key={st.id}>
  //             {st.name}
  //             <span> </span>
  //             {isInFavorites(st.id)
  //              ? <button onClick={() => handleUnfavClick(st.id)}>Unfav</button>
  //              : <button onClick={() => handleFavClick(st.id)}>Fav</button>
  //             }
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
}

export default App;
