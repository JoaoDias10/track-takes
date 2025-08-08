import { Box, Grid } from '@mui/material';
import NavCard from '../components/NavCard';

export default function Home() {
    return (
        <Box sx={{ backgroundColor: '#2a2a3d', minHeight: '100vh', padding: '3rem' }}>
            <Grid container spacing={4} justifyContent="center">

                <Grid item xs={12} sm={6} md={4}>
                    <NavCard to="/albums" icon="📀" label="Albums" />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <NavCard to="/artists" icon="🎤" label="Artists" />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <NavCard to="/genres" icon="🎶" label="Genres" />
                </Grid>

            </Grid>
        </Box>
    );
}
