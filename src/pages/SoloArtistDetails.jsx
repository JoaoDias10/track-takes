import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Rating, CardMedia, Button } from '@mui/material';
import { soloArtists } from '../data/soloArtists';

export default function SoloArtistDetails() {
    const { slug } = useParams();
    const soloArtist = soloArtists.find(a => a.slug === slug);

    if (!soloArtist) {
        return (
            <Box sx={{ color: '#fff', textAlign: 'center', mt: 10 }}>
                <Typography variant="h5" color="black">
                    Artist not found.
                </Typography>
                <Link to="/artists/solo-artists" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ mt: 2, backgroundColor: '#ba68c8' }}>
                        Back to Solo Artists
                    </Button>
                </Link>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                backgroundColor: '#2a2a3d',
                minHeight: '100vh',
                color: '#e0e0e0',
                p: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <CardMedia
                component="img"
                image={soloArtist.image}
                alt={`${soloArtist.name} portrait`}
                sx={{
                    width: '60%',
                    maxWidth: 400,
                    borderRadius: '50%',
                    mb: 4,
                    boxShadow: '0 0 20px rgba(186, 104, 200, 0.4)',
                }}
            />

            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {soloArtist.name}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#ba68c8' }}>
                {soloArtist.genre}
            </Typography>
            <Rating
                name="read-only"
                value={soloArtist.rating}
                precision={0.1}
                readOnly
                sx={{ color: '#ba68c8', mb: 2 }}
            />
            <Typography
                variant="body1"
                sx={{ maxWidth: 700, textAlign: 'center', color: '#ccc', mb: 4 }}
            >
                {soloArtist.description}
            </Typography>

            {soloArtist.albums && soloArtist.albums.length > 0 && (
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 900,
                        mt: 4,
                        p: 3,
                        borderRadius: '12px',
                        backgroundColor: '#1e1e2f',
                        boxShadow: '0 0 10px rgba(186,104,200,0.2)',
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: '#ba68c8', mb: 2 }}
                    >
                        Albums
                    </Typography>

                    {/* Horizontal scroll container */}
                    <Box
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: 3,
                            p: 1,
                            '&::-webkit-scrollbar': {
                                height: '8px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#555',
                                borderRadius: '4px',
                            },
                        }}
                    >
                        {soloArtist.albums.map((album, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: '0 0 auto',
                                    width: 150,
                                    backgroundColor: '#2a2a3d',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 0 8px rgba(186,104,200,0.2)',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 0 12px rgba(186,104,200,0.4)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={album.image}
                                    alt={`${album.name} cover`}
                                    sx={{
                                        width: '100%',
                                        height: 150,
                                        objectFit: 'cover',
                                    }}
                                />
                                <Box sx={{ p: 1 }}>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        sx={{
                                            color: '#e0e0e0',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {album.name}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{ color: '#aaa' }}
                                    >
                                        {album.year}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}

            <Link to="/artists/solo-artists" style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        backgroundColor: '#ba68c8',
                        '&:hover': { backgroundColor: '#ab47bc' },
                    }}
                >
                    Back to Solo Artists
                </Button>
            </Link>
        </Box>
    );
}
