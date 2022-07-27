import { Map, Marker } from "pigeon-maps";
import { useEffect, useState } from "react";

export function BikesMap() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const markerColor = `hsl(${176 % 360}deg 100% 60%)`;
    
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

    return (
        <div>
            <Map height={height - 50} width={width - 17} defaultCenter={[48.51, 2.56]} defaultZoom={10}>
                <Marker 
                    anchor={[48.51, 2.56]} 
                    width={30}
                    color={markerColor}
                />
            </Map>
        </div>
    );
}
