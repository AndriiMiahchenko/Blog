import { Button, Card, CardActions, CardContent } from '@mui/material'
import './AmericaItems.scss'

type ProductProps = {
    id: number
    name: string
    description: string
    image: string
}

const AmericaItems = ({ name, description, image }: ProductProps) => {
    return (
        <>
            <Card
                style={{
                    backgroundColor: '#55ef3f99',
                    textAlign: 'center',
                }}
            >
                <CardContent>
                    <h3 className={`product-title`}>{name}</h3>
                    <div className="product-img">
                        <img src={image} alt="" className="image" />
                    </div>
                    <div className="product-description-america">
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

export default AmericaItems
