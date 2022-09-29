import { Grid, Typography } from '@mui/material'
import { asiaArray } from './asiaArray'
import AsiaItems from './AsiaItems'

type Props = {}

type AsiaProps = {
    id: number
    name: string
    image: string
    description: string
}

const Asia = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                textAlign="center"
                margin={3}
                style={{
                    backgroundColor: '#f4f96fd1',
                    padding: '40px 0',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'tomato',
                }}
            >
                Magic Asia
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
                padding={'15px 140px'}
            >
                {asiaArray.map(
                    ({ id, name, image, description }: AsiaProps) => (
                        <Grid item xs={12} sm={6} md={6} key={id}>
                            <AsiaItems
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

export default Asia
