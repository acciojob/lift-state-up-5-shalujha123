import React from "react"

const ChildComponent = ({handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input id="username" type="text" name="username" /><br /><br />
            <label for="password">Password:</label>
            <input id="password" type="password" name="password" /><br /><br />
            <button type="submit">Login</button>
        </form>
    )
}

export default ChildComponent