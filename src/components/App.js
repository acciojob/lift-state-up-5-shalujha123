
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {isLoggedIn ? <p>You are logged in!</p> : <ChildComponent handleSubmit={() => setIsLoggedIn(true)} />}
    </div>
  )
}

export default App
