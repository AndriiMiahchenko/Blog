import { Button, Card, CardActions, CardContent } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './AfricaItems.scss'

type ProductProps = {
    id: number
    name: string
    description: string
    image: string
    area: string
}

const AfricaItems = ({ name, description, image, area }: ProductProps) => {
    return (
        <>
            <Card
                style={{
                    backgroundColor: '#efd73f99',
                    textAlign: 'center',
                }}
            >
                <CardContent>
                    <h3 className={`product-title`}>{name}</h3>
                    <div className="product-img">
                        <img src={image} alt="" className="image" />
                    </div>
                    <div className="product-description-africa">
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

export default AfricaItems
