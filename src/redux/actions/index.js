import { DELETE_USER } from "../constants/ActionType";

export const actDeleteUser =(id)=>{
    return {
        type: DELETE_USER,
        id
    };
};

export const actUserEdit =(user)=>{
    return {
        type: DELETE_USER,
        user:user
    };
};
