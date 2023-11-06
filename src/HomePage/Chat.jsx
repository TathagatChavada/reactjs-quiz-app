import { logOut } from "../LoginComponent/LoginLogic"
import { auth } from "../config/firebase";
import {Form} from "./ChatLogic"




const Chat = () => {
    return (
        <>
            <ul className="navbar">

                <li>
                    {/* <p className="circle"></p> */}
                    <img className="circle" src={auth?.currentUser?.photoURL} alt="Profile" />
                </li>

                <li>
                    <button className="logout" onClick={logOut}>Sign Out</button>
                </li>
            </ul>      

            <Form/>
        </>
    )
}

 
export {Chat}