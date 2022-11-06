import './index.css'
import {DataMap} from '../../../../interface/index' 
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Props{
    location:DataMap
}

//las dos son necesarias
//react-leaflet --> libreria que vamos a usar
//leaflet 
export default function Map({location}:Props){

    const newIcon = new Icon({
      iconUrl:"/images/marcador_sin_fondo.png",
      iconSize: [40 , 60],
      iconAnchor: [22, 50],
      shadowAnchor: [22, 94]
    })



    return (
        <MapContainer 
            // @ts-ignore
            center={{lat:location.Latitud , lng:location.Longitud}}  
            zoom={14} 
            //scrollWheelZoom={false}
            style={{height:'100%' , width:'100%'}}
            >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={newIcon} position={[location.Latitud , location.Longitud]}>
              <Popup>
                Actual
              </Popup>
            </Marker>
            <Marker icon={newIcon} position={[-29.35,-59.97]}>
              <Popup>
                Malabrigo
              </Popup>
            </Marker>
            <Marker icon={newIcon} position={[-31, -61]}>
              <Popup>
                Providencia
              </Popup>
            </Marker>
            <Marker icon={newIcon} position={[-28, -70]}>
              <Popup>
                Embalse Lautaro
              </Popup>
            </Marker>
        </MapContainer>
    )
}