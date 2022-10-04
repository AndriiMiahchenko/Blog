import { Grid, Typography } from '@mui/material'
import { africaArray } from './africaArray'
import AfricaItems from './AfricaItems'

type Props = {}

type AfricaProps = {
    id: number
    name: string
    image: string
    description: string
    area: string
}

const Africa = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                textAlign="center"
                margin={3}
                style={{
                    backgroundColor: '#ed7735d1',
                    padding: '40px 0',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'black',
                }}
            >
                Hot Africa
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
                padding={'15px 140px'}
            >
                {africaArray.map(
                    ({ id, name, image, description, area, }: AfricaProps) => (
                        <Grid item xs={12} sm={6} md={6} key={id}>
                            <AfricaItems
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

export default Africa
