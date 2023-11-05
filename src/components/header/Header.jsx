import { Link } from "react-router-dom"
import { FaReact } from "react-icons/fa";
import { AppBar, Typography, Button, Toolbar } from "@mui/material"
import { navbar } from "../menu/Menu"

const Header = () => {
    return (
        <AppBar component="nav" sx={{ filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7))" }}>
            <Toolbar sx={{ gap: "15px" }}>
                <FaReact style={{ fontSize: "45px" }} />
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        letterSpacing: 2,
                        display: { xs: 'none', sm: 'block' }
                    }}
                > Routing with React
                </Typography>
                {navbar.map(({ id, name, path }) => (
                    <Link to={path} key={id}>
                        <Button variant="text"
                            sx={{
                                color: '#fff',
                                mr: "30px",
                                letterSpacing: 1.5,
                            }}>
                            {name}
                        </Button>
                    </Link>
                ))}
            </Toolbar>
        </AppBar>
    )
}

export default Header