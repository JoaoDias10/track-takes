import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Box sx={{ backgroundColor: '#2a2a3d', minHeight: '100vh', padding: '3rem' }}>
            <Grid container spacing={4} justifyContent="center">
                {/* Albums Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Box
                        component={Link}
                        to="/albums"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textDecoration: 'none',
                            backgroundColor: '#1e1e2f',
                            borderRadius: '16px',
                            px: '3rem',           // horizontal padding
                            py: '2rem',         // vertical padding
                            minHeight: '130px',   // more rectangular height
                            color: '#e0e0e0',
                            fontSize: '2.5rem',   // increased font size
                            fontWeight: 'bold',
                            boxShadow: '0 0 15px rgba(186, 104, 200, 0.5)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#2a2a40',
                                boxShadow: '0 0 20px rgba(186, 104, 200, 0.8)',
                                transform: 'scale(1.03)',
                                color: '#ffffff'
                            }
                        }}
                    >
                        📀 Albums
                    </Box>

                </Grid>

                {/* More sections can be added like this */}
                {/* <Grid item xs={12} sm={6} md={4}>...</Grid> */}
            </Grid>
        </Box>
    );
}
