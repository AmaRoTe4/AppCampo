import { ReactNode } from 'react';
import './style.css';

interface Props{
    name:string;
    children: ReactNode
}

const BoxData = ({name , children}: Props):JSX.Element => {
    return (
        <div className='box-interface'>
            <div className='title-interface'>
                <p className='titulo'>{name}</p>
            </div>
            {children}
        </div>
    )
}

export default BoxData;