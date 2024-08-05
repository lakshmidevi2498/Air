import React from 'react'
import Imports from '../commons/AllImports';

const FilterFourthComponent = () => {
    const amenitiesData = [
        'Wifi',
        'Kitchen',
        'Washing Machine',
        'Dryer'
      ];
  return (
    <>
     <Imports.Grid container item xs={12} mb={4}>
      <Imports.Typography variant='h5' my={2} fontWeight='bold' fontSize='20px'>
        Amenities
      </Imports.Typography>

      <Imports.Grid container item xs={12}>
        <Imports.Typography variant='h6' fontSize='15px'>
          Essentials
        </Imports.Typography>
      </Imports.Grid>

      <Imports.Grid container item xs={12}>
        {amenitiesData.map((amenity, index) => (
          <Imports.Grid item xs={12} md={6} key={index}>
            <Imports.FormControlLabel
              control={<Imports.Checkbox color='primary' />}
              label={<Imports.Typography variant="body1" style={{ color: 'gray', fontWeight: 'normal' }}>{amenity}</Imports.Typography>}
            />
          </Imports.Grid>
        ))}
      </Imports.Grid>

      <Imports.Typography sx={{ textDecoration: 'underline' }}>Show more</Imports.Typography>
    </Imports.Grid>
    </>
  )
}

export default FilterFourthComponent