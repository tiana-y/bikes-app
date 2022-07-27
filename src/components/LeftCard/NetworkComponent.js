export function NetworkComponent(props) {
    const { name, city, country, selected } = props;

    let containerClassName = "network-container";
    if (selected) {
        containerClassName += " selected";
    }
    return (
        <div className={containerClassName}>
            <div className="name">{name}</div>
            <div className="location">{city}, {country}</div>
        </div>
    )
}