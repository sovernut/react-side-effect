import React, { useState,useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: () => { }
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const isLoggedInData = "isLoggedIn"

    useEffect(() => {
        const loginInfo = localStorage.getItem(isLoggedInData)
        if (loginInfo === "1") setIsLoggedIn(true)
      }, [])

    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.removeItem(isLoggedInData)

    }
    const loginHandler = () => {
        setIsLoggedIn(true)
        localStorage.setItem(isLoggedInData, "1")

    }
    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
    }}>{props.children}</AuthContext.Provider>
}

export default AuthContext