import './index.css'
import {DataMap} from '../../../../../interface/index' 
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface Props{
    location:DataMap
}

//las dos son necesarias
//react-leaflet --> libreria que vamos a usar
//leaflet 
export default function Map({location}:Props){

    return (
        <MapContainer 
            center={{lat:location.Latitud , lng:location.Longitud}}  
            zoom={14} 
            //scrollWheelZoom={false}
            style={{height:'100%' , width:'100%'}}
            >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.Latitud , location.Longitud]}>
              <Popup>
                Actual
              </Popup>
            </Marker>
            <Marker position={[-29.35,-59.97]}>
              <Popup>
                Malabrigo
              </Popup>
            </Marker>
            <Marker position={[-31, -61]}>
              <Popup>
                Providencia
              </Popup>
            </Marker>
            <Marker position={[-28, -70]}>
              <Popup>
                Embalse Lautaro
              </Popup>
            </Marker>
        </MapContainer>
    )
}