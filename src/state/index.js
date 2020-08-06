import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin : true,
            username : "Kieu",
            isLogout : false
        };
        
    }
   
    renderHTML = () => {
        return this.state.isLogin ?  (<button className='btn btn-success' onClick={this.HandleLogin}
        >Login</button>) : (<p>Hello {this.state.username}</p>) 
           ;
    };
    renderHTML1 = () => {
        return this.state.isLogout ?
        (<button className='btn btn-success' >Login</button>):
         (<button className='btn btn-danger'onClick={this.HandleLogout} >Logout</button>) 
    }
    HandleLogin = () => {
       this.setState({
            isLogin : false,
       });
    };
    HandleLogout = () =>{
        this.setState({
            isLogout : true
        })
    }
    render() {
        console.log("render");
        return (
            <div>
                <h3 className="title">State</h3>
                {this.renderHTML()}
                {this.renderHTML1()}
            </div>
        )
    }
}
