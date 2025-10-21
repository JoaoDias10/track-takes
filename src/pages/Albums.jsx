import { useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Rating, CardMedia, TextField } from '@mui/material';
import { albums } from '../data/albums';
import { Link } from 'react-router-dom';

export default function Albums() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter and sort albums
    const filteredAlbums = albums
        .filter(album => album.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <Box sx={{ backgroundColor: '#2a2a3d', minHeight: '100vh', padding: '1rem 3rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <TextField
                    variant="outlined"
                    placeholder="Search albums..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        width: 300,
                        backgroundColor: '#1e1e2f',
                        borderRadius: '8px',
                        input: {
                            color: '#fff',
                            padding: '8px 12px', // ⬅️ reduce vertical padding
                            fontSize: '0.95rem', // ⬅️ slightly smaller text
                        },
                        '& .MuiOutlinedInput-root': {
                            height: '45px', // ⬅️ total component height
                            '& fieldset': { borderColor: '#ba68c8' },
                            '&:hover fieldset': { borderColor: '#ab47bc' },
                            '&.Mui-focused fieldset': { borderColor: '#ba68c8' },
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: '#bbb',
                        },
                    }}
                    InputProps={{
                        sx: { color: '#fff' },
                    }}
                />

            </Box>

            {/* 🎵 Albums Grid */}
            <Grid container spacing={4} alignItems="flex-start">
                {filteredAlbums.map((album, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Link
                            to={`/albums/${album.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
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
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {album.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}

                {/* 🚫 No results message */}
                {filteredAlbums.length === 0 && (
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#ccc',
                            textAlign: 'center',
                            width: '100%',
                            mt: 4,
                        }}
                    >
                        No albums found.
                    </Typography>
                )}
            </Grid>
        </Box>
    );
}
