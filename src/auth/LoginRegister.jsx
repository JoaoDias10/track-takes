import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Fade,
} from "@mui/material";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() { // <-- renamed here
    const { login } = useAuth();
    const navigate = useNavigate();

    const [mode, setMode] = useState("login"); // "login" | "register"
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (mode === "login") {
            const success = login(username, password);
            if (success) {
                navigate("/home");
            } else {
                setError("Invalid username or password");
            }
        } else {
            if (!username || !password || !confirmPassword) {
                setError("Please fill in all fields.");
                return;
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }

            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            if (existingUsers.find((u) => u.username === username)) {
                setError("That username already exists.");
                return;
            }

            const newUser = { username, password };
            localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
            alert("Registration successful! You can now log in.");
            setMode("login");
            setUsername("");
            setPassword("");
            setConfirmPassword("");
        }
    };

    const switchMode = () => {
        setError("");
        setMode((prev) => (prev === "login" ? "register" : "login"));
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <Box
            sx={{
                backgroundColor: "#2a2a3d",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start", // move form up
                paddingTop: "15vh", // some spacing from top
                color: "#fff",
                transition: "all 0.3s ease-in-out",
            }}
        >
            <Fade in timeout={400}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        backgroundColor: "#1e1e2f",
                        p: 4,
                        borderRadius: "16px",
                        boxShadow: "0 0 15px rgba(186,104,200,0.3)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: 375, // wider form
                        maxWidth: "90%",
                    }}
                >
                    <Box textAlign="center">
                        {mode === "login" ? (
                            <>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    color="#ba68c8"
                                    lineHeight={1.3}
                                >
                                    Welcome to TrackTakes!
                                </Typography>
                            </>
                        ) : (
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                color="#ba68c8"
                            >
                                Create your TrackTakes account
                            </Typography>
                        )}
                    </Box>


                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        InputLabelProps={{ style: { color: "#ccc" } }}
                        InputProps={{ style: { color: "#fff" } }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#ba68c8" },
                                "&:hover fieldset": { borderColor: "#ab47bc" },
                            },
                        }}
                    />

                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        InputLabelProps={{ style: { color: "#ccc" } }}
                        InputProps={{ style: { color: "#fff" } }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#ba68c8" },
                                "&:hover fieldset": { borderColor: "#ab47bc" },
                            },
                        }}
                    />

                    {mode === "register" && (
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                            InputLabelProps={{ style: { color: "#ccc" } }}
                            InputProps={{ style: { color: "#fff" } }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "#ba68c8" },
                                    "&:hover fieldset": { borderColor: "#ab47bc" },
                                },
                            }}
                        />
                    )}

                    {error && (
                        <Typography
                            variant="body2"
                            color="error"
                            textAlign="center"
                            sx={{ mt: 1 }}
                        >
                            {error}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: "#ba68c8",
                            "&:hover": { backgroundColor: "#ab47bc" },
                        }}
                    >
                        {mode === "login" ? "Login" : "Register"}
                    </Button>

                    <Typography
                        textAlign="center"
                        sx={{ mt: 1, color: "#ccc", fontSize: "0.9rem" }}
                    >
                        {mode === "login" ? (
                            <>
                                Don’t have an account yet?{" "}
                                <span
                                    onClick={switchMode}
                                    style={{
                                        color: "#ba68c8",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Register here
                                </span>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <span
                                    onClick={switchMode}
                                    style={{
                                        color: "#ba68c8",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Login here
                                </span>
                            </>
                        )}
                    </Typography>
                </Box>
            </Fade>
        </Box>
    );
}
