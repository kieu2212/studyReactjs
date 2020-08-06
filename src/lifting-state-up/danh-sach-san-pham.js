import React, { Component } from "react";
import data from "./data.json";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
    };
    console.log(this.state.listProduct);
  }

  renderHTML = () => {
    const { listProduct } = this.state;
    return listProduct.map((product, index) => {
      return (
        <SanPham
          key={index}
          products={product}
          detailProduct={this.handleDetailProduct}
        />
      );
    });
  };
  handleDetailProduct = (product) => {
    console.log(product);
    this.setState({
      detailProduct: product,
    });
  };
  render() {
    const { detailProduct } = this.state;
    return (
      <div className="container">
        <div className="row">{this.renderHTML()}</div>
        <div className="row">
          <div className="col-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} />
          </div>
          <div className="col-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
