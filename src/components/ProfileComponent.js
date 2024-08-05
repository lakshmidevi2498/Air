import React from 'react'
import Imports from '../commons/AllImports'
import { Card, CardContent, Divider } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import {  deepPurple } from '@mui/material/colors';

const ProfileComponent = () => {
    const googlename=localStorage.getItem('googlename') 
    const googletoken = localStorage.getItem("googletoken")
    const googleemail = localStorage.getItem("googleemail")
    const pusernumber = localStorage.getItem("pusernumber")
    const ptoken = localStorage.getItem("ptoken")
  const emailsignemail = localStorage.getItem("emailsignemail")
  const emailsigntoken = localStorage.getItem("emailsigntoken")
  const emaillogintoken = localStorage.getItem("emaillogintoken")
  const emailloginemail = localStorage.getItem("emailloginemail")
  return (
   <> 
   <Imports.Grid container  justifyContent='center'  mt={5} >
    <Imports.Grid container   sx={{display:'flex',justifyContent:{xs:"center",sm:'center'}}} gap={5}>
        <Imports.Grid  item xs={10}sm={6} md={4} lg={3}  justifyContent='center' alignItems='center' >
        <Card sx={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',borderRadius:'20px',paddingY:'10px'}}>
            <CardContent>
            <Imports.Grid container sx={{ display: 'flex', alignItems: 'center' }} spacing={2}>
                <Imports.Grid item xs={12}sm={6}md={5} lg={6}container justifyContent="center" alignItems="center">
                <Imports.Grid container direction="column" alignItems="center">
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>L</Avatar>
                    <Imports.Typography variant="h2" sx={{justifyContent:'center',alignItems:'center' ,textAlign:'center',fontSize:'10px'}}>{googletoken ? `${googlename}` : "user"}</Imports.Typography>
                    <Imports.Typography variant="caption">Guest</Imports.Typography>
                </Imports.Grid>
                </Imports.Grid>
                
                <Imports.Grid item xs={12} sm={6} md={5} lg={6}container direction="column" justifyContent="center" alignItems="center">
                <Imports.Typography variant="h2">1</Imports.Typography>
                <Imports.Typography>Month of Airbnb</Imports.Typography>
                </Imports.Grid>
            </Imports.Grid>
            </CardContent>
      </Card>
          <Card sx={{borderRadius:'20px',marginTop:'20px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',}} >
            <Imports.Grid sx={{justifyContent:{xs:"center",sm:'start'},padding:'20px'}}>
            <Imports.Typography variant="h2" fontSize='10px'>
            {  googletoken   ? `${googleemail}'s confirmed information`  : emailsigntoken   ? `${emailsignemail}'s confirmed information`   :emaillogintoken ?`${emailloginemail} 's confirmed information`: "user's confirmed information"}
              </Imports.Typography>
               
               <Imports.Typography variant='h6' my={1}>
               {ptoken ? `Phone Number: ${pusernumber}` : ''}</Imports.Typography>
               <Divider sx={{marginY:'10px'}}/>
               <Imports.Typography variant='h3' sx={{color:'black'}}>Verify your Identity</Imports.Typography>
               <Imports.Typography variant='caption'>Before you bookor host on Airbnb,You 'll  need to complete this step</Imports.Typography><br/>
               <Imports.Button variant='outlined'sx={{border:'1px solid black',color:'black',marginY:'10px','&:hover':{border:'1px solid black'}}}> Get verified</Imports.Button>
               </Imports.Grid>
          </Card>
        </Imports.Grid>
        <Imports.Grid xs={10}sm={5} md={4} lg={3}item  sx={{justifyContent:'center',alignItems:'center',marginY:'auto',marginLeft:{lg:"80px"}}}> 
      <Card sx={{padding:'20px',alignItems:'center',borderRadius:'20px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',}}>
        <Imports.Typography variant='h2' sx={{textAlign:'left'}}>Its time to create your profile</Imports.Typography>
        <Imports.Typography variant='caption'>Your Airbnb profile is an important part of every reservation.Create your to help others hosts and guests gets to know you</Imports.Typography><br/>
        <Imports.Button variant='contained' sx={{backgroundColor:'#d60951',color:'white',marginTop:'10px','&:hover':{backgroundColor:'#d60951'}}} >Create Profile</Imports.Button>
      </Card>
        </Imports.Grid>  


    </Imports.Grid>

   </Imports.Grid>
   </>
  )
}

export default ProfileComponent