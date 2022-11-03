import './style.css'
import BoxData from '../../components/BoxData/BoxData'
import { BtnVolver } from '../../components/BtnVolver/index'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { setSeleccionado } from '../../store/slices/Totales/Totales'

export default function Totales():JSX.Element{
    const dispatch = useDispatch()
    const { totales } = useSelector((state:RootState) => state.totales) 
    
    return (
        <>
            <BtnVolver path="/" />
            <BoxData name="Totales">
                <ul className="total-box-ul-links">
                    <Link to="/Informacion/Totales" style={{textDecoration:"none"}}>
                        {totales.map((n , i) => 
                            <li 
                                key={i} 
                                className="total-li-links" 
                                onClick={(e) => dispatch(setSeleccionado(n))}
                            >
                                <p className="total-li-links-text total-li-links-nombre">{n.nombre}</p>
                                <p className="total-li-links-text total-li-links-fecha">{n.fecha}</p>
                            </li>
                        )}
                    </Link>
                </ul>
            </BoxData>
        </>
    )
}