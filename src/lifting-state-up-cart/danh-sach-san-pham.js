import React, { Component } from "react";
import SanPham from './san-pham';

export default class DanhSachSanPham extends Component {
  renderHTML =()=>{
    const {listProduct} = this.props;
    return listProduct.map(product =>{
      return <SanPham 
      key={product.maSP} 
      product={product} 
      detailProduct={this.props.detailProduct}
      addCart={this.props.addCart}></SanPham>

    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderHTML()}
        </div>
      </div>
    );
  }
}
