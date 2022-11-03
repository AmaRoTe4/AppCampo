import { Link } from 'react-router-dom'
import './style.css'

interface Props{
    path:string
}

export function BtnVolver({path}: Props):JSX.Element {
    return (
        <div className='box-btn'>
            <Link to={path} className='btn-volver'>
                <i className="fa-solid fa-xmark"></i>
            </Link>
        </div>
    )
}