import { Button, Card, CardActions, CardContent } from '@mui/material'
import './MiddleEastItems.scss'

type ProductProps = {
    id: number
    name: string
    description: string
    image: string
}

const MiddleEastItems = ({ name, description, image }: ProductProps) => {
    return (
        <>
            <Card
                style={{
                    backgroundColor: '#3f94ef99',
                    textAlign: 'center',
                }}
            >
                <CardContent>
                    <h3 className={`product-title`}>{name}</h3>
                    <div className="product-img">
                        <img src={image} alt="" className="image" />
                    </div>
                    <div className="product-description-middle-east">
                        {description}
                    </div>
                </CardContent>

                <CardActions className="btn-wrap">
                    <Button variant="contained">Start your journey</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default MiddleEastItems
