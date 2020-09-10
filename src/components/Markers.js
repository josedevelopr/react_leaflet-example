import React, { Component } from 'react'
import {Marker} from 'react-leaflet'

import {IconLocation} from './IconLocation'


class Markers extends Component{
    
    render() {
        const {places} = this.props;
        const markers = places.map((place, i) =>(
            <Marker  
                key = {i}          
                position = {place.geometry}
                icon = {IconLocation}
            />
        ));

        return (            
            markers
        )
    }
}

export default Markers;