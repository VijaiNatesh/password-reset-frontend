import React, { useState } from 'react'
import styles from '../../../src/myStyles.module.css'
import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/action/user/userAction';

function User() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const dispatch = useDispatch()

    const submithandler = (e) => {
       e.preventDefault()
        const userData = {
            name: name,
            email: email,
            password: password
        }
        dispatch(createUser(userData))      
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <form className={styles.userform} >
                <div>
                    <label >Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                </div>
                <div className={styles.userformlabel}>
                    <label >Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                </div>
                <div className={styles.userformlabel}>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                </div>
               <button onClick = {submithandler}>Create User</button>
            </form>            
        </div>
    )
}

export default User
