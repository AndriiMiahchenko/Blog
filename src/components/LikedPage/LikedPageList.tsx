import { keys } from 'lodash'
import locationsArray from 'components/Locations/locationsArray'
import { getPostsObject, Post } from 'components/Locations/locationsArray'
import PostsListItem from './PostsListItem'
import { Grid, Typography } from '@mui/material'

type Props = {
    postsInCart: {
        [id: number]: number
    }
    postsObject?: {
        [id: number]: Post
    }

    PostItem?: any
    removePostFromCart: (id: number) => void
}

const LikedPageList = ({
    postsInCart,
    postsObject = getPostsObject(locationsArray),
    PostItem = PostsListItem,
    removePostFromCart,
}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                textAlign="center"
                margin={3}
                style={{
                    backgroundColor: '#aad7a1c4',
                    padding: '40px 0',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'tomato',
                    width: '800px',
                    margin: '20px auto',
                }}
            >
                Favorites
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
                padding={'15px 140px'}
            >
                {keys(postsInCart).map((postId) => (
                    <PostItem
                        key={postId}
                        post={postsObject[parseInt(postId)]}
                        removePostFromCart={removePostFromCart}
                    />
                ))}
            </Grid>
        </>
    )
}

export default LikedPageList
