import React, { createContext } from 'react';

// create Pet Context
const PetContext = createContext({children});
// create Pet Provider
export const PetProvider = () => {
    const value = {};
    return(
        <PetContext.Provider value={value}>
            {children}
        </PetContext.Provider>
    )
};