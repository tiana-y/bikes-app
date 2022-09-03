// import bikeIcon from '../../icons/thin_bike_icon.svg';

export function SearchNetwork(props)
{
    const { searchText, setSearchText } = props;

    return (
        <div className="search-container">
            <input
                type="search"
                placeholder='Filter by country or city'
                defaultValue={searchText}                
                onChange={e => setSearchText(e.target.value)}
            />
            {/* <button
                onClick={() => setSearchText(text)}            
            >
                <img alt="Go" src={bikeIcon}/>
            </button> */}
        </div>
    )
}