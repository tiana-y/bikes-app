import { useState, useEffect, useRef } from 'react';
import { useGetNetworksQuery } from "../redux/networksApi";
import { useGetStationsQuery } from "../redux/stationsApi";
import { useAddFavoriteMutation, useDeleteFavoriteMutation, useGetFavoritesQuery } from "../redux/favoritesApi";

import { BikesMap } from "./BikesMap";
import { LeftCard } from "./LeftCard/LeftCard";
import { RightCard } from './RightCard/RightCard';

export function Main() {
    const leftCardRef = useRef(0);
    const [currentNetwork, selectNetwork] = useState(null);
    const [currentStation, selectStation] = useState(null);
    const { data: networksData, isLoading: isLoadingNetworks } =
        useGetNetworksQuery();
    const {
        data: stationsData,
        isLoading: isLoadingStations,
    } = useGetStationsQuery(currentNetwork);

    // const { data: favStations, isLoading: isLoadingFav } = useGetFavoritesQuery(currentNetwork);
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
        return false;
        // return favStations.find(item => item.networkId === currentNetwork && item.stationId === stationId);
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
        <>
            <BikesMap 
                stations={stationsData?.network?.stations}
                leftCardRef={leftCardRef}
                onStationClick={selectStation}
                currentStation={currentStation}
            />
            <LeftCard
                networks={networksData.networks}
                currentNetworkId={currentNetwork}
                onNetworkClick={selectNetwork}
                leftCardRef={leftCardRef}
            />
            <RightCard
                currentStation={currentStation}
        
            />
        </>

    )
}