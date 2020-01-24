import React from 'react';
import './Main.scss';
import logo from './main.png';

class Main extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          login: true,
          signup: false
        };
      }
    
      render() {
    
        return (
          <div className="root-container" align='center'>
          
            <div className='title'>
                <font size='7'><h2>FundEasy</h2></font>
            </div>
            <div className='main'>
              <img src={logo} />
              <div className='signup-login'>            
                  <div className="box-controller">
                      <div className={"controller " + (this.state.login ? "selected-controller"  : "")} onClick={this.showLoginBox.bind(this)}>
                          Login
                      </div>
                      <div className={"controller " + (this.state.signup ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
                          Signup
                      </div>
                  </div>
                  
                      {this.state.login && <LoginBox/>}
                      {this.state.signup && <RegisterBox/>}
                  
              </div>
            </div>
          </div>
        );
      }
      showLoginBox() {
        this.setState({login: true, signup: false});
      }
    
      showRegisterBox() {
        this.setState({signup: true, login: false});
      }
}



class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitLogin(e) {
      if(this.email==null)
      {
        alert('Enter email');
      }
    }
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
            
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="login-input" placeholder="Email"/>
                </div>
    
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  className="login-input"  placeholder="Password"/>
                </div>
                <button  type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
          </div>
        </div>
      );
    }
  }
  


  class RegisterBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitRegister(e) {}
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Signup
          </div>
          <div className="box">
  
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"  name="username" className="login-input" placeholder="Username"/>
                </div>
    
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="login-input" placeholder="Email"/>
                </div>
    
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  className="login-input"  placeholder="Password"/>
                </div>

                <div className="input-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password"  className="login-input"  placeholder="Confirm Password"/>
                </div>

                <button type="button" className="login-btn"onClick={this.submitRegister.bind(this)}>Signup</button>
          </div>
        </div>
      );
    }
  }

export default Main;