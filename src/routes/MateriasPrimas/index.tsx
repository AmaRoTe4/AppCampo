import './style.css'
import { BtnVolver } from '../../components/BtnVolver'
import BoxData from '../../components/BoxData/BoxData'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { setSeleccionado } from '../../store/slices/MateriasPrimas/MateriasPrimas'
import { Totales } from '../../interface/index'

interface Props{
    type:string
}

export default function MateriasPrimas({type}:Props){
    const dispatch = useDispatch()
    const { 
        maizTotales , 
        sojaTotales , 
        trigoTotales 
    } = useSelector((state:RootState) => state.materiasPrimas) 

    const RetonroDeData:Totales[] = 
    type === 'Maiz' 
    ? maizTotales : type === "Soja" 
    ? sojaTotales : trigoTotales  

    return (
        <>
            <BoxData name={type}>
                <Link to="/Informacion/MateriasPrimas" style={{
                    textDecoration:"none"
                }}>
                    <ul className="mat-pri-box-ul-links">
                        {RetonroDeData.map((n , i) => 
                            <li 
                                key={i} 
                                className="mat-pri-li-links" 
                                onClick={() => dispatch(setSeleccionado(
                                    {
                                        division:n.division,
                                        type:n.type,
                                        nombre:n.nombre,
                                        fecha:n.fecha,
                                    }
                                    ))}
                                    >
                                <p className="mat-pri-li-links-text total-li-links-nombre">{n.nombre}</p>
                                <p className="mat-pri-li-links-text total-li-links-fecha">{n.fecha}</p>
                            </li>
                        )}
                    </ul>
                </Link>
            </BoxData>
            <BtnVolver path="/" />
        </>
    )
}