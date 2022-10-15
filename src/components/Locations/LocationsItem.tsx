import { Button, Card, CardActions, CardContent } from '@mui/material'
import './LocationsItem.scss'
import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { useState } from 'react'

type ProductProps = {
    id: number
    name: string
    description: string
    image: string
    area: string
    bgcolor: string
    dsccolor: string
    color: string
    addPostToCart: (id: number, count: number) => void
    removePostFromCart: (id: number) => void
}

const LocationsItem = ({
    id,
    name,
    description,
    image,
    area,
    bgcolor,
    dsccolor,
    color,
    addPostToCart,
    removePostFromCart,
}: ProductProps) => {
    const [count, setCount] = useState<number>(1)
    const isLiked = useAppSelector((state) => state.postsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <>
            <Card
                style={{
                    backgroundColor: `${bgcolor}`,
                    textAlign: 'center',
                }}
            >
                <CardContent>
                    <Button
                        onClick={() =>
                            isLiked
                                ? dispatch(removeLike(id))
                                : dispatch(addLike(id))
                        }
                    >
                        {isLiked ? (
                            <Button
                                variant="outlined"
                                onClick={() => removePostFromCart(id)}
                            >
                                <FavoriteIcon />
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                onClick={() => addPostToCart(id, count)}
                            >
                                <FavoriteBorderIcon />
                            </Button>
                        )}
                    </Button>

                    <h3 className={`product-title`}>{name}</h3>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <div
                        className="product-description"
                        style={{
                            backgroundColor: `${dsccolor}`,
                            color: `${color}`,
                        }}
                    >
                        {description}
                    </div>
                </CardContent>

                <CardActions className="btn-wrap">
                    <Button variant="contained">
                        <NavLink to={area} className="btn-locations">
                            Let`s Travel
                        </NavLink>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default LocationsItem
