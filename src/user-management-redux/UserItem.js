import React, { Component } from "react";
import {connect} from "react-redux";
import {actDeleteUser,actUserEdit} from "./../redux/actions";

class UserItem extends Component {
 
  render() {
    const {user}=this.props;
    console.log(this.props);
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={()=>{
              this.props.userEdit(user);
            }}
          
          >
            Edit
          </button>
          <button className="btn btn-danger" 
          onClick={()=>{
            this.props.deleteUser(user.id)
          }}
            >Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispathToProps = dispatch =>{
  return {
    deleteUser: (id)=>{
      dispatch(actDeleteUser(id));

    },
    userEdit: user =>{
      dispatch(actUserEdit(user));
    }
  }
};
export default connect(null,mapDispathToProps) (UserItem);
