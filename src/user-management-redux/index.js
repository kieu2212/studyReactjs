import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux";


class Home extends Component {

  render() {
    // let { userList, keyword } = this.state;
    // userList = userList.filter((item) => {
    //   return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    // });
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management Redux</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleGetKeyWord} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              // this.setState({
              //   userEdit: null
              // })
            }}
          >
            ADD USER
          </button>
        </div>
        <Users
        // userList={userList}
        // deleteUser={this.handleDeleteUser}
        // getUserEdit={this.handleGetUserEdit}
        />
        <Modal
        // onSave={this.handleOnSaveUser}
        // userEdit={this.state.userEdit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: () => {
      let action = {
        type: "USER_EDIT",
        user: null
      }
      dispatch(action);
    }
   
  }
}

export default connect(null, mapDispatchToProps)(Home);
