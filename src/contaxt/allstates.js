import React, { useState } from "react";
import MyContext from "./contaxt";

const MyProvider = ({ children }) => {

    const [sideBarIcon, setsideBarIcon] = useState(false);

    const handleResponse = async (authResponse) => {
        if (authResponse.status === 401) {
            localStorage.removeItem("authTokenNew");
            localStorage.removeItem("authUserNew");
            window.location.reload();
        }
        return await authResponse.json();
    }

    const myStates = {
        sideBarIcon: sideBarIcon,
        setsideBarIcon: setsideBarIcon,
        handleResponse: handleResponse,
    }

    return (
        <>
            <MyContext.Provider value={myStates}>
                {children}
            </MyContext.Provider>
        </>
    )
}

export default MyProvider