import React from 'react'
import Filter from './Filter'
import Imports from '../commons/AllImports'
import { Divider } from '@mui/material'

const ProductNavbar = () => {
  return (
    <>
<Imports.Grid container  sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' },position:"sticky",top:0,zIndex:30001 }}>
  <Imports.Grid container justifyContent="center" alignItems="center" sx={{ display: 'flex',backgroundColor:"white" }}>
    <Imports.Grid item xs={10} padding='10px'>
      <Imports.Grid
        item
        xs={12}
        sx={{
          justifyContent: 'start',
          alignItems: 'center',
          border: '1px solid lightgrey',
          borderRadius: '50px',
          display: 'flex',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          paddingX: '0px',
          padding: '10px',
        }}
      >
        <Imports.Grid item color='black'>
          <Imports.SearchIcon fontSize='medium' />
        </Imports.Grid>
        <Imports.Grid item paddingX={1}>
          <Imports.Typography variant='body1' sx={{ fontSize: '20px' }}>Where to?</Imports.Typography>
          <Imports.Typography variant='caption' fontSize='11px'>Anywhere . Any Week . Add guest</Imports.Typography>
        </Imports.Grid>
      </Imports.Grid>
    </Imports.Grid>
    <Imports.Grid item xs={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Imports.Box
        sx={{
          textAlign: 'center',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50px',
          width: '50px',
          marginTop:'10px'
        }}
      >
        <Filter  />
      </Imports.Box>
    </Imports.Grid>
  </Imports.Grid>
</Imports.Grid>


    </>
  )
}

export default ProductNavbar