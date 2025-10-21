import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DiscFullIcon from "@mui/icons-material/DiscFull";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const isHome = location.pathname === "/";

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#1e1e2f",
                height: "120px",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    position: "relative",
                }}
            >
                {/* Left spinning icon */}
                <DiscFullIcon
                    className="vinyl-icon"
                    sx={{ fontSize: 48, position: "absolute", left: 16 }}
                />

                {/* Music note */}
                <MusicNoteIcon
                    className="music-note-icon"
                    sx={{ fontSize: 40, marginRight: 2 }}
                />

                {/* App name */}
                {isHome ? (
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: '"Montserrat", sans-serif',
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        TrackTakes
                    </Typography>
                ) : (
                    <Typography
                        variant="h3"
                        component={Link}
                        to="/home"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: '"Montserrat", sans-serif',
                            color: "white",
                            textAlign: "center",
                            textDecoration: "none",
                            "&:hover": {
                                color: "#d3d3d3",
                            },
                        }}
                    >
                        TrackTakes
                    </Typography>
                )}

                {/* Right spinning icon */}
                <DiscFullIcon
                    className="vinyl-icon"
                    sx={{ fontSize: 48, position: "absolute", right: 16 }}
                />

                {/* Logout button (top-right corner) */}
                {user && (
                    <Box sx={{ position: "absolute", top: 70, right: 165 }}>
                        <Button
                            variant="outlined"
                            onClick={handleLogout}
                            sx={{
                                color: "#ba68c8",
                                borderColor: "#ba68c8",
                                textTransform: "none",
                                fontWeight: "bold",
                                "&:hover": {
                                    backgroundColor: "rgba(186,104,200,0.1)",
                                    borderColor: "#ab47bc",
                                },
                            }}
                        >
                            Logout
                        </Button>
                    </Box>
                )}

            </Toolbar>
        </AppBar>
    );
};

export default Header;
