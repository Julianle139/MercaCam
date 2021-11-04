import React, { Children } from 'react'
import PrivateRoutes from '../Components/PrivateRoutes'

const PrivateLayout = ({Children}) => {
    return (
        <PrivateRoutes>
            <div>
            Este es mi PrivateRoute
            {Children}
        </div>
        </PrivateRoutes>
    )
}

export default PrivateLayout
