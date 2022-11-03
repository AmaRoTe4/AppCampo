import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { BtnVolver } from '../../components/BtnVolver'
import './style.css'

export function InformacionMatPri(){
    const { seleccionado } = useSelector((state:RootState) => state.materiasPrimas)
    
    return (
        <>
            <BtnVolver path={`/${seleccionado.type}/${seleccionado.division}`} />
            <div>
                <h3>Nombre: {seleccionado.nombre}</h3>
                <h3>Fecha: {seleccionado.fecha}</h3>
            </div>
        </>
    )
}


export function InformacionTotales(){
    const { seleccionado } = useSelector((state:RootState) => state.totales)
    
    return (
        <>
            <BtnVolver path={`/${seleccionado.type}`} />
            <div>
                <h3>Nombre: {seleccionado.nombre}</h3>
                <h3>Fecha: {seleccionado.fecha}</h3>
            </div>
        </>
    )
}

