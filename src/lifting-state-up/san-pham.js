import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    this.props.detailProduct(this.props.products);
  };
  render() {
    const { products } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={products.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{products.tenSP}</h4>
            <button className="btn btn-success" onClick={this.handleDetail}>
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
