import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavCard({ to, icon, label }) {
    return (
        <Box
            component={Link}
            to={to}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                backgroundColor: '#1e1e2f',
                borderRadius: '16px',
                px: '3rem',
                py: '2rem',
                minHeight: '130px',
                color: '#e0e0e0',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                boxShadow: '0 0 15px rgba(186, 104, 200, 0.5)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#2a2a40',
                    boxShadow: '0 0 20px rgba(186, 104, 200, 0.8)',
                    transform: 'scale(1.03)',
                    color: '#ffffff'
                }
            }}
        >
            <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</span>
            {label}
        </Box>
    );
}
