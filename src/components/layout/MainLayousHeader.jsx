
import React from 'react'
import Menu from '../Menu/Menu'



const MainLayousHeader = ({children}) => {
    return (
        <>
      <Menu/>
            {children}
        </>
    )
}

export default MainLayousHeader
