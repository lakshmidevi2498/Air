import React from 'react'
import Imports from '../commons/AllImports';

const FilterSixthComponent = () => {
    const propertyTypes = [
        {
          label: 'House',
          icon: <Imports.HomeIcon fontSize='large' />,
        },
        {
          label: 'Flat',
          icon: <Imports.BusinessIcon fontSize='large' />,
        },
        {
          label: 'Green House',
          icon: <Imports.HouseboatIcon fontSize='large' />,
        },
        {
          label: 'Hotel',
          icon: <Imports.FoodBankIcon fontSize='large' />,
        },
      ];
  return (
    <>
     <Imports.Accordion>
      <Imports.AccordionSummary
        expandIcon={<Imports.ExpandMoreIcon />}
        aria-controls="panel6-content"
        id="panel6-header"
      >
        <Imports.Grid container justifyContent='start'>
          <Imports.Typography padding='15px' fontSize='18px'>Property type</Imports.Typography>
        </Imports.Grid>
      </Imports.AccordionSummary>
      <Imports.AccordionDetails>
        <Imports.Grid container spacing={3} my={1}>
          {propertyTypes.map((property, index) => (
            <Imports.Grid item xs={12} sm={3} key={index}>
              <Imports.Grid 
                display='block' 
                fontWeight='normal' 
                border='2px solid lightgray' 
                padding='10px' 
                borderRadius='10px' 
                textAlign='center'
              >
                <Imports.Typography fontWeight='normal' marginY='10px'>{property.label}</Imports.Typography>
                {property.icon}
              </Imports.Grid>
            </Imports.Grid>
          ))}
        </Imports.Grid>
      </Imports.AccordionDetails>
    </Imports.Accordion>
    </>
  )
}

export default FilterSixthComponent