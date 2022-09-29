import { Button } from '@mui/material'
import SelectDestinations from 'components/Select/Select'
import { Link } from 'react-router-dom'
import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <Link to="/" className="menu-style">
                    Home
                </Link>
            </Button>
            <SelectDestinations />
            <Button color="inherit">Team</Button>
            <Button color="inherit">Favorite</Button>
        </>
    )
}

export default Menu
