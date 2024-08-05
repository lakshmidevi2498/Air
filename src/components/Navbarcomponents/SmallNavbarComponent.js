import React from 'react'
import Imports from '../../commons/AllImports'

const SmallNavbarComponent = ({ name ,start, end,ghost ,guestCount,handleMobileSearch}) => {
  
  return (
    <>
    <Imports.Grid container sx={{  zIndex:2,display: 'flex', justifyContent: 'space-between', display: { xs: 'flex', sm: 'none', md: 'none' },margin:'auto',paddingX:"20px" ,position:"sticky",top:20,backgroundColor:"white",paddingBottom:"20px"}} >
    <Imports.Grid
      item
      xs={12}
      
      sx={{
        zIndex:2,
        justifyContent: 'start',
        alignItems: 'center',
        border: '1px solid lightgrey',
        borderRadius: '50px',
        display: 'flex',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        paddingY:'10px',
        paddingX:"10px"
        
      }}
    >
      <Imports.Grid item color='black'>
        <Imports.SearchIcon fontSize='medium'/>
      </Imports.Grid>
      <Imports.Grid item paddingX={1}
      
      onClick={handleMobileSearch}
      >
        <Imports.Typography variant='body1' sx={{fontSize:'20px'}}>Where to?</Imports.Typography>
        <Imports.Typography variant='caption' fontSize='11px'>{name ?`${name}` :"Anywhere"} . {start ? `${start}-${end}` : "Any Week"} . {ghost? `${ghost}  guests` :guestCount? `${guestCount} guests`: "Add guests"}</Imports.Typography>
      </Imports.Grid>
    
    </Imports.Grid>
  <Imports.Grid>
    
  </Imports.Grid>
  </Imports.Grid>
    </>
  )
}

export default SmallNavbarComponent