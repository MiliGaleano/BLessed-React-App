import React, {useState, useContext, useEffect} from 'react'
import pinkmilk from '../../assets/images/pinkmilk.png'
import app from '../../config/config'
import 'firebase/auth'
import './styles.css'
import { Auth } from '../../context/authContext'
import { useHistory } from "react-router-dom";

export default function Login() {
    const { user } = useContext(Auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    let history = useHistory()
    useEffect(() => {
        if (user) {
            history.push("/");
        }
    }, [history, user]);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const signUpSubmit = async () => {
        await app.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            let errorCode = error.code
            let errorMessage = error.message

            if (errorCode === 'auth/weak-password') {
              alert('The password is not strong enough, please try again.')
            } else {
              alert(errorMessage)
            }
        })
    }

    const LoginSubmit = async () => {
        await app.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            let errorCode = error.code
            let errorMessage = error.message

            if (errorCode === 'auth/wrong-password') {
            alert('Wrong password, please try again.')
            } else if (errorCode === 'auth/invalid-email') {
            alert('The email address is not valid, please try again.\n(e.g. blessed@react.com)')
            } else if (errorCode === 'auth/user-not-found') {
            alert('There is no user registered with that email address, please try again.')
            } else {
                alert(errorMessage)
            }
        })
    }

    const ResetPassword = async () => {
        await app.auth().sendPasswordResetEmail(email).then(function() {
            alert('Password reset email sent!')
          }).catch(function(error) {
            let errorCode = error.code
            let errorMessage = error.message

            if (errorCode === 'auth/invalid-email') {
              alert(errorMessage)
            } else if (errorCode === 'auth/user-not-found') {
              alert(errorMessage)
            }
        })
    }

    return (
        <div className='divRegistration'>
            <img src={pinkmilk} alt="pink milk" className='imgRegistration'/>
            <div className='formLogin'>
                <h1 className='h1Login'>Please complete this form to log in or sign up</h1>
                <div className="inputsLogin">
                    <label htmlFor="usermail" className='labelLogin'>Email:</label>
                    <input type="email" name="usermail" className="emailInput" onChange={handleEmail}/>
                    <label htmlFor="userpassword" className='labelLogin'>Password:</label>
                    <input type="password" name="userpassword" className="passwordInput" onChange={handlePassword}/>
                </div>
                <div className='buttonsLogin'>
                    <button className="buttonsubmitSign" onClick={signUpSubmit}>Sign up</button>
                    <button className="buttonsubmitLog" onClick={LoginSubmit}>Log in</button>
                </div>
                <button className="buttonForgot" onClick={ResetPassword}>forgot my password</button>
            </div>
    </div>
    )
}