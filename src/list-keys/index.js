import React, { Component } from 'react'

export default class ListKeys extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listProduct: [
                { id: 1, name: "IphoneX", price: 123456 },
                { id: 2, name: "SamSung", price: 123456 },
                { id: 3, name: "HTC", price: 123456 },
                { id: 4, name: "Nokia", price: 123456 },
            ]
        }
    }
    renderTable = () => {
        const { listProduct } = this.state;
        let res = listProduct.map((product) => {
            return (
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        });
        return res;
    };

    render() {
        return (
            <div>
                <h3 className="title">ListKeys</h3>
                <table className="table">
                    <thead>
                        <tr key="product.id">
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
