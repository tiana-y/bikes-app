import { useEffect, useState } from "react";
import "../../styles/LeftCard.scss";
import { NetworkComponent } from "./NetworkComponent";
import { SearchNetwork } from "./SearchNetworks";

export function LeftCard(props) {
    const { networks, currentNetworkId, onNetworkClick, leftCardRef } = props;
    const [searchText, setSearchText] = useState("");
    const [filteredNetworks, setFilteredNetworks] = useState(networks);

    useEffect(() => {
        if (searchText.length > 0) {
            const text = searchText.toLowerCase();
            setFilteredNetworks(networks.filter(n => {
                const city = n.location.city.toLowerCase();
                const country = n.location.country.toLowerCase();
                return (
                    city.includes(text) || country.includes(text) ||
                    text.includes(city) || text.includes(country)
                );
            }));
        } else {
            setFilteredNetworks(networks);
        }
    }, [searchText, networks, setFilteredNetworks]);

    return (
        <div className="card-container" ref={leftCardRef}>
            <SearchNetwork searchText={searchText} setSearchText={setSearchText} />
            <div className="networks-list-container">
                {filteredNetworks.map(nw => (
                    <NetworkComponent
                        key={nw.id}
                        name={nw.name}
                        city={nw.location.city}
                        country={nw.location.country}
                        selected={nw.id === currentNetworkId}
                        onClick={() => onNetworkClick(nw.id)}
                    />
                ))}
            </div>
            <div className="checkbox-container">
                <label className="label">Show favorite stations only
                    <input type="checkbox" name="fav" />
                    <span className="checkmark"></span>

                </label>
            </div>
        </div>
    )
}