import { Grid } from '@mui/material'
import LikedPageList from 'components/LikedPage/LikedPageList'
import PostsListItem from 'components/LikedPage/PostsListItem'

type Props = {
    postsInCart: {
        [id: number]: number
    }
    removePostFromCart: (id: number) => void
}

const FavoritePage = ({ postsInCart, removePostFromCart }: Props) => {
    return (
        <div
            style={{
                padding: '30px 0',
            }}
        >
            <Grid container spacing={4}>
                <LikedPageList
                    postsInCart={postsInCart}
                    PostItem={PostsListItem}
                    removePostFromCart={removePostFromCart}
                />
            </Grid>
        </div>
    )
}

export default FavoritePage
