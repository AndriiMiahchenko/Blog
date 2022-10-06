import { Grid, Typography } from '@mui/material'
import { australiaArray } from './australiaArray'
import AustraliaItems from './AustraliaItems'

type Props = {}

type AustraliaProps = {
    id: number
    name: string
    image: string
    description: string
    area: string
}

const Australia = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                textAlign="center"
                margin={3}
                style={{
                    backgroundColor: '#009688bd',
                    padding: '40px 0',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'red',
                }}
            >
                Australia
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
                padding={'15px 140px'}
            >
                {australiaArray.map(
                    ({ id, name, image, description, area }: AustraliaProps) => (
                        <Grid item xs={12} sm={6} md={6} key={id}>
                            <AustraliaItems
                                id={id}
                                name={name}
                                image={image}
                                description={description}
                                area={area}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default Australia
