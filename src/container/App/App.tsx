import CssBaseline from '@mui/material/CssBaseline'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { omit } from 'lodash'
import { useState } from 'react'

type PostsInCartProps = {
    [id: number]: number
}

const App = () => {
    const [postsInCart, setPostsInCart] = useState<PostsInCartProps>({})

    const addPostToCart = (id: number, count: number) => {
        setPostsInCart((prevState: PostsInCartProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removePostFromCart = (id: number) => {
        setPostsInCart((prevState: PostsInCartProps) => omit(prevState, [id]))
    }

    return (
        <>
            <CssBaseline />
            <Header />
            <Main
                addPostToCart={addPostToCart}
                postsInCart={postsInCart}
                removePostFromCart={removePostFromCart}
            />
            <Footer />
        </>
    )
}

export default App
