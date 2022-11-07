
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/foneBoockOperators';
export default function PhoneBookList({ items }) {
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
        <button type="submit" onClick={() => onRemoveContact(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}

