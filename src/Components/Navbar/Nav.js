import React from 'react';
import './Nav.css';
import icon from './icon3.png';
 

class Nav extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            visible:'hidden'
        };
    }

    onChange(){
       if(this.state.visible==='hidden')
       {
           this.setState({visible:'visible'})
       }
       
       else if(this.state.visible==='visible'){
            this.setState({visible:'hidden'})
       }
    } 

    render(){
     return(
            <div className='title' align='left'>    
                <div className='name'>   
                    <font size='6'><h2>FundEasy</h2></font>  
                </div> 
                <span className='navbar'>
                            <font size='5'>
                                <ul>
                                    <li>Home</li>
                                    <li>Departments</li>
                                    <li>About</li>
                                    <li>Contact us</li>    
                                    <li>
                                       <div className='icon'> <img src={icon} onClick={this.onChange.bind(this)}   style={{width:'65px', height:'65px'}}/></div>
                                    </li>
                                </ul>     
                            </font>        
                </span>
                <div id='mes' className='Notify' style={{visibility:this.state.visible}}>
                    <ol>
                        <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>
                            <div className='message'><li>text</li></div>               
                            <div className='message'><li>text</li></div>
                    </ol>
                </div>
            </div>
    );
    }
}

export default Nav;