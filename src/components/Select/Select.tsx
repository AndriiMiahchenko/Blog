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
                    Destinations
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
                    <MenuItem value={'europe'}>Europe</MenuItem>
                    <MenuItem value={'africa'}>Africa</MenuItem>
                    <MenuItem value={'central&south-america'}>
                        Central and South America
                    </MenuItem>
                    <MenuItem value={'middle-east'}>Middle East</MenuItem>
                    <MenuItem value={'australia'}>Australia</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
