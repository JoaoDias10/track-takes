import { Box, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { soloArtists } from '../data/soloArtists';
import { Link } from 'react-router-dom';

export default function SoloArtists() {
    const sortedArtists = [...soloArtists].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <Box sx={{ backgroundColor: '#2a2a3d', minHeight: '100vh', padding: '3rem' }}>
            <Grid container spacing={4} alignItems="flex-start">
                {sortedArtists.map((artist, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Link
                            to={`/artists/solo-artists/${artist.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Card
                                sx={{
                                    width: 424,
                                    backgroundColor: '#1e1e2f',
                                    color: '#e0e0e0',
                                    borderRadius: '16px',
                                    boxShadow: '0 0 15px rgba(186, 104, 200, 0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 0 20px rgba(186, 104, 200, 0.6)',
                                        transform: 'scale(1.02)',
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={artist.image}
                                    alt={`${artist.name} photo`}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {artist.name}
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Genre: {artist.genre}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#cccccc"
                                        sx={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 4,
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {artist.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}