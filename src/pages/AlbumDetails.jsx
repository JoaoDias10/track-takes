import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Rating, CardMedia, Button } from '@mui/material';
import { albums } from '../data/albums';

export default function AlbumDetails() {
    const { slug } = useParams();
    const album = albums.find(a => a.slug === slug);

    if (!album) {
        return (
            <Box sx={{ color: '#fff', textAlign: 'center', mt: 10 }}>
                <Typography variant="h5" color="black">
                    Album not found.
                </Typography>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ mt: 2, backgroundColor: '#ba68c8' }}>
                        Back to Albums
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
                image={album.image}
                alt={`${album.title} cover`}
                sx={{ width: '60%', maxWidth: 500, borderRadius: '16px', mb: 4 }}
            />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {album.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
                By {album.author}
            </Typography>
            <Rating
                name="read-only"
                value={album.rating}
                precision={0.1}
                readOnly
                sx={{ color: '#ba68c8', mb: 2 }}
            />
            <Typography
                variant="body1"
                sx={{ maxWidth: 700, textAlign: 'center', color: '#ccc', mb: 4 }}
            >
                {album.description}
            </Typography>

            {/* 🎵 Tracklist Section */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 700,
                    mt: 2,
                    p: 2,
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
                    Tracklist
                </Typography>

                {album.tracks?.map((track, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            py: 1.5,
                            borderBottom: index !== album.tracks.length - 1 ? '1px solid #444' : 'none',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body2" sx={{ color: '#aaa', width: '20px' }}>
                                {track.number}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#e0e0e0' }}>
                                {track.name}
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#aaa' }}>
                            {track.duration}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Link to="/albums" style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        backgroundColor: '#ba68c8',
                        '&:hover': { backgroundColor: '#ab47bc' },
                    }}
                >
                    Back to Albums
                </Button>
            </Link>
        </Box>
    );
}
