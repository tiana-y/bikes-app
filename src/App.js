import "./styles/App.scss";
import { useEffect, useState } from "react";
import { useGetNetworksQuery } from "./redux/networksApi";
import { useGetStationsQuery } from "./redux/stationsApi";
import { useAddFavoriteMutation, useDeleteFavoriteMutation, useGetFavoritesQuery } from "./redux/favoritesApi";
import { BikesMap } from "./BikesMap";
import { Header } from "./components/Header";

function App() {
  const [currentNetwork, selectNetwork] = useState(null);
  const { data: networksData, isLoading: isLoadingNetworks } =
    useGetNetworksQuery();
  const {
    data: stationsData,
    isLoading: isLoadingStations,
  } = useGetStationsQuery(currentNetwork);
  const { data: favStations, isLoading: isLoadingFav } = useGetFavoritesQuery(currentNetwork);
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();


  useEffect(() => {
    if (!currentNetwork && networksData?.networks?.length > 0) {
      const firstNw = networksData.networks[0];
      selectNetwork(firstNw.id);
    }
  }, [currentNetwork, networksData]);

  const isInFavorites = (stationId) => {
    const result = findInFavorites(stationId);
    console.log(result)
    if (result) {
      return true;
    }
    return false;
  }

  const findInFavorites = (stationId) => {
    return favStations.find(item => item.networkId === currentNetwork && item.stationId === stationId);
  }

  if (isLoadingNetworks) {
    return <div>Loading...</div>;
  }

  const handleFavClick = async (stationId) => {
    await addFavorite({ networkId: currentNetwork, stationId }).unwrap();
  }

  const handleUnfavClick = async (stationId) => {
    const result = findInFavorites(stationId);
    await deleteFavorite(result.id).unwrap();
  }

  return (
    <div>
      <Header/>
      <BikesMap />
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
