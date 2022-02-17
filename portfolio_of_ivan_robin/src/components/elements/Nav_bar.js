import React from 'react';
import { useNavigate } from "react-router-dom";
import "../css/Nav_bar.css"


export default function Nav_bar(param) {
    let navigate = useNavigate();
    console.log(param.page)
    function navigateto(linkto){
        navigate(linkto);
    }
    if (param.page==="1"){
        return(
            <div className='box'>
                <div className='pagetheone' onClick={()=>navigateto('/about')}>
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
    } else if(param.page==="2"){
        return(
            <div className='box'>
                <div className='pages' onClick={()=>navigateto('/about')}>
                    About
                </div>
                <div className='pagetheone' onClick={()=>navigateto('/projects')}>
                    Projects
                </div>
                <div className='pages' onClick={()=>navigateto('/contact')}>
                    Contact
                </div>
            </div>
        )
    } else if(param.page==="3"){
        return(
            <div className='box'>
                <div className='pages' onClick={()=>navigateto('/about')}>
                    About
                </div>
                <div className='pages' onClick={()=>navigateto('/projects')}>
                    Projects
                </div>
                <div className='pagetheone' onClick={()=>navigateto('/contact')}>
                    Contact
                </div>
            </div>
        )
    }

}
