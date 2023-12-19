import { addDoc, collection, serverTimestamp, 
        onSnapshot, query, where, orderBy} from "firebase/firestore";

import { auth, db } from "../config/firebase";
import { useEffect, useState, useRef } from "react";
import "./Chat.css"


const Form = () => {

    const [newMessage, setNewMessage] = useState("");
    const [message, setMessage] = useState([]);
    const chatboxRef = useRef();

    const messageRef = collection(db,"messages");

    
    useEffect(() => {
        const queryMessages = query(messageRef, where("room", "==","1"), orderBy("createdAt"));

        onSnapshot(queryMessages, (snapshot) => {

            let messages = [];

            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
                setMessage(messages);
            })

        });

    },[]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newMessage === ""){
            return;
        }

        await addDoc(messageRef,
            {
                text: newMessage,
                createdAt: serverTimestamp(),
                user: auth?.currentUser?.displayName,
                room: "1"
            });

        setNewMessage("");
    }

    

    return (     
        <>   
            <div className="chat-box chatbox-content" ref={chatboxRef}>
                {message.map( (m) =>

                    <h3 className={`message ${m.user === auth?.currentUser?.displayName ? "own-message": "other-message"}`}
                     key={m.createdAt}>{m.user}: {m.text} </h3>
                )}
            </div>

            <div className="textarea">

                <input type="text" placeholder="Enter the text"
                    onChange={(e)=> setNewMessage(e.target.value)} value={newMessage}/>
                <button className="send" onClick={handleSubmit} >Send</button>

            </div>
        </>
    )

}



export {Form}