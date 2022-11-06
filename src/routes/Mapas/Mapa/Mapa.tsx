import Map from "../components/Map/Map";
import { BtnVolver } from "../../../components/BtnVolver";
import { useState } from "react";
import { DataMap } from "../../../../interface";
import './style.css'
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function Mapas(){
    const { ubicacion } = useSelector((state:RootState) => state.ubicacion) 
    

    return (
        <div className="d-block" style={{height:'100vh' , width:'100vw'}}>
            <div style={{height:'90%' , width:'100vw' , zIndex:100}}>
                {location && <Map location={ubicacion} />}
            </div>
            <BtnVolver path="/Mapas/" />
        </div>
    )
}