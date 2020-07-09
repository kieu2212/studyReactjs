import React, { Component } from 'react';

export default class HandlingEvent extends Component {
    handleOnclick = () =>{
        console.log("handleOnclick");
    };
    handleOnclickParams = (name,tuoi) =>{
        console.log("Hello" + name + "tuổi" +tuoi);
    };
    
    render() {
        return (
            <div >
                <h3 className="title">HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handleOnclick}>HandlingEvent</button>
                <button className="btn btn-info" onClick={()=>{
                    this.handleOnclickParams("Kieu","23")}}>HandlingEvente Params</button>
            </div>
        )
    }
}
