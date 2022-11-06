import './style.css'
import { BtnVolver } from '../../components/BtnVolver'
import BoxData from '../../components/BoxData/BoxData'
import { DataMap } from '../../../interface'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUbicacion } from '../../store/slices/ubicacion/ubicacion'

interface Ubicaciones extends DataMap{
    nombre:string;
}

export default function MapaMain(){
    const dispatch = useDispatch()
    const [ubicaciones , setUbicaciones] = useState<Ubicaciones[]>([
        {
            nombre:"Malabrigo",
            Longitud:-59.97,
            Latitud:-29.35
        },
        {
            nombre:"Providencia",
            Longitud:-61,
            Latitud:-31
        },        
        {
            nombre:"Embalse Lautaro",
            Longitud:-70,
            Latitud:-28
        }
    ])

    return (
        <>
            <BoxData name="Sillos">
                <Link to="Mapa" style={{textDecoration:"none"}}>
                    <ul className="map-box-ul-links">
                        {ubicaciones.map((n , i) => 
                            <li 
                                key={i} 
                                className="map-li-links" 
                                onClick={() => dispatch(setUbicacion(
                                    {
                                        Longitud:n.Longitud,
                                        Latitud:n.Latitud,
                                    }
                                    ))}
                                    >
                                <p className="map-li-links-text map-li-links-nombre">{n.nombre}</p>
                            </li>
                        )}
                    </ul>
                </Link>
            </BoxData>
            <BtnVolver path="/" />
        </>
    )
}