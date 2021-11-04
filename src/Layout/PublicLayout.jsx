import React from 'react'
import  Navbars  from '../Components/Navbars'

export const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars/>
            Este es mi publicLayout
           {children} 
        </div>
    )
}

export default PublicLayout