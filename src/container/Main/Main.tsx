import CategoryRoutes from 'components/Category/CategoryRoutes'
import LocationsRoutes from 'components/LocationsRoutes/LocationsRoutes'
import Slider from 'components/Slider/Slider'
import FavouritePage from 'pages/FavouritePage/FavouritePage'
import { Route, Routes } from 'react-router-dom'

type Props = {
    addPostToCart: (id: number, count: number) => void
    removePostFromCart: (id: number) => void

    postsInCart: {
        [id: number]: number
    }
}

const Main = ({ addPostToCart, postsInCart, removePostFromCart }: Props) => {
    return (
        <>
            <Slider />
            <CategoryRoutes
                addPostToCart={addPostToCart}
                removePostFromCart={removePostFromCart}
            />
            <LocationsRoutes
                addPostToCart={addPostToCart}
                removePostFromCart={removePostFromCart}
            />
            <Routes>
                <Route
                    path="favourits"
                    element={
                        <FavouritePage
                            removePostFromCart={removePostFromCart}
                            postsInCart={postsInCart}
                        />
                    }
                />
            </Routes>
        </>
    )
}

export default Main
