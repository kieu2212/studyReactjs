import {DELETE_USER} from './../constants/ActionType';

let initialState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    },
    {
      id: 2,
      name: "Nguyen Dinh Phuc",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP"
    }
  ],
  userEdit: null,
  keyword: ""
};

const userReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "DELETE_USER":

      let index = state.userList.findIndex((item) => {
        return item.id === action.id;
      })
      if (index !== -1) {
        let userList = [...state.userList];
        userList.splice(index, 1);

        state.userList = userList;
      }
      return { ...state };

    case "ON_SAVE":
      if (action.user.id) {
        //UPDATE
        let index = state.userList.findIndex(item => {
          return item.id === action.user.id;
        }
        );
        if (index !== -1) {
          const userList = [...state.userList];
          userList[index] = action.user;
          state.userList = userList;

        } else {
          //ADD
          const userList = [...state.userList];
          const id = Math.random().toString(36).substr(2, 5);
          // id : Math.random() * 100 
          userList.push({ ...action.user, id });
          state.userList = userList;
          return { ...state };

        }
      }
    case "USER_EDIT":
      state.userEdit = action.user;
      return { ...state };

    case "GET_KEYWORD":
      state.keyword= action.keyword;
      return { ...state };


    default:
      return { ...state };
  }
};

export { userReducer }