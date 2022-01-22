import React, {createContext,useState} from 'react'
import ProductsAPI from './api/ProductsAPI'

import process from 'process';

var Promise = require('es6-promise').Promise;


process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
  });
  
 

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token,setToken] = useState(false)

    // ProductsAPI()
    const state = {
        token: [token,setToken],
        productsAPI: ProductsAPI()
    } 

    return (
        <GlobalState.Provider value = {state}>
            {children}
        </GlobalState.Provider>
    )


    
}

