import React, {useState} from 'react';
import './css/Main.css';
import Nav_bar from "./elements/Nav_bar";
import Footer from "./elements/Footer";

export default function About() {
    return(
        <div className='background'>
            <Nav_bar page="1"/>
            <div className="body_box">
                <div className="column1">
                    <h1 className="title">
                       About
                    </h1>
                </div>
                <div className='column2'>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
