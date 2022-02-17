import React, {useState} from 'react'
import './css/Main.css';
import Nav_bar from "./elements/Nav_bar";
import Footer from "./elements/Footer";

export default function Contact() {
    return(
        <div className='background'>
            <Nav_bar page="3"/>

            <Footer/>
        </div>
    )
}
