import { Button } from '@mui/material'
import SelectDestinations from 'components/Select/Select'
import { NavLink } from 'react-router-dom'
import './Menu.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink to="/" className="menu-style">
                    Home
                </NavLink>
            </Button>
            <SelectDestinations />
            <Button color="inherit">Team</Button>
            <Button color="inherit">
                <NavLink to="/favourits" className="menu-style">
                    Favorites
                    <FavoriteBorderIcon
                        fontSize="small"
                        style={{ margin: '0 5px' }}
                    />
                </NavLink>
            </Button>
        </>
    )
}

export default Menu
