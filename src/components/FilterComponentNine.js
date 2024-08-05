import React from 'react'
import Imports from '../commons/AllImports'

const FilterComponentNine = () => {
  return (
    <>
    <Imports.Grid container item justifyContent='center'>
                                         <Imports.Grid container item alignItems="center" display='flex' justifyContent="space-between" position='sticky'bottom='0'>
                                            <Imports.Grid item>
                                                 <Imports.Typography variant='h1' sx={{ textAlign: 'center', fontWeight: 'bold',fontSize:{xs:'12px',sm:'20px'} }}>
                                                 Clear all
                                                  </Imports.Typography>
                                              </Imports.Grid>
                                              <Imports.Grid item mt={2}>
                                              <Imports.Button variant='contained' sx={{color:'white',backgroundColor:'black',padding:{xs:'8px',sm:'10px'},margin:'auto',fontSize:{xs:'10px',sm:'20px'},'&:hover':{backgroundColor:'black'}}} >Show 1,000+ places</Imports.Button>
                                                 
                                             </Imports.Grid>
                                         </Imports.Grid>
                                     </Imports.Grid>
    </>
  )
}

export default FilterComponentNine