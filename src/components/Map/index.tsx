import React, { useState } from "react";
import GoogleMap from 'google-maps-react-markers'
import { MdLocationPin } from "react-icons/md";

import styles from './Map.module.scss'

const Marker = ({ isClicked }: any) => {
    return (
        <div className={styles.pinContainer}>
            <MdLocationPin
                color={isClicked ? "white" : "rgb(7, 64, 9)"}
                size="50"
            />
        </div>
    )
}

interface MapProps {
    apiKey: string
}

export default function Map({apiKey}: MapProps) {
    const [isClicked, setIsClicked] = useState(false)

    const defaultProps = {
        center: {
            lat: 2.84246001583857,
            lng: -60.714896175459955
        },
        zoom: 13
    };

    return (
        <div className={styles.mapContainer}>
            <GoogleMap
                apiKey={apiKey}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={2.84246001583857}
                    lng={-60.714896175459955}
                    onClick={() => {setIsClicked(!isClicked)}}
                    isClicked={isClicked}
                    text="My Marker"
                />
            </GoogleMap>
        </div>
    );
}