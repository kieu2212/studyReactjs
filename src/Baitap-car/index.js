import React, { Component } from 'react'

export default class BaitapCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: "./img/imgRedCar.jpg"
        }
    }
    HandleChangColor = (color) => {
        let img = "";
        switch (color) {
            case "red":
                img = "./img/imgRedCar.jpg"
                break;
            case"silver":
                img = "./img/imgSilverCar.jpg"
                break;
            default:
                img = "./img/imgBlackCar.jpg"
                break;
        }
        this.setState({
            img
        });
    };
    render() {
        return (
            <div className="container">
                <h3 className="title">Baitap Car</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={this.state.img} />
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger m-2" onClick={() => { this.HandleChangColor("red") }}>Red</button>
                        <button className="btn btn-danger m-2" onClick={() => { this.HandleChangColor("silver") }}>Silver</button>
                        <button className="btn btn-danger m-2" onClick={() => { this.HandleChangColor("black") }}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
