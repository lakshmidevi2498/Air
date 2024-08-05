import React from 'react'
import UpdatedNav from "../components/UpdatedNav"
import Imports from '../commons/AllImports'

const ProducNavbar1 = () => {
  return (
    <>
    <Imports.Grid sx={{display:{xs:'none',sm:'block',md:'block',lg:'block',xl:'block'},position:"sticky",top:0,zIndex:"1003"}}> <UpdatedNav /></Imports.Grid>
   
    </>
  )
}

export default ProducNavbar1