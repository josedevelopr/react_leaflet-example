import React, { Component, useState, setState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {Map,TileLayer} from 'react-leaflet'
import {useLocation, useHistory} from 'react-router-dom'
import 'leaflet/dist/leaflet.css'

import Markers from './Markers'
import {venues as places}  from '../assets/data.json'

const MapView  = () =>{    

        const [state, setState] = useState({
            currentLocation : {lat: '-12.2857829', lng: '-76.7758392'},
            zoom : 13
        });    
        
        const location = useLocation();
        console.log(location);
        const history = useHistory();

        useEffect(() => {
            if (location.state.latitude && location.state.longitude){
                const currentLocation = {
                    lat : location.state.latitude,
                    lng : location.state.longitude
                }
                setState({...state, currentLocation});
                history.replace({pathname:'/map', state : {}})
            }
        },[]);

        return (
            <Map 
                center={state.currentLocation}
                zoom={state.zoom}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Markers 
                    places = {places}
                />
            </Map>
        )
    
}

export default MapView;