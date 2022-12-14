import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { NavLink } from 'react-router-dom'
import './Select.scss'

export default function SelectDestinations() {
    const [location, setLocation] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setLocation(event.target.value as string)
    }

    return (
        <Box sx={{ minWidth: 160 }}>
            <FormControl fullWidth>
                <InputLabel
                    id="demo-simple-select-label"
                    style={{
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        fontSize: '16px',
                    }}
                >
                    Category
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={location}
                    label="Location"
                    onChange={handleChange}
                >
                    <MenuItem value={'asia'}>
                        <NavLink to="/asia" className="select-style">
                            Asia
                        </NavLink>
                    </MenuItem>
                    <MenuItem value={'europe'}>
                        <NavLink to="/europe" className="select-style">
                            Europe
                        </NavLink>
                    </MenuItem>
                    <MenuItem value={'africa'}>
                        <NavLink to="/africa" className="select-style">
                            Africa
                        </NavLink>
                    </MenuItem>
                    <MenuItem value={'central&south-america'}>
                        <NavLink to="/america" className="select-style">
                            Central and South America
                        </NavLink>
                    </MenuItem>
                    <MenuItem value={'middle-east'}>
                        <NavLink to="/middle-east" className="select-style">
                            Middle East
                        </NavLink>
                    </MenuItem>
                    <MenuItem value={'australia'}>
                        <NavLink to="/australia" className="select-style">
                            Australia
                        </NavLink>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
