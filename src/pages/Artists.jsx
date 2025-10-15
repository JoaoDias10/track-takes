import { Box, Grid } from '@mui/material';
import NavCard from '../components/NavCard';

export default function Artists() {
    return (
        <Box sx={{ backgroundColor: '#2a2a3d', minHeight: '100vh', padding: '3rem' }}>
            <Grid container spacing={4} justifyContent="center">

                <Grid item xs={12} sm={6} md={4}>
                    <NavCard to="/artists/solo-artists" icon="🧍‍♂️" label="Solo Artists" />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <NavCard to="/artists/groups" icon="👥" label="Groups" />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <NavCard to="/artists/bands" icon="🎸" label="Bands" />
                </Grid>

            </Grid>
        </Box>
    );
}
