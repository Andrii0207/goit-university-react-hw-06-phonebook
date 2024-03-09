import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <div>
      <FilterLabel>Filter</FilterLabel>
      <FilterInput type="text" value={value} onChange={onChange} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
