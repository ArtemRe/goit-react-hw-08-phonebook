import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import { blueGrey } from '@mui/material/colors';

export default function AuthMenu() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button
        onClick={() => {
          navigate('/register');
        }}
        variant="outlined"
        sx={{ my: 1, mx: 1.5, bgcolor: 'primary.main', color: 'white' }}
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          navigate('/login');
        }}
        variant="outlined"
        sx={{ my: 1, mx: 1.5, bgcolor: 'primary.main', color: 'white' }}
      >
        Log in
      </Button>
    </Stack>
  );
}
