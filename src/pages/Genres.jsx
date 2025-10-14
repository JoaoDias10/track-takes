import { Box, Grid, Card, CardContent, Typography, CardMedia, Chip } from '@mui/material';
import { genres } from '../data/genres';

export default function Genres() {
    const sortedGenres = [...genres].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <Box sx={{ backgroundColor: '#2a2a3d', minHeight: '100vh', padding: '3rem' }}>
            <Grid container spacing={4} alignItems="flex-start">
                {sortedGenres.map((genre, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                width: 424,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backgroundColor: '#1e1e2f',
                                color: '#e0e0e0',
                                borderRadius: '16px',
                                boxShadow: '0 0 15px rgba(186, 104, 200, 0.3)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 0 20px rgba(186, 104, 200, 0.6)',
                                    transform: 'scale(1.02)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="180"
                                image={genre.image}
                                alt={`${genre.name} image`}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {genre.name}
                                </Typography>

                                <Chip
                                    label={`Popularity: ${genre.popularity}`}
                                    sx={{
                                        backgroundColor: '#ba68c8',
                                        color: '#1e1e2f',
                                        fontWeight: 'bold',
                                        mb: 1,
                                    }}
                                />

                                <Typography
                                    variant="body2"
                                    color="#cccccc"
                                    sx={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 4,
                                        overflow: 'hidden',
                                        mb: 2,
                                    }}
                                >
                                    {genre.description}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    fontWeight="bold"
                                    color="#ba68c8"
                                    gutterBottom
                                >
                                    Example Artists:
                                </Typography>
                                <Typography variant="body2" color="#cccccc">
                                    {genre.exampleArtists.join(', ')}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
