import React from 'react';
import HeaderDiv from '../menu_components/HeaderDiv'
import AccordionMenu from '../menu_components/AccordionMenu';
import Footer from '../../landing/landing_components/Footer'
import "./Menu.css";

export default function Menu() {

    return (
        <div className='page-conatainer'>
            <div>
                <HeaderDiv/>
                <AccordionMenu/>
            </div>
            <Footer/>
        </div>
    );
}