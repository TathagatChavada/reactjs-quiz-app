import {auth, googleAuthProvider} from "../config/firebase";
import {signInWithPopup, signOut} from "firebase/auth";

const signInWithGoogle = async () => 
{
    try {
        await signInWithPopup(auth, googleAuthProvider);
    } 

    catch (e) {
        console.error(e);
    }
}

const logOut = async () =>
{
    try {
        await signOut(auth, googleAuthProvider);
    } 
    
    catch (e) {
        console.error(e);
    }
}


export {signInWithGoogle, logOut}