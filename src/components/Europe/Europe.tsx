import { Grid, Typography } from '@mui/material'
import { europeArray } from './europeArray'
import EuropeItems from './EuropeItems'

type Props = {}

type EuropeProps = {
    id: number
    name: string
    image: string
    description: string
    area: string
}

const Europe = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                textAlign="center"
                margin={3}
                style={{
                    backgroundColor: '#767769d1',
                    padding: '40px 0',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'red',
                }}
            >
                romantic Europe
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
                padding={'15px 140px'}
            >
                {europeArray.map(
                    ({ id, name, image, description, area }: EuropeProps) => (
                        <Grid item xs={12} sm={6} md={6} key={id}>
                            <EuropeItems
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

export default Europe
