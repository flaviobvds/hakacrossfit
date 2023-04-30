import React from "react";
import GoogleMapReact from 'google-map-react';
import GoogleMap from 'google-maps-react-markers'
import { MdLocationPin } from "react-icons/md";

import styles from './Map.module.scss'

const Marker = ({ text }: any) => {
    return (
        <div className={styles.pinContainer}>
            <MdLocationPin
                color="rgb(7, 64, 9)"
                size="50"
            />
        </div>

    )
}

export default function Map() {
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
                apiKey=''
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={2.84246001583857}
                    lng={-60.714896175459955}
                    text="My Marker"
                />
            </GoogleMap>
        </div>
    );
}