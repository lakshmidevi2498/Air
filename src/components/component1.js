import React, { useState, useRef, useEffect, useCallback } from 'react';
import Select, { components } from 'react-select';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { allCountries } from 'country-region-data';
import { Grid } from '@mui/material';

const CountryDropdown = React.memo(({ handleSendCountry, name, }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, []);

  const handleChange = useCallback((selectedOption) => {
    setSelectedCountry(selectedOption);
    console.log("selectedCountry", selectedOption);
    handleSendCountry(selectedOption);
  },[selectedCountry]);

  const getOptionLabel = (option) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <LocationOnOutlinedIcon style={{ marginRight: '5px', backgroundColor: 'lightgray', borderRadius: '5px', padding: '2px' }} />
      {option.label}
    </div>
  );

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <div style={{ backgroundColor: 'transparent', padding: '2px' }}>
        {props.data.label}
      </div>
    </components.SingleValue>
  );

  const countryOptions = allCountries.map((country) => ({
    value: country[1],
    label: country[0],
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      padding: 0,
      minHeight: 'auto',
      height: 'auto', 
      backgroundColor: 'transparent', 
      '&:hover': {
        border: 'none',
        backgroundColor: 'transparent',
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
      margin: 0,
    }),
    input: (provided) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '10px',
      color: 'black',
      textTransform: 'initial',
      margin: 0,
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '12px',
      margin: 0,
      padding: 0,
      backgroundColor: 'transparent', 
    }),
    menu: (provided) => ({
      ...provided,
      width: 300,
      fontSize: '12px',
    }),
  };

  console.log("selectedCountry in dropdown--->", selectedCountry); 

  return (
    <Grid sx={{ maxHeight: '0px', zIndex: 10, }} 
    onClick={(e) => e.stopPropagation()} 
    className='dropdown'>
      <Select
        autoFocus
        ref={selectRef}
        value={name ? name : selectedCountry}
        onChange={handleChange}
        options={countryOptions}
        getOptionLabel={getOptionLabel}
        components={{ SingleValue }} 
        placeholder="Search Destination"
        styles={customStyles}
      />
    </Grid>
  );
});

export default CountryDropdown;
