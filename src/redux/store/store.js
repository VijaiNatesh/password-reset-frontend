import {createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { userReducer } from "../reducer/user/userReducer";
import { forgotpasswordReducer } from "../reducer/forgotpassword/forgotpasswordReducer";
import { resetpasswordReducer } from "../reducer/resetpassword/resetpasswordReducer";


const middleware = [thunk]



const reducer = combineReducers({
  user: userReducer,
  token: forgotpasswordReducer,
  resetPassword: resetpasswordReducer
})

const store = createStore(
    reducer,   
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store