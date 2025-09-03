import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  options: string[];
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ options, onSearch }) => {
  const [value, setValue] = React.useState('');

  const handleInputChange = (_event: any, newValue: string) => {
    setValue(newValue);
  };

  const handleSearch = () => {
    if (onSearch) onSearch(value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '24px 0' }}>
      <Autocomplete
        freeSolo
        options={options}
        value={value}
        onInputChange={handleInputChange}
        sx={{ width: 300, borderRadius: '24px', background: 'white', boxShadow: 1 }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search recipes..."
            variant="outlined"
            sx={{ borderRadius: '24px', background: 'white' }}
            InputProps={{
              ...params.InputProps,
              style: { borderRadius: '24px' },
            }}
          />
        )}
      />
      <IconButton
        type="button"
        aria-label="search"
        onClick={handleSearch}
        sx={{ marginLeft: 1, borderRadius: '50%', background: 'white', boxShadow: 1 }}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
