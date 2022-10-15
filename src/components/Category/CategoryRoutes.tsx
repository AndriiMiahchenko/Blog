import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Africa from 'components/Category/Africa'
import America from './America'
import Asia from './Asia'
import Australia from './Australia'
import Europe from './Europe'
import MiddleEast from './MiddleEast'

type Props = {
    addPostToCart: (id: number, count: number) => void
    removePostFromCart: (id: number) => void
}

const CategoryRoutes = ({ addPostToCart, removePostFromCart }: Props) => {
    return (
        <Routes>
            <Route
                path="africa"
                element={
                    <Africa
                        addPostToCart={addPostToCart}
                        removePostFromCart={removePostFromCart}
                    />
                }
            />
            <Route
                path="asia"
                element={
                    <Asia
                        addPostToCart={addPostToCart}
                        removePostFromCart={removePostFromCart}
                    />
                }
            />
            <Route
                path="australia"
                element={
                    <Australia
                        addPostToCart={addPostToCart}
                        removePostFromCart={removePostFromCart}
                    />
                }
            />
            <Route
                path="america"
                element={
                    <America
                        addPostToCart={addPostToCart}
                        removePostFromCart={removePostFromCart}
                    />
                }
            />
            <Route
                path="middle-east"
                element={
                    <MiddleEast
                        addPostToCart={addPostToCart}
                        removePostFromCart={removePostFromCart}
                    />
                }
            />
            <Route
                path="europe"
                element={
                    <Europe
                        addPostToCart={addPostToCart}
                        removePostFromCart={removePostFromCart}
                    />
                }
            />
        </Routes>
    )
}

export default CategoryRoutes
