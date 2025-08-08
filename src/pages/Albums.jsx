import { Box, Grid, Card, CardContent, Typography, Rating, CardMedia } from '@mui/material';
import { albums } from '../data/albums';


export default function Albums() {
    return (
        <Box sx={{ backgroundColor: '#2a2a3d', minHeight: '100vh', padding: '3rem' }}>
            <Grid container spacing={4} alignItems="flex-start">
                {albums.map((album, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                width: 424,
                                // height: 400,
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
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="180"
                                image={album.image}
                                alt={`${album.title} cover`}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {album.title}
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    By {album.author}
                                </Typography>
                                <Rating
                                    name="read-only"
                                    value={album.rating}
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
                                    {album.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
