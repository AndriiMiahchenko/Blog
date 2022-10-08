import CssBaseline from '@mui/material/CssBaseline'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { useState } from 'react'

type LocationsLikeStateProps = {
    [id: number]: boolean
}

const App = () => {
    const [locationsLikeState, setLocationsLikeState] =
        useState<LocationsLikeStateProps>({})

    const toggleLikeState = (id: number) => {
        setLocationsLikeState((prevState: LocationsLikeStateProps) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header />
            <Main
                locationsLikeState={locationsLikeState}
                toggleLikeState={toggleLikeState}
            />
            <Footer />
        </>
    )
}

export default App
