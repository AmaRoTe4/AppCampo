import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { BtnVolver } from '../../components/BtnVolver'
import BoxData from '../../components/BoxData/BoxData'
import './style.css'
import { useEffect } from 'react'

export function InformacionMatPri(){
    const { seleccionado } = useSelector((state:RootState) => state.materiasPrimas)
    
    useEffect(() => console.log(seleccionado) , [])

    return (
        <>
            <BoxData name='Datos'>
                <div className="box-datos">
                    <div className="title-box">
                        <p>Tiempo:</p>
                    </div>
                    <div className="data-box">
                        <p>Fecha: 10/10/21</p>
                        <p>Salida: Campo 1</p>
                        <p>Destino: Puerto Rosario</p>
                    </div>
                    <div className="title-box">
                        <p>Transporte:</p>
                    </div>
                    <div className="data-box">
                        <p>Camion n°: 10</p>
                        <p>Chofer: Tomas Alanis</p>
                    </div>
                    <div className="title-box">
                        <p>Carga:</p>
                    </div>
                    <div className="data-box">
                        <p>Tipo: Maiz</p>
                        <p>Peso: 10 Tn</p>
                        <p>Valor: $10.000.000</p>
                    </div>
                </div>
            </BoxData>
            <BtnVolver path={`/${seleccionado.type}/${seleccionado.division}`} />
        </>
    )
}


export function InformacionTotales(){
    const { seleccionado } = useSelector((state:RootState) => state.totales)
    
    useEffect(() => console.log(seleccionado) , [])

    return (
        <>
            <BoxData name='Datos'>
                <div className="box-datos">
                    <div className="title-box">
                        <p>Tiempo:</p>
                    </div>
                    <div className="data-box">
                        <p>Fecha: 10/10/21</p>
                        <p>Salida: Campo 1</p>
                        <p>Destino: Puerto Rosario</p>
                    </div>
                    <div className="title-box">
                        <p>Transporte:</p>
                    </div>
                    <div className="data-box">
                        <p>Camion n°: 10</p>
                        <p>Chofer: Tomas Alanis</p>
                    </div>
                    <div className="title-box">
                        <p>Carga:</p>
                    </div>
                    <div className="data-box">
                        <p>Tipo: Maiz</p>
                        <p>Peso: 10 Tn</p>
                        <p>Valor: $10.000.000</p>
                    </div>
                </div>
            </BoxData>
            <BtnVolver path={`/${seleccionado.type}`} />
        </>
    )
}

