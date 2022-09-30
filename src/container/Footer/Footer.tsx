import { AppBar, Toolbar, Typography, Container } from '@mui/material'

type Props = {}

const Footer = (props: Props) => {
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
                    <Typography>&copy; Andrii Miahchenko</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer
