import "../../styles/LeftCard.scss";
import { NetworkComponent } from "./NetworkComponent";
import { SearchNetwork } from "./SearchNetworks";

export function LeftCard(props)
{
    const { networks, currentNetworkId } = props;
    return (
        <div className="card-container">
            <SearchNetwork/>
            {networks.map(nw => (
                <NetworkComponent
                    key={nw.id}
                    name={nw.name}
                    city={nw.location.city}
                    country={nw.location.country}
                    selected={nw.id === currentNetworkId}
                />
            ))}
            <div className="checkbox-container">
                <label className="label">Show favorites only
                    <input type="checkbox" name="fav"/>
                    <span className="checkmark"></span>

                </label>
                {/* <label for="fav">Show favorites only</label> */}

            </div>
        </div>
    )
}