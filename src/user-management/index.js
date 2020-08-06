import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP",
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP",
        },
      ],
      userEdit: null,
      keyword: "",
    };
  }
  timViTri = (id) => {
    return this.state.userList.findIndex((user) => {
      return id === user.id;
    });
  };
  handleDeleteUser = (id) => {
    const index = this.timViTri(id);
    // console.log(id);
    let userList = [...this.state.userList];
    if (index !== -1) {
      userList.splice(index, 1);
    }
    this.setState({
      userList,
    });
  };
  handleOnSaveUser = (user) => {
    console.log(user);
    if (user.id) {
      //UPDATE
      let userList = [...this.state.userList];
      const index = this.timViTri(user.id);
      if (index !== -1) {
        userList[index] = user;
        this.setState({
          userList,
          userEdit: user,
        });
      }
    } else {
      //ADD
      const userList = [...this.state.userList];
      const id = Math.random().toString(36).substr(2, 5);
      // id : Math.random() * 100
      userList.push({ ...user, id });
      this.setState({
        userList,
      });
    }
  };

  handleGetUserEdit = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  //Search
  handleGetKeyWord = (keyword) => {
    // console.log(keyword);
    // let userList = [...this.state.userList];

    // userList.filter((item)=>{
    //   return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    // });

    this.setState({
      keyword,
    });
  };

  render() {
    let { userList, keyword } = this.state;
    userList = userList.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleGetKeyWord} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            ADD USER
          </button>
        </div>
        <Users
          userList={userList}
          deleteUser={this.handleDeleteUser}
          getUserEdit={this.handleGetUserEdit}
        />
        <Modal onSave={this.handleOnSaveUser} userEdit={this.state.userEdit} />
      </div>
    );
  }
}

export default Home;
