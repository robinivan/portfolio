import React, {useState} from 'react';
import './css/Main.css';
import Nav_bar from "./elements/Nav_bar";
import Footer from "./elements/Footer";

export default function About() {
    return(
        <div className='background'>
            <Nav_bar/>
            <Footer/>
        </div>
    )
}
