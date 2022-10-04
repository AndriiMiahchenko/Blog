import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import Menu from 'components/Menu/Menu'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar
            position="static"
            style={{
                background: 'white',
            }}
        >
            <Container>
                <Toolbar
                    style={{
                        color: '#404040',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        style={{
                            padding: '20px',
                        }}
                    >
                        <img src="/images/Frame.png" alt="" />
                    </Typography>
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
