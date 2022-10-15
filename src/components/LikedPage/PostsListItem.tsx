import { Grid, Card, CardContent, Button, CardActions } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addPostToCart, removePostFromCart } from 'redux/cartReducer'
import { Post } from 'components/Locations/locationsArray'
import { NavLink } from 'react-router-dom'
import { addLike, removeLike } from 'redux/likeReducer'

type Props = {
    post: Post
    removePostFromCart: (id: number) => void
}

const PostsListItem = ({ post, removePostFromCart }: Props) => {
    const isLiked = useAppSelector((state) => state.postsLikeState[post.id])
    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={6}>
            <Card
                style={{
                    backgroundColor: `${post.bgcolor}`,
                    textAlign: 'center',
                }}
            >
                <CardContent>
                    <Button
                        onClick={() =>
                            isLiked
                                ? dispatch(removeLike(post.id))
                                : dispatch(addLike(post.id))
                        }
                    >
                        {isLiked ? (
                            <Button
                                variant="outlined"
                                onClick={() => removePostFromCart(post.id)}
                            >
                                <FavoriteIcon />
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                onClick={() => addPostToCart(post.id)}
                            >
                                <FavoriteBorderIcon />
                            </Button>
                        )}
                    </Button>
                    <h3 className={`product-title`}>{post.name}</h3>
                    <div className="product-img">
                        <img src={post.image} alt="" />
                    </div>
                    <div
                        className="product-description"
                        style={{
                            backgroundColor: `${post.dsccolor}`,
                            color: `${post.color}`,
                        }}
                    >
                        {post.description}
                    </div>
                </CardContent>
                <CardActions className="btn-wrap">
                    <Button variant="contained">
                        <NavLink to={post.area} className="btn-locations">
                            Let`s Travel
                        </NavLink>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default PostsListItem
