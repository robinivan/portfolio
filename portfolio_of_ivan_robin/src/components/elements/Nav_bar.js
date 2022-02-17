import React from 'react';
import { useNavigate } from "react-router-dom";
import "../css/Nav_bar.css"


export default function Nav_bar() {
    let navigate = useNavigate();
    function navigateto(linkto){
        navigate(linkto);
    }
    return(
        <div>
            <div className='pages' onClick={()=>navigateto('/about')}>
                About
            </div>
            <div className='pages' onClick={()=>navigateto('/projects')}>
                Projects
            </div>
            <div className='pages' onClick={()=>navigateto('/contact')}>
                Contact
            </div>
        </div>
    )
}
