export function NetworkComponent(props) {
    const { name, city, country, selected, onClick } = props;

    let containerClassName = "network-container";
    if (selected) {
        containerClassName += " selected";
    }
    return (
        <div className={containerClassName} onClick={onClick}>
            <div className="name">{name}</div>
            <div className="location">{city}, {country}</div>
        </div>
    )
}