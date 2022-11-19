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
        variant="button"
        color="text.primary"
        sx={{ my: 1, mx: 1.5, bgcolor: 'secondary.main' }}
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          navigate('/login');
        }}
        variant="outlined"
        sx={{ my: 1, mx: 1.5, bgcolor: 'secondary.main' }}
      >
        Log in
      </Button>
    </Stack>
  );
}
