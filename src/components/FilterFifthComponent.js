import React, { useState } from 'react';
import { Grid, Typography, Switch } from '@mui/material';

const FilterFifthComponent = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const bookingOptions = [
        {
          label: 'Instant Book',
          description: 'Listings you can book without waiting for host approval',
        },
        {
          label: 'Self check-in',
          description: 'Easy access to the property once you arrive',
        },
        {
          label: 'Bringing a service animal?',
          description: '',
        },
      ];
  return (
    <>
       <Grid item borderBottom='1px solid lightGray' my={4}>
      <Typography variant='h5' my={2} fontWeight='bold' fontSize='20px'>
        Booking Options
      </Typography>

      {bookingOptions.map((option, index) => (
        <Grid container item sx={{ justifyContent: 'space-between', textAlign: 'left' }} my={2} xs={12} key={index}>
          <Grid item xs={8}>
            <Typography variant='body1' fontSize="15px" color="gray" fontWeight="normal">
              {option.label}
            </Typography>
            {option.description && (
              <Typography variant='caption' fontSize="13px" color="gray" fontWeight="normal">
                {option.description}
              </Typography>
            )}
          </Grid>
          <Grid item sx={{ textAlign: 'right' }} xs={4}>
            <Switch
              checked={checked}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default FilterFifthComponent