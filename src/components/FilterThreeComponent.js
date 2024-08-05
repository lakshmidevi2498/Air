import React from 'react'
import Imports from '../commons/AllImports'

const FilterThreeComponent = () => {
    const buttonDataArray = [
        { category: 'Bedrooms', items: ['Any', 1, 2, 3, 4, 5, 6, 7, '8+'] },
        { category: 'Beds', items: ['Any', 1, 2, 3, 4, 5, 6, 7, '8+'] },
        { category: 'Bathrooms', items: ['Any', 1, 2, 3, 4, 5, 6, 7, '8+'] }
      ];
  return (
    <>
     <Imports.Grid container item sx={{ display: 'block' }}>
      {buttonDataArray.map(({ category, items }) => (
        <Imports.Grid item key={category} sx={{ marginBottom: '20px' }}>
          <Imports.Typography variant='h5'>{category}</Imports.Typography>
          <Imports.Grid container item spacing={0.5} justifyContent="space-evenly" alignItems='center' marginY='15px'>
            {items.map((item, index) => (
              <Imports.Button
                key={index}
                sx={{
                  padding: '3px',
                  paddingX: item === 'Any' ? '10px' : '3px',
                  border: '1px solid lightgray',
                  borderRadius: '20px',
                  textAlign: 'center',
                  color: item === 'Any' ? 'white' : 'black',
                  backgroundColor: item === 'Any' ? 'black' : 'transparent',
                  fontSize: { xs: '10px', sm: '15px' },
                  display: { xs: index >= 3 ? 'none' : 'block', sm: 'block' }
                }}
              >
                {item}
              </Imports.Button>
            ))}
          </Imports.Grid>
        </Imports.Grid>
      ))}
    </Imports.Grid>
    </>
  )
}

export default FilterThreeComponent