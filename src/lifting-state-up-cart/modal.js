import React, { Component } from "react";

export default class Modal extends Component {
  // handleDelete = () =>{
  //   this.props.delete()
  // }
  renderTable = () => {
    const { listCart } = this.props;
    // console.log(listCart);
    /**
     * Duyet mang
     * Return từng dòng <tr> => Trong dòng có cột
     */
    return listCart.map((item) => {
      return (
        <tr key={item.maSP}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSL(false, item);
              }}
            >
              -
            </button>
            {item.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSL(true, item);
              }}
            >
              +
            </button>
          </td>
          <td>{item.donGia}</td>
          <td>{item.donGia * item.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.delete(item);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Tính tiền: </td>
                    <td>
                      {this.props.listCart.reduce((tongTien, spGH, index) => {
                        return (tongTien += spGH.soLuong * spGH.donGia);
                      }, 0)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
