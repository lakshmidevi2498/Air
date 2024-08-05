import React from 'react'
import Imports from '../commons/AllImports';

const DateButtonComponent = () => {
    const buttonData = [
        { label: 'Exact dates', sx: { fontSize: { xs: '8px', sm: '10px' }, border: '2px solid black', borderRadius: '20px', textAlign: 'center', color: 'black', textTransform: 'initial' } },
        { label: '±1days', sx: { fontSize: { xs: '10px' }, border: '1px solid lightgray', borderRadius: '20px', textAlign: 'center', color: 'black', textTransform: 'initial' } },
        { label: '±2days', sx: { fontSize: { xs: '10px' }, border: '1px solid lightgray', borderRadius: '20px', textAlign: 'center', color: 'black', textTransform: 'initial' } },
        { label: '±3days', sx: { fontSize: { xs: '10px' }, padding: '5px', paddingX: '3px', border: '1px solid lightgray', borderRadius: '20px', color: 'black', textTransform: 'initial', display: { xs: 'none', sm: 'block' } } },
        { label: '±7days', sx: { fontSize: { xs: '10px' }, padding: '5px', paddingX: '3px', border: '1px solid lightgray', borderRadius: '20px', color: 'black', textTransform: 'initial', display: { xs: 'none', sm: 'block' } } },
        { label: '±14days', sx: { fontSize: { xs: '10px' }, padding: '5px', paddingX: '3px', border: '1px solid lightgray', borderRadius: '20px', color: 'black', textTransform: 'initial', display: { xs: 'none', sm: 'block' } } },
      ];
  return (
    <>
      <Imports.Grid item display='flex' gap={2} sx={{ paddingX: { xs: '0px', sm: '30px' }, marginBottom: '10px' }}>
      {buttonData.map((button, index) => (
        <Imports.Button key={index} sx={button.sx}>
          {button.label}
        </Imports.Button>
      ))}
    </Imports.Grid>
    
    </>
  )
}

export default DateButtonComponent