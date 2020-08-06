import React, { Component } from 'react'

export default class Child extends Component {
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps")
    }
    render() {
        return (
            <div>
                <h3 className="title">Child</h3>
            </div>
        )
    }
}
