import { AppBar, Toolbar, Typography } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DiscFullIcon from '@mui/icons-material/DiscFull';

const Header = () => {
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
                <Typography
                    variant="h3"
                    component="div"
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: '"Montserrat", sans-serif',
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    TrackTakes
                </Typography>

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
