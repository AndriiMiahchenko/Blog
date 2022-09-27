import { Button } from '@mui/material'
import SelectDestinations from 'components/Select/Select'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">Home</Button>
            <SelectDestinations />
            <Button color="inherit">Team</Button>
            <Button color="inherit">Favorite</Button>
        </>
    )
}

export default Menu
