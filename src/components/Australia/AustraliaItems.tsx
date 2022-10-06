import { Button, Card, CardActions, CardContent } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './AustraliaItems.scss'

type ProductProps = {
    id: number
    name: string
    description: string
    image: string
    area: string
}

const AustraliaItems = ({ name, description, image, area }: ProductProps) => {
    return (
        <>
            <Card
                style={{
                    backgroundColor: '#a0e0da',
                    textAlign: 'center',
                }}
            >
                <CardContent>
                    <h3 className={`product-title`}>{name}</h3>
                    <div className="product-img">
                        <img src={image} alt="" className="image" />
                    </div>
                    <div className="product-description-australia">
                        {description}
                    </div>
                </CardContent>

                <CardActions className="btn-wrap">
                    <Button variant="contained">
                        <NavLink to={area} className="btn-journey">
                            Start your journey
                        </NavLink>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default AustraliaItems
