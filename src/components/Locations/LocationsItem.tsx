import { Button, Card, CardActions, CardContent } from '@mui/material'
import './LocationsItem.scss'

type ProductProps = {
    id: number
    name: string
    description: string

    image: string
}

const LocationsItem = ({
    name,
    description,

    image,
}: ProductProps) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h3 className={`product-title`}>{name}</h3>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-description">{description}</div>
                </CardContent>

                <CardActions className="btn-wrap">
                    <Button variant="outlined">Let`s Travel`</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default LocationsItem
