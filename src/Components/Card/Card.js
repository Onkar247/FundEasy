import React from 'react';
import Nav from '../Navbar/Nav';
import './Card.css';
import health from './health.png';
import edu from './edu.png';
import food from './Food.png';
import finance from './finance.png';
import energy from './energy.png';
import defence from './defence.png';
function Card()
{
    return (
        <div className="root-container" >
            <Nav/>
                <div className='content'>
                    <div className='card bg-silver grow pa4 ma2'>
                        <img alt='' src={health} style={{width:'150px',height:'150px'}}/>
                        <div className='details'>    
                            <h2>Health Department</h2>                      
                        </div>  
                    </div>
                    <div className='card bg-silver grow pa4 ma2'>
                        <img alt='' src={health} style={{width:'150px',height:'150px'}}/>
                        <div className='details'>    
                            <h2>Health Department</h2>                      
                        </div>  
                    </div>

                    <div className='card bg-silver grow pa4 ma2'> 
                        <img alt='' src={defence} style={{width:'150px',height:'150px'}}/>
                        <div className='details'>    
                            <h2>Defence Department</h2>
                        </div>  
                    </div>

                    <div className='card bg-silver grow pa4 ma2'>
                        <img alt='' src={edu} style={{width:'150px',height:'150px'}}/>
                        <div className='details'>    
                            <h2>Education Department</h2>
                        </div>  
                    </div> 

                    <div className='card bg-silver grow pa4 ma2'>
                        <img alt='' src={energy} style={{width:'150px',height:'150px'}}/>
                        <div className='details'>    
                            <h2>Energy Department</h2>
                        </div>  
                    </div>

                    <div className='card bg-silver grow pa4 ma2'>
                            <img alt='' src={finance} style={{width:'150px',height:'150px'}}/>
                            <div className='details'>    
                                <h2>Finance Department</h2>
                            </div>  
                    </div>

                    <div className='card bg-silver grow pa4 ma2'>
                        <img alt='' src={food} style={{width:'150px',height:'150px'}}/>
                        <div className='details'>    
                            <h2>Food Department</h2>         
                        </div>  
                    </div>  
                   
                </div>    
        </div>
    );
}

export default Card;