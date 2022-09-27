import { Grid, Typography } from '@mui/material'
import { locationsArray } from './locationsArray'
import LocationsItem from './LocationsItem'

type Props = {}

type LocationsProps = {
    id: number
    name: string
    image: string
    description: string
}

const Locations = (props: Props) => {
    return (
        <>
            <Typography variant="h4" textAlign="center" margin={3}>
                Make choise, and start your first travel
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                padding={'15px'}
            >
                {locationsArray.map(
                    ({ id, name, image, description }: LocationsProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <LocationsItem
                                id={id}
                                name={name}
                                image={image}
                                description={description}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default Locations
