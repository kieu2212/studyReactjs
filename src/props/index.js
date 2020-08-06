import React, { Component } from 'react';
import ClassProps from './classProps';
import FunctionProps from './functionProps';


export default class Props extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: "Kieu",
            lop: "Fe42"
        }
    }
    render() {
        const {username} = this.state;
        const {lop} = this.state;
        return (
            <div>
                <h3 className="title">Props</h3>
                <ClassProps name={username} lop={lop}/>
                <FunctionProps name={username} lop={lop}/>
                <FunctionProps>
                    <div>
                        <h3>Hello Cybersoft</h3>
                        <p>Hello World</p>

                    </div>
                </FunctionProps>
            </div>
        )
    }
}
