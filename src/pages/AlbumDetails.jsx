import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Rating, CardMedia, Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { albums } from "../data/albums";
import { useAuth } from "../auth/AuthContext";

export default function AlbumDetails() {
    const { slug } = useParams();
    const { user } = useAuth();

    const album = albums.find((a) => a.slug === slug);
    const storageKey = album
        ? `ratings_${user?.username || "guest"}_${album.slug}`
        : null;

    // Always define hooks — even if album is undefined
    const storedRatings = album
        ? JSON.parse(localStorage.getItem(storageKey) || "[]")
        : [];

    const [trackRatings, setTrackRatings] = useState(
        album && storedRatings.length
            ? storedRatings
            : album?.tracks?.map(() => 0) || []
    );

    const [albumAverage, setAlbumAverage] = useState(0);

    // Effect should *always* run; it will just no-op if album is missing
    useEffect(() => {
        if (!album) return;
        const validRatings = trackRatings.filter((r) => r > 0);
        const avg =
            validRatings.length > 0
                ? validRatings.reduce((a, b) => a + b, 0) / validRatings.length
                : 0;
        setAlbumAverage(avg);
    }, [album, trackRatings]);

    const handleRatingChange = (index, newValue) => {
        if (!album) return;
        const updatedRatings = [...trackRatings];
        updatedRatings[index] = newValue;
        setTrackRatings(updatedRatings);
        localStorage.setItem(storageKey, JSON.stringify(updatedRatings));
    };

    const formatRatingStars = (value) =>
        value ? `${value.toFixed(1)}/5` : "0/5";

    const formatRatingAverage = (value) =>
        value ? `${value.toFixed(2)}/5` : "0.00/5";

    if (!album) {
        return (
            <Box sx={{ color: "#fff", textAlign: "center", mt: 10 }}>
                <Typography variant="h5" color="black">
                    Album not found.
                </Typography>
                <Link to="/albums" style={{ textDecoration: "none" }}>
                    <Button
                        variant="contained"
                        sx={{ mt: 2, backgroundColor: "#ba68c8" }}
                    >
                        Back to Albums
                    </Button>
                </Link>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                backgroundColor: "#2a2a3d",
                minHeight: "100vh",
                color: "#e0e0e0",
                p: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <CardMedia
                component="img"
                image={album.image}
                alt={`${album.title} cover`}
                sx={{
                    width: "60%",
                    maxWidth: 500,
                    borderRadius: "16px",
                    mb: 4,
                }}
            />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {album.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
                By {album.author}
            </Typography>

            {/* Album average rating */}
            <Rating
                name="album-average"
                value={albumAverage}
                precision={0.1}
                readOnly
                icon={
                    <StarIcon fontSize="inherit" sx={{ color: "#ba68c8" }} />
                }
                emptyIcon={
                    <StarBorderIcon
                        fontSize="inherit"
                        sx={{ color: "#ffffff88" }}
                    />
                }
            />
            <Typography variant="body2" sx={{ color: "#ba68c8", mb: 3 }}>
                {formatRatingAverage(albumAverage)} average rating
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    maxWidth: 700,
                    textAlign: "center",
                    color: "#ccc",
                    mb: 4,
                }}
            >
                {album.description}
            </Typography>

            {/* 🎵 Tracklist Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 700,
                    mt: 2,
                    p: 2,
                    borderRadius: "12px",
                    backgroundColor: "#1e1e2f",
                    boxShadow: "0 0 10px rgba(186,104,200,0.2)",
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "#ba68c8", mb: 2 }}
                >
                    Tracklist
                </Typography>

                {album.tracks?.map((track, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            py: 1.5,
                            borderBottom:
                                index !== album.tracks.length - 1
                                    ? "1px solid #444"
                                    : "none",
                        }}
                    >
                        {/* Left: track number + name */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "#aaa", width: "20px" }}
                            >
                                {track.number}
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
                                {track.name}
                            </Typography>
                        </Box>

                        {/* Right: duration + rating */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Typography variant="body2" sx={{ color: "#aaa" }}>
                                {track.duration}
                            </Typography>
                            <Rating
                                name={`track-rating-${index}`}
                                value={trackRatings[index]}
                                precision={0.5}
                                onChange={(e, newValue) =>
                                    handleRatingChange(index, newValue)
                                }
                                icon={
                                    <StarIcon fontSize="inherit" sx={{ color: "#ba68c8" }} />
                                }
                                emptyIcon={
                                    <StarBorderIcon
                                        fontSize="inherit"
                                        sx={{ color: "#ffffff88" }}
                                    />
                                }
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#ba68c8",
                                    width: "40px",
                                    textAlign: "right",
                                }}
                            >
                                {formatRatingStars(trackRatings[index])}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Link to="/albums" style={{ textDecoration: "none" }}>
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        backgroundColor: "#ba68c8",
                        "&:hover": { backgroundColor: "#ab47bc" },
                    }}
                >
                    Back to Albums
                </Button>
            </Link>
        </Box>
    );
}
