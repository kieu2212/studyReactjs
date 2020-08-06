import React from 'react'

export default function FunctionProps(props) {
    return (
        <div>
            <h3>FunctionProps</h3>
            <div>Hello {props.name} - Lop: {props.lop}</div>
            <div>{props.children}</div>
        </div>
    )
}
