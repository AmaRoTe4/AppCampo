import { Link } from 'react-router-dom'
import './style.css'

interface Props{
    path:string
}

export function BtnVolver({path}: Props):JSX.Element {
    return (
        <div className='box-btn'>
            <Link to={path} className='btn-volver'>
                <i className="btnVol fa-solid fa-circle-chevron-left"></i>
            </Link>
            <Link to="/" className='btn-volver'>
                <i className="btnVol fa-solid fa-circle-chevron-down"></i>
            </Link>
            <p className="btn-volver"></p>
        </div>
    )
}