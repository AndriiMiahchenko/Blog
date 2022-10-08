import { Grid, Typography } from '@mui/material'
import { locationsArray } from 'components/Locations/locationsArray'
import LocationsItem from 'components/Locations/LocationsItem'

type Props = {
    locationsLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
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

const Australia = ({ locationsLikeState, toggleLikeState }: Props) => {
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
                            category === 'australia'
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
                                    isLiked={locationsLikeState[id]}
                                    toggleLikeState={toggleLikeState}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}

export default Australia
