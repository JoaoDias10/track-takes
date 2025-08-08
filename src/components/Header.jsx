import { AppBar, Toolbar, Typography } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DiscFullIcon from '@mui/icons-material/DiscFull';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1e1e2f', height: '120px', justifyContent: 'center' }}>
            <Toolbar sx={{ justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative' }}>

                {/* Left spinning icon */}
                <DiscFullIcon
                    className="vinyl-icon"
                    sx={{ fontSize: 48, position: 'absolute', left: 16 }}
                />

                {/* Music note */}
                <MusicNoteIcon
                    className="music-note-icon"
                    sx={{ fontSize: 40, marginRight: 2 }}
                />

                {/* App name */}
                {isHome ? (
                    // If already home, just show static text
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            fontFamily: '"Montserrat", sans-serif',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        TrackTakes
                    </Typography>
                ) : (
                    // Otherwise, clickable link
                    <Typography
                        variant="h3"
                        component={Link}
                        to="/"
                        sx={{
                            fontWeight: 'bold',
                            fontFamily: '"Montserrat", sans-serif',
                            color: 'white',
                            textAlign: 'center',
                            textDecoration: 'none',
                            '&:hover': {
                                color: '#d3d3d3', // light grey hover
                            }
                        }}
                    >
                        TrackTakes
                    </Typography>
                )}

                {/* Right spinning icon */}
                <DiscFullIcon
                    className="vinyl-icon"
                    sx={{ fontSize: 48, position: 'absolute', right: 16 }}
                />

            </Toolbar>
        </AppBar>
    );
};

export default Header;
