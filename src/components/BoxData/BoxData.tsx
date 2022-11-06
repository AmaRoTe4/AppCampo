import { ReactNode } from 'react';
import './style.css';

interface Props{
    name?:string;
    children?: ReactNode
}

const BoxData = ({name , children}: Props):JSX.Element => {
    return (
        <div className='box-interface'>
            {name && <div className='title-interface'>
                <p className='titulo'>{name}</p>
            </div>}
            <div className="box-children">
                {children}
            </div>
        </div>
    )
}

export default BoxData;