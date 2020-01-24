import React from 'react';
import Nav from '../Navbar/Nav';
import './OTP.css';

function OTP() {
    return(
            <div className='whole'>
                <Nav/> 
                <div className='otp'>
                    <font size='4' >OTP has been sent on your registered mobile number</font>
                    <input type='text' className='Enter' placeholder='Enter OTP'/><br/>
                    <input type='Submit' className='Submit' value='Submit' />
                </div>
            </div>
            
    );
}

export default OTP;