import React from 'react'
import Imports from '../commons/AllImports';

const FilterSeventhComponent = () => {
    const guest=[
        'Step-free guest entrance',
        'Guest entrance wider than 32 inches (81 centimetres)',
        'Accessible parking spot',
        'Step-free path to the guest entranc'
    ]
      
    const bathroom=[
        'Step-free bathroom access',
        'Guest entrance wider than 32 inches (81 centimetres)',
        'Shower grab bar',
        'Toilet grab bar',
        'Shower or bath chair',
        'Step-free shower',
    ];
      
    const adaptiveEquipment=[
        'Ceiling or mobile hoist',
        'Portable shower chair',
        'Grab bars in bathroom',
        'Accessible bed',
        'Hoyer lift',
        'Adaptive utensils',
        'Accessible vanity',
        'Visual alert system',
    ]
  return (
    <>
    <Imports.Accordion>
      <Imports.AccordionSummary
        expandIcon={<Imports.ExpandMoreIcon />}
        aria-controls="panel4-content"
        id="panel4-header"
      >
        <Imports.Grid container justifyContent='start' padding='10px'>
          <Imports.Typography fontSize='18px'>Accessibility features</Imports.Typography>
        </Imports.Grid>
      </Imports.AccordionSummary>
      <Imports.AccordionDetails>
        <Imports.Grid container spacing={2}> 
          <Imports.Grid item xs={12}>
            <Imports.Typography>Guest entrance and parking</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid item container spacing={2} xs={12}>
            {guest.map((feature, index) => (
              <Imports.Grid item xs={12} md={6} key={index}>
                <Imports.FormControlLabel
                  control={<Imports.Checkbox color='primary' />} 
                  label={<Imports.Typography variant="body1" style={{ color: 'gray', fontWeight: 'normal' }}>{feature}</Imports.Typography>}
                />
              </Imports.Grid>
            ))}
          </Imports.Grid>
          <Imports.Grid item xs={12}>
            <Imports.Typography>Bedroom</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid item container spacing={2} xs={12}>
            <Imports.Grid item xs={12} md={6}>
              <Imports.FormControlLabel
                control={<Imports.Checkbox color='primary' />} 
                label={<Imports.Typography variant="body1" style={{ color: 'gray', fontWeight: 'normal' }}>Step-free bedroom access</Imports.Typography>}
              />
            </Imports.Grid>
            <Imports.Grid item xs={12} md={6}>
              <Imports.FormControlLabel
                control={<Imports.Checkbox color='primary' />} 
                label={<Imports.Typography variant="body1" style={{ color: 'gray', fontWeight: 'normal' }}>Guest entrance wider than 32 inches (81 centimetres)</Imports.Typography>}
              />
            </Imports.Grid>
          </Imports.Grid>
          <Imports.Grid item xs={12}>
            <Imports.Typography>Bathroom</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid item container spacing={2} xs={12}>
            {bathroom.map((feature, index) => (
              <Imports.Grid item xs={12} md={6} key={index}>
                <Imports.FormControlLabel
                  control={<Imports.Checkbox color='primary' />} 
                  label={<Imports.Typography variant="body1" style={{ color: 'gray', fontWeight: 'normal' }}>{feature}</Imports.Typography>}
                />
              </Imports.Grid>
            ))}
          </Imports.Grid>

          <Imports.Grid item xs={12}>
            <Imports.Typography>Adaptive equipment</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid item container spacing={2} xs={12}>
            {adaptiveEquipment.map((equipment, index) => (
              <Imports.Grid item xs={12} md={6} key={index}>
                <Imports.FormControlLabel
                  control={<Imports.Checkbox color='primary' />} 
                  label={<Imports.Typography variant="body1" style={{ color: 'gray', fontWeight: 'normal' }}>{equipment}</Imports.Typography>}
                />
              </Imports.Grid>
            ))}
          </Imports.Grid>

        </Imports.Grid>
      </Imports.AccordionDetails>
    </Imports.Accordion>
    
    </>
  )
}

export default FilterSeventhComponent