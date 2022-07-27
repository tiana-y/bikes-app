import bikeIcon from '../../icons/thin_bike_icon.svg';

export function SearchNetwork()
{
    return (
        <div className="search-container">
            <input
                placeholder='Filter by country or city'
            />
            <button>
                <img alt="Go" src={bikeIcon}/>
            </button>
        </div>
    )
}