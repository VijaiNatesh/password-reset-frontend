import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { createToken } from '../../redux/action/forgotpassword/forgotpasswordAction';
import styles from '../../../src/myStyles.module.css'
function Forgotpassword() {
    const [email, setEmail] = useState()
    const dispatch = useDispatch()

    const tokenHandler = (e) => {
        e.preventDefault();
        const emailData = ({
            email : email
        })
        dispatch(createToken(emailData))
        setEmail("")
    }

    return (
        <div>
            <form className = {styles.userform}>
                <label className = {styles.userformlabel}>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            <button   className = {styles.userformlabel} onClick = {tokenHandler}>Forgot Password</button>           
            </form>

        </div>
    )
}

export default Forgotpassword
