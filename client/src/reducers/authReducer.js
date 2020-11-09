const initialState = {
    user: null
}

function authReducer(state = initialState, action){
    // switch (action.type) {
    //     case 'REGISTER_USER':
    //         console.log(state,'authReducer');
    //             return {...state,
    //                 userData: {
    //                     firstName: action.userData.firstName
    //                 }
    //             }
    //         break;
    
    //     default:
    //         break;
    // }
  
    return state;
}

export default authReducer;


/*
[...state,{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }];
*/