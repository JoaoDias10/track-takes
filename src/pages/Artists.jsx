import { Box, Grid, Card, CardContent, Typography, Rating, CardMedia } from '@mui/material';
import { artists } from '../data/artists';

export default function Artists() {
    return (
        <Box sx={{ backgroundColor: '#2a2a3d', minHeight: '100vh', padding: '3rem' }}>
            <Grid container spacing={4} alignItems="flex-start">
                {artists.map((artist, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
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
                                <Rating
                                    name="read-only"
                                    value={artist.rating}
                                    precision={0.1}
                                    readOnly
                                    sx={{ color: '#ba68c8', mb: 1 }}
                                />
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
