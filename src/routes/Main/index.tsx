import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Main(){
    const [datos , setDatos] = useState<string[]>([
        "Maiz",
        "Soja",
        "Trigo",
    ])

    return (
        <div className='container-main d-flex justify-content-center'>
            <div className='row' style={{width:"100%" , height:"70vh"}}>
                <Link to="Totales" className={`mt-5 col-10 col-md-9 col-lg-7 box-button`}>
                    <p className='button-name'>Totales</p>
                    <div className='button-number-box'>
                        <div className='button-number' 
                        style={{backgroundColor:"rgb(205 55 50)"}}>
                            0
                        </div>
                    </div>
                </Link>
                {datos.map((n , i) => 
                    <Link to={`MateriasPrimas/${n}`} key={i} className={`col-10 col-md-9 col-lg-7 box-button`}>
                        <p className='button-name'>{n}</p>
                        <div className='button-number-box'>
                            <div className='button-number' 
                            style={{backgroundColor:"rgb(205 55 50)"}}>
                                0
                            </div>
                        </div>
                    </Link>
                )}
                <Link to="Mapas/" className={`col-10 col-md-9 col-lg-7 box-button`}>
                    <p className='button-name'>Sillos</p>
                </Link>
            </div>
        </div>
    )
}