import React, { Component } from "react";
import {connect} from "react-redux";
class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER"
      },
      errors: {
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: ""
      }
    };

    console.log("constructor");
  }

  componentWillReceiveProps(nextProps) {
    /**
     * Chạy khi props từ componnet Cha truyền vào thay đổi
     * ComponnetWillPreceiveProps chỉ chạy khi dc viết tại component con
     * -->khi cha thay đổi truyền vào con
     */
    console.log(nextProps);
    if(nextProps && nextProps.userEdit){
      //nextProps tồn tại && nextProps.userEdit !=null
      //EDIT
      this.setState({
        values:{
          ...this.state.values,
          id: nextProps.userEdit.id, //co id
          username: nextProps.userEdit.username,
          name: nextProps.userEdit.name,
          email:nextProps.userEdit.email,
          phoneNumber:nextProps.userEdit.phoneNumber,
          type:nextProps.userEdit.type
        }
      })
    }else{
      //ADD-reset từng ô input cho value rỗng
      this.setState({
        values: {
          ...this.state.values, 
          //ko co id
          username: "",
          name: "",
          email: "",
          phpneNumber:"",
          type: ""
        }
      })
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    // C1:
    // const state = this.state
    // this.setState({
    //   ...this.state.value,
    //   [name]: value,
    // })
    // C2: sd lai state nen dung C2
    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      }
    })
  };
  handleBlur = (event) => {
    const { value, name } = event.target;
    const errorMessage = this.validate(name, value);
    // if (errorMessage) {
    this.setState((state) => {
      return {
        errors: {
          ...state.errors,
          [name]: errorMessage,
        },
      };
    });
    // }


    // if (name === 'username') {
    //   if (!value) {
    //     this.setState(state) => {
    //       return
    //     }
    //   }
    // }
  }

  validate = (name, value) => {
    let errorMessage = ""
    if (name === 'username') {
      errorMessage = !value ? "Username khong dc de trong" : "";
    }
    if (name === 'name') {
      errorMessage = !value ? "name khong dc de trong" : "";
    }
    if (name === 'username') {
      errorMessage = !value ? "Username khong dc de trong" : "";
    }
    if (name === 'email') {
      if (!value) {
        errorMessage = "Email khong dc de trong";
      } else {
        const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
        errorMessage = !isValid ? "Email ko hop le" : "";
      }
    }
    if (name === 'phoneNumber') {
      errorMessage = !value ? "phoneNumber ko dc de trong" : "";
    }
    return errorMessage;
  };

  handleSubmit = event => {
    event.preventDefault();
    let isValid = true;
    for (let key in this.state.values) {
      const errorMessage = this.validate(key, this.state.values[key]);
      if (errorMessage) {
        isValid = false;
      }
      this.setState((state) => {
        return {
          errors: {
            ...state.errors,
            [key]: errorMessage,
          },
        };
      });
    }
    if (!isValid) return;

    //Thêm user
  
    this.props.onSave(this.state.values);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
              {/* != null thì edit, null thì add  */}
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
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control"
                    value={this.state.values.username}
                    // onChange={(event)=>{this.setState({username: event.target.value})}}
                    name="username"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.username && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.username}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" value={this.state.values.name}
                    name="name"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.name && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.name}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" value={this.state.values.email}
                    name="email"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.email && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.email}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Number</label>
                  <input type="text" className="form-control" value={this.state.values.phoneNumber}
                    name="phoneNumber"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.phoneNumber && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.phoneNumber}</span>
                    </div>
                  )}
                </div>
                <div className="form-group" >
                  <label>Type</label>
                  <select className="form-control" value={this.state.values.type}
                    name="type" onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  >
                    {this.state.errors.type && (
                      <div className="alert alert-danger">
                        <span>{this.state.errors.type}</span>
                      </div>
                    )}
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success"
                // onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state =>{
  return {
    userEdit : state.userReducer.userEdit
  };
}
const mapDispatchToProps = dispatch =>{
  return {
    onSave: (user)=>{
      let action = {
        type: "ON_SAVE",
        user: user
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Modal);
