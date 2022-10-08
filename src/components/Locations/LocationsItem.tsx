import { Button, Card, CardActions, CardContent } from '@mui/material'
import './LocationsItem.scss'
import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

type ProductProps = {
    id: number
    name: string
    description: string
    image: string
    area: string
    bgcolor: string
    dsccolor: string
    color: string
    isLiked?: boolean
    toggleLikeState: (id: number) => void
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
    isLiked = false,
    toggleLikeState,
}: ProductProps) => {
    return (
        <>
            <Card
                style={{
                    backgroundColor: `${bgcolor}`,
                    textAlign: 'center',
                }}
            >
                <CardContent>
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
                    <Button
                        variant="contained"
                        onClick={() => toggleLikeState(id)}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default LocationsItem
