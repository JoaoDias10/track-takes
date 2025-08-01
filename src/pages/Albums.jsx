import { Box, Grid, Card, CardContent, Typography, Rating, CardMedia } from '@mui/material';
import astroworldCover from '../assets/Astroworld.jpg';
import rodeoCover from '../assets/Rodeo.webp';

const albums = [
    {
        title: 'ASTROWORLD',
        author: 'Travis Scott',
        rating: 4.8,
        description: "Travis Scott's Astroworld is a 2018 hip-hop album inspired by the former Six Flags Astroworld amusement park in Houston, Texas. It blends trap, psychedelic, and experimental rap styles. The album is known for its maximalist production, diverse guest features, and immersive journey through various sonic textures.",
        image: astroworldCover
    },
    {
        title: 'Rodeo',
        author: 'Travis Scott',
        rating: 4.5,
        description: "Travis Scott's debut studio album, Rodeo, released in 2015, is a concept album that thematically explores the rapper's journey from Houston to Los Angeles, symbolized by the wild and often dangerous rodeo of his newfound fame and lifestyle. The album delves into the internal conflict between his ambition and the temptations of a rockstar life, all while maintaining his Houston roots.",
        image: rodeoCover
    },
    {
        title: 'Rodeo',
        author: 'Travis Scott',
        rating: 4.5,
        description: "Rodeo is Travis Scott's debut studio album, released in 2015. It features a blend of hip-hop, trap, and psychedelic influences, showcasing Scott's unique sound. The album includes hit singles like 'Antidote' and '3500', and is known for its cinematic production and guest appearances from artists like Kanye West and Justin Bieber.",
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Travis_Scott_-_Rodeo.png'
    },
    {
        title: 'Rodeo',
        author: 'Travis Scott',
        rating: 4.5,
        description: "Rodeo is Travis Scott's debut studio album, released in 2015. It features a blend of hip-hop, trap, and psychedelic influences, showcasing Scott's unique sound. The album includes hit singles like 'Antidote' and '3500', and is known for its cinematic production and guest appearances from artists like Kanye West and Justin Bieber.",
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Travis_Scott_-_Rodeo.png'
    },
    {
        title: 'Rodeo',
        author: 'Travis Scott',
        rating: 4.5,
        description: "Rodeo is Travis Scott's debut studio album, released in 2015. It features a blend of hip-hop, trap, and psychedelic influences, showcasing Scott's unique sound. The album includes hit singles like 'Antidote' and '3500', and is known for its cinematic production and guest appearances from artists like Kanye West and Justin Bieber.",
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Travis_Scott_-_Rodeo.png'
    },
];

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
