import React from 'react'
import Imports from '../commons/AllImports'

const FilterTwoComponent = () => {
  return (
    <>
    <Imports.Grid container item borderBottom='1px solid lightgray' mb={3} >
                                    <Imports.Grid item textAlign='left'  marginY='30px'>
                                        <Imports.Typography variant='body1' fontSize='20px'>
                                            Price range
                                        </Imports.Typography>
                                        <Imports.Typography variant='caption'>
                                            Nightly prices before fees and taxes
                                        </Imports.Typography>
                                    </Imports.Grid>

                                    <Imports.Grid container justifyContent="center"item sx={{ overflow: 'hidden', width: '100%' }}>
                                        <img src="./assets/images/Screenshot 2024-06-20 153246.png" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
                                    </Imports.Grid>


                                     <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', marginBottom: '10px' ,padding:'10px'}} xs={12}  mb={3}>
                                     <Imports.Grid item xs={4} sm={4} sx={{ border: '2px solid lightgray', borderRadius: '10px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                         <Imports.Typography variant='caption'sx={{fontSize:{xs:'10px',sm:'12px'}}}>
                                         Minimum
                                         </Imports.Typography>
                                         <Imports.Typography variant='body1'>
                                         ₹800
                                         </Imports.Typography>
                                     </Imports.Grid>
                                    
                                     <Imports.Typography item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                         --
                                     </Imports.Typography>
                                    
                                     <Imports.Grid item xs={4} sm={4} sx={{ border: '2px solid lightgray', borderRadius: '10px', paddingX: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                         <Imports.Typography variant='caption' sx={{fontSize:{xs:'10px',sm:'12px'}}}>
                                         Maximum
                                         </Imports.Typography>
                                         <Imports.Typography variant='body1'>
                                         ₹2300+
                                         </Imports.Typography>
                                     </Imports.Grid>
                                     </Imports.Grid>


                                     </Imports.Grid>
    
    </>
  )
}

export default FilterTwoComponent