import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContainer } from "./LoginComponent/LoginComponent"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";
import { Chat } from "./HomePage/Chat"

const App =  () => {

  const [user] =  useAuthState(auth);

  return (

    <Router>
      <Routes>
        <Route path="/login" element = {<LoginContainer/>}/>

        <Route path="/chat" element ={user ? <Chat /> : <LoginContainer />}/>

        <Route path="/" element={user ? <Chat /> : <LoginContainer />}/>
        
      </Routes>
    </Router>
  )
}

export default App
