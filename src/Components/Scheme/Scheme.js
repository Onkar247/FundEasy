import React from 'react';
import Nav from '../Navbar/Nav';
import './Schemecard.css';

function Scheme()
{
    return(
        <div className="root-container" >
            <Nav />
            <div className='contains'>
                <input type='text' className='in' placeholder='Enter Amount....'/>
                <input type='Submit' className='Submit' value='Submit' />
                <div className='Scheme'>
                    <font size='6'><h2>Scheme Name</h2></font>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
}

export default Scheme;
