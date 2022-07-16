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
            <Map height={height * 0.9} width={width} defaultCenter={[50, 5]} defaultZoom={3}>
                <Marker 
                    anchor={[50, 5]} 
                    width={30}
                    color={markerColor}
                />
            </Map>
        </div>
    );
}
