import React from 'react'
import Imports from '../commons/AllImports'
import { Divider } from '@mui/material'

const MapComponent = () => {
    
  return (
    <>
    <Imports.Grid container xs={12} justifyContent='center' my={5}item>
        <Imports.Grid item xs={11} md={9} container>
            <Imports.Grid item>
                <Imports.Typography variant='h1'> Where you'll be</Imports.Typography>
                <Imports.Typography variant='h3' my={1}>Dubai, United Arab Emirates</Imports.Typography>
            </Imports.Grid>
            <Imports.Grid item sx={{ borderTop:{xs:'15px solid lightgrey', md:'none'},textAlign:'center' }}> 
            </Imports.Grid>
        </Imports.Grid>
        <Imports.Grid item xs={11} md={9} sx={{zIndex: 9, width: '100%', height:{xs:"300px",sm:'500px'} }}>
           
                 <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.345261874062!2d81.9363147146239!3d16.86399248839388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a384230a3f58a99%3A0xb758e3cf6db94e1e!2sMandapeta%2C%20Andhra%20Pradesh%20533225%2C%20India!5e0!3m2!1sen!2sus!4v1690539308397!5m2!1sen!2sus"
   height='300%' width='100%'  style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
              }} allowFullScreen="" loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" title="map"></iframe> 
                 
                 <Divider orientation='horizontal' flexItem/>
                 </Imports.Grid>
                
    </Imports.Grid>
    
    </>
  )
}

export default MapComponent