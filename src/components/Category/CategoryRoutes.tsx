import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Africa from './Africa'
import America from './America'
import Asia from './Asia'
import Australia from './Australia'
import Europe from './Europe'
import MiddleEast from './MiddleEast'

type Props = {}

const CategoryRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="africa" element={<Africa />} />
            <Route path="asia" element={<Asia />} />
            <Route path="australia" element={<Australia />} />
            <Route path="america" element={<America />} />
            <Route path="middle-east" element={<MiddleEast />} />
            <Route path="europe" element={<Europe />} />
        </Routes>
    )
}

export default CategoryRoutes
