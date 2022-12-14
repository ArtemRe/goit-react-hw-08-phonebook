import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import Typography from '@mui/material/Typography';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onAddContact = data => {
    const action = addContact(data);
    dispatch(action);
  };

  const nameId = nanoid();
  const numberId = nanoid();

  const handelChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography component="div" variant="h4" sx={{ textAlign: 'center' }}>
          Add Contacts
        </Typography>
        <TextField
          sx={{ bgcolor: '#bbdefb' }}
          margin="normal"
          required
          fullWidth
          id={nameId}
          label="Name"
          value={name}
          autoComplete="name"
          autoFocus
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         
          onChange={handelChange}
        />
        <TextField
          sx={{ bgcolor: '#bbdefb' }}
          margin="normal"
          required
          fullWidth
          id={numberId}
          label="Number"
          value={number}
          onChange={handelChange}
          type="tel"
          name="number"
          autoComplete="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Contacts
        </Button>
      </Box>
    </Box>
  );
}
// #bbdefb