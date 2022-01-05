import React, {useState} from 'react'
import styles from '../../../src/myStyles.module.css'
import {useDispatch} from 'react-redux'
import { resetPassword } from '../../redux/action/resetpassword/resetpasswordAction';
import {useParams} from "react-router-dom"

function Resetpassword() {
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

   const {userId, token} = useParams()
   console.log(userId, token)

    const resetPasswordHandler = (e) => {
            e.preventDefault();           
            dispatch(resetPassword(password, userId, token))
            setPassword(" ")
    }
    return (
        <div>
        <form className = {styles.userform}>
        <label className = {styles.userformlabel}>New Password:</label><br/>
        <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        <button className = {styles.userformlabel} onClick = {resetPasswordHandler}> Reset Password </button>
        </form>            
        </div>
    )
}

export default Resetpassword
