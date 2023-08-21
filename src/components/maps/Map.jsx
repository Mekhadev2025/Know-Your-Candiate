import React from 'react'
import map from "../../assets/map2.png"
import "../maps/Map.css"
const Map = () => {
  return (
    <div className="map--container">
         <img src={map} className='map-img'></img>
    </div>
  )
}

export default Map
