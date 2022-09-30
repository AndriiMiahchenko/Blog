import { Grid, Typography } from '@mui/material'
import { middleEastArray } from './middleEastArray'
import MiddleEastItems from './MiddleEastItems'

type Props = {}

type MiddleEastProps = {
    id: number
    name: string
    image: string
    description: string
}

const MiddleEast = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                textAlign="center"
                margin={3}
                style={{
                    backgroundColor: '#6ea8c4',
                    padding: '40px 0',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'red',
                }}
            >
                legendary Middle East
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={7}
                padding={'15px 140px'}
            >
                {middleEastArray.map(
                    ({ id, name, image, description }: MiddleEastProps) => (
                        <Grid item xs={12} sm={6} md={6} key={id}>
                            <MiddleEastItems
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

export default MiddleEast
