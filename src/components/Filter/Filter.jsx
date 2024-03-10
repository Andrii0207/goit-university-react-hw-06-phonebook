import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      <FilterLabel>Filter</FilterLabel>
      <FilterInput
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
}
