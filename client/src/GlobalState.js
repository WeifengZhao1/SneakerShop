import React, {createContext,useState} from "react";

export const GloboalState = createContext()

export const DataProvider = ({children}) => {
    return (
        <GloboalState.Provider value = {"Value"}>
            {children}
        </GloboalState.Provider>
    )
}