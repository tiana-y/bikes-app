import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { useEffect, useState } from "react";
import "../styles/Map.scss";

export function BikesMap(props) {
    const { stations, leftCardRef, currentStation, onStationClick } = props;
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [center, setCenter] = useState([0,0]);

    const [showTooltip, setShowTooltip] = useState(false);
    const [stationForTooltip, setStationForTooltip] = useState(null);

    const markerColor = `hsl(${176 % 360}deg 47% 60%)`;
    const selectedMarkerColor = `hsl(${176 % 360}deg 100% 65%)`;
    
    useEffect(() => {
        const handler = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener('resize', handler);
        }
    }, []);

    useEffect(() => {
        const median = arr => {
            const mid = Math.floor(arr.length / 2);
            const nums = [...arr].sort((a,b) => a - b);
            return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
        }
        if (stations) {
            const lat = median(stations.map(s => s.latitude));
            const lng = median(stations.map(s => s.longitude));
            setCenter([lat, lng]);
        }
    }, [stations]);

    const onMouseOverStation = (station) => {
        setShowTooltip(true);
        setStationForTooltip(station);
    }

    const onMouseOut = () => {
        setShowTooltip(false);
        setStationForTooltip(null);
    }

    return (
        <div>
            <Map height={height - 50} width={width - 17} center={center} defaultZoom={10}>
                <ZoomControl 
                    style={{ left: leftCardRef?.current.clientWidth + 10, zIndex: 110 }}
                />

                {stations && stations.map(s => (
                    <Marker
                        key={s.id}
                        anchor={[s.latitude, s.longitude]} 
                        width={s.id === currentStation?.id ? 30 : 25}
                        color={s.id === currentStation?.id ? selectedMarkerColor : markerColor}
                        onMouseOver={() => onMouseOverStation(s)}
                        onMouseOut={onMouseOut}
                        onClick={() => onStationClick(s)}
                        style={{ zIndex: s.id === currentStation?.id ? 2 : 1 }}
                    />
                        
                ))}

                {showTooltip &&
                <Overlay 
                    anchor={[stationForTooltip.latitude, stationForTooltip.longitude]}
                    offset={[0, 0]}
                    style={{ zIndex: 3 }}
                >
                    <div className="marker-tooltip">
                        <div>
                            {stationForTooltip.name}
                        </div>
                        <div className="free-bikes-info">
                            Free bikes: {stationForTooltip.free_bikes}
                        </div>
                    </div>
                </Overlay>
                }
            </Map>
        </div>
    );
}
