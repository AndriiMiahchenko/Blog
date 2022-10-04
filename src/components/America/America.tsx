import { Grid, Typography } from '@mui/material'
import { americaArray } from './americaArray'
import AmericaItems from './AmericaItems'

type Props = {}

type AmericaProps = {
    id: number
    name: string
    image: string
    description: string
    area: string
}

const America = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                textAlign="center"
                margin={3}
                style={{
                    backgroundColor: '#53c743db',
                    padding: '40px 0',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'tomato',
                }}
            >
                paradise in Central and South America
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
                padding={'15px 140px'}
            >
                {americaArray.map(
                    ({ id, name, image, description, area, }: AmericaProps) => (
                        <Grid item xs={12} sm={6} md={6} key={id}>
                            <AmericaItems
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

export default America
