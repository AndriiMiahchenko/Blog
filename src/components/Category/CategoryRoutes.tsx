import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Africa from 'components/Category/Africa'
import America from './America'
import Asia from './Asia'
import Australia from './Australia'
import Europe from './Europe'
import MiddleEast from './MiddleEast'

type Props = {
    locationsLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}

const CategoryRoutes = ({ locationsLikeState, toggleLikeState }: Props) => {
    return (
        <Routes>
            <Route
                path="africa"
                element={
                    <Africa
                        locationsLikeState={locationsLikeState}
                        toggleLikeState={toggleLikeState}
                    />
                }
            />
            <Route
                path="asia"
                element={
                    <Asia
                        locationsLikeState={locationsLikeState}
                        toggleLikeState={toggleLikeState}
                    />
                }
            />
            <Route
                path="australia"
                element={
                    <Australia
                        locationsLikeState={locationsLikeState}
                        toggleLikeState={toggleLikeState}
                    />
                }
            />
            <Route
                path="america"
                element={
                    <America
                        locationsLikeState={locationsLikeState}
                        toggleLikeState={toggleLikeState}
                    />
                }
            />
            <Route
                path="middle-east"
                element={
                    <MiddleEast
                        locationsLikeState={locationsLikeState}
                        toggleLikeState={toggleLikeState}
                    />
                }
            />
            <Route
                path="europe"
                element={
                    <Europe
                        locationsLikeState={locationsLikeState}
                        toggleLikeState={toggleLikeState}
                    />
                }
            />
        </Routes>
    )
}

export default CategoryRoutes
