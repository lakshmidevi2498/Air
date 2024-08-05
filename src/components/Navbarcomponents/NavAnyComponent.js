import React from 'react'
import Imports from '../../commons/AllImports'

const NavAnyComponent = ({state,}) => {
 const {startDate,endDate ,monthStart,selectedCountry ,monthEnd  ,weekParam ,region ,guestCount} = state
  return (  
    <>
    <Imports.Grid item sx={{ border: '2px solid lightgrey', borderRadius: '50px',  width: {xs:'30%',sm:'35%',md:'35%'} ,marginLeft:{md:'100px',lg:'120px'},paddingX:'10px', textAlign:'center', display: { xs: 'none', sm: 'block', md:'block' },  }}>
          <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <Imports.Grid item md={3}>
              <Imports.Typography variant='body1' fontSize={'12px'}>{selectedCountry?selectedCountry:region?region:"AnyWhere"}
                </Imports.Typography>
            </Imports.Grid>
            <Imports.Divider orientation="vertical" variant="middle" flexItem />
            <Imports.Grid item md={3}>
            <Imports.Typography variant='body1' fontSize={'12px'}>
            {startDate && endDate
              ? `${startDate} - ${endDate}`
              : monthStart && monthEnd
              ? `${monthStart} - ${monthEnd}`
              : weekParam
              ? `Any ${weekParam}`
              : "Any Week"}
          </Imports.Typography>

            </Imports.Grid>
            <Imports.Divider orientation="vertical" variant="middle" flexItem />
            <Imports.Grid item md={4} >
              <Imports.Grid display='flex' justifyContent="space-between " marginTop='8px'>
                <Imports.Grid item>
                <Imports.Typography variant='body1' fontWeight="none" margin='3px'  sx={{fontSize:{sm:"12px",md:"11px",lg:"12px"}}}>{ guestCount? `${guestCount}  guests` : "Add guests"}</Imports.Typography>
              </Imports.Grid>
              <Imports.Grid item>
              <Imports.SearchIcon sx={{backgroundColor:'#f73452',fontSize:'25px',color:'white',borderRadius:'50px',padding:'5px'}}/>
              </Imports.Grid>
            </Imports.Grid>
            </Imports.Grid>
            
          </Imports.Grid>
          </Imports.Grid>
    </>
  )
}

export default NavAnyComponent