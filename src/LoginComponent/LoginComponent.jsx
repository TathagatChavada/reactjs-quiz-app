import {signInWithGoogle} from "./LoginLogic";
import './Login.css';


const LoginContainer = () =>
{
    return (
        <>
            <div className="container">
                <div><h1>Welcome to the Global Chat App☕</h1></div>
                <div className='login-box'>
                    <button onClick={signInWithGoogle} className='signin-button'>Sign In with Google</button>
                </div>
            </div>
        </>
    )
}

export {LoginContainer}