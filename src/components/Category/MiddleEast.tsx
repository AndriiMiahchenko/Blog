import { Grid, Typography } from '@mui/material'
import locationsArray from 'components/Locations/locationsArray'
import LocationsItem from 'components/Locations/LocationsItem'

type Props = {
    addPostToCart: (id: number, count: number) => void
    removePostFromCart: (id: number) => void
}

type LocationsProps = {
    id: number
    name: string
    image: string
    description: string
    area: string
    bgcolor: string
    dsccolor: string
    color: string
    category: string
}

const MiddleEast = ({ addPostToCart, removePostFromCart }: Props) => {
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
                }}
            >
                Make choise, and start your first travel
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
                padding={'15px 140px'}
            >
                {locationsArray
                    .filter(
                        ({ category }: LocationsProps) =>
                            category === 'middle-east'
                    )
                    .map(
                        ({
                            id,
                            name,
                            image,
                            description,
                            area,
                            bgcolor,
                            dsccolor,
                            color,
                        }: LocationsProps) => (
                            <Grid item xs={12} sm={6} md={6} key={id}>
                                <LocationsItem
                                    id={id}
                                    name={name}
                                    image={image}
                                    description={description}
                                    area={area}
                                    bgcolor={bgcolor}
                                    dsccolor={dsccolor}
                                    color={color}
                                    addPostToCart={addPostToCart}
                                    removePostFromCart={removePostFromCart}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}

export default MiddleEast
