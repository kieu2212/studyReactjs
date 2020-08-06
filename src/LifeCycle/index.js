import React, { Component } from 'react';
import Pure from "./pure";
import Child from "./child;"


export default class LifeCycle extends Component {
    constructor(props){
        super(props);

        this.state={
            username: "Cybersoft"
        };


        /**
         * constructor chỉ chạy 1 lần duy nhất
         */
        console.log("constructor");
    }

    componentDidMount(){
        /**
         * chỉ chạy 1 lần duy nhất
         */
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps,nextState);
    //     if (nextState.username ==="Cybersoft"){
    //         return false;
    //     }
    //     return true;
    // }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    render() {
        console.log("render");
        return (
            <div>
                <h3 className="title">LifeCycle</h3>
                <p>{this.state.username}</p>
                <buton className="btn btn-success" onClick={()=>{
                    this.setState({
                        username:"Hao"
                    })
                }}>Click</buton>
                {/* <Child {this.state.username()}/> */}
                <Pure/>
            </div>
        )
    }
}
