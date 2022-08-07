import "../../styles/RightCard.scss";


export function RightCard(props) {
    const { currentStation } = props;

    if (!currentStation) {
        return null;
    }

    const normalBikes = currentStation.extra
        ? currentStation.extra.normal_bikes
        : currentStation.free_bikes;
    const normalSlots = currentStation.extra
        ? currentStation.extra.normal_free
        : currentStation.empty_slots;

    const electricBikes = currentStation.extra
        ? currentStation.extra.ebikes
        : null;
    const electricSlots = currentStation.extra
        ? currentStation.extra.electric_free
        : null;

    const date = new Date(currentStation.timestamp);
    const formatOptions = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    return (
        <div className="station-card-container">
            <div className="station-name">{currentStation.name}</div>
            <div className="station-info">
                <table>
                    <thead>
                        <tr>
                            <th>Free bikes</th>
                            <th>Free Slots</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{normalBikes} normal</td>
                            <td>{normalSlots} normal</td>
                        </tr>
                        {(electricBikes !== null || electricSlots !== null) &&
                            <tr>
                                <td>{electricBikes} electric</td>
                                <td>{electricSlots} electric</td>
                            </tr>}
                    </tbody>
                </table>
            </div>
            <div className="card-footer">
                <div className="fav-button">fav</div>
                <div className="updated-info">
                    <div>
                        Updated at
                    </div>
                    <div>{date.toLocaleDateString(undefined, formatOptions)}</div>
                </div>
            </div>
        </div>
    )
}