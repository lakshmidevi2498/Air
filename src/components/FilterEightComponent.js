import React from 'react'
import Imports from '../commons/AllImports'

const FilterEightComponent = () => {
    const country = [
        'Chinese (Simplified)',
        'English',
        'French',
        'German',
        'Italian',
        'Japanese',
        'Korean',
        'Portuguese',
        'Russian',
        'Spanish',
        'Arabic',
        'Catalan',
        'Croatian',
        'Czech',
        'Danish',
        'Dutch',
    ]
  return (
    <>
     <Imports.Accordion>
      <Imports.AccordionSummary
        expandIcon={<Imports.ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Imports.Grid container justifyContent='start'>
          <Imports.Typography padding='15px' fontSize='18px'>Host language</Imports.Typography>
        </Imports.Grid>
      </Imports.AccordionSummary>
      <Imports.AccordionDetails>
        <Imports.Grid container spacing={2}>
          {country.map((language) => (
            <Imports.Grid item xs={12} md={6} key={language}>
              <Imports.FormControlLabel
                control={<Imports.Checkbox color='primary' />}
                label={<Imports.Typography variant="body1" style={{ color: 'gray', fontWeight: 'normal' }}>{language}</Imports.Typography>}
              />
            </Imports.Grid>
          ))}
        </Imports.Grid>
      </Imports.AccordionDetails>
    </Imports.Accordion>
    </>
  )
}

export default FilterEightComponent