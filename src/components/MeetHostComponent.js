import React from 'react'
import Imports from '../commons/AllImports'
import { Card, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import BeenhereTwoToneIcon from '@mui/icons-material/BeenhereTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import { ChevronRight } from '@mui/icons-material';

const MeetHostComponent = () => {
  const statistics = [
    { value: '253', label: 'Review' },
    { value: '4.63', label: 'Rating', icon: <Imports.StarIcon fontSize='xs' /> },
    { value: '5', label: 'Years hosting' }
  ];
  const coHosts = [
    { imgSrc: 'https://a0.muscache.com/im/pictures/user/17b1ba73-09fb-4d24-ae14-444cf531c7b1.jpg?im_w=240', name: 'Karolina' },
    { imgSrc: 'https://a0.muscache.com/im/pictures/user/5351371b-1b48-435f-85f1-930403c714eb.jpg?im_w=240', name: 'Nico' },
    { imgSrc: 'https://a0.muscache.com/im/pictures/user/6bd9b92f-1508-4c59-bbc3-9b9f0b12bd67.jpg?im_w=240', name: 'Angelika' }
  ];
  
  return (
    <>
    <Imports.Grid container xs={12} justifyContent='center'item>
        <Imports.Grid item xs={11} md={9} container>
            <Imports.Typography variant='h1' my={2}>Meet your Host</Imports.Typography>
            <Imports.Grid item xs={12}  gap={7} display='flex'  container>
             <Imports.Grid item xs={12} md={4} >
                <Imports.Card  sx={{boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',borderRadius:'25px',}}>
                <Imports.Grid item sx={{paddingY:'20px',display:'flex' ,justifyContent:'space-around'}}>
                    <Imports.Grid item mt={2} textAlign='center'>
                         <img src='https://a0.muscache.com/im/pictures/user/5351371b-1b48-435f-85f1-930403c714eb.jpg?im_w=240' width='100px' height='80px' position='relative'style={{ borderRadius: '50%' }}/>
                         <Imports.VerifiedTwoToneIcon sx={{position:'absolute',top:{xs:'70',sm:'70',md:'70'},left:{xs:'120px',sm:'270px',md:'220px',lg:'300px',xl:'320px'}, transform: 'translate(0%, 230%)',color:'#c40e48'}}/>
                         <Imports.Typography variant='h4' fontWeight='bold'>Lee</Imports.Typography>
                         <Imports.Typography variant='h2'>Host</Imports.Typography>
                    </Imports.Grid>
                    <Imports.Grid item>
                      {statistics.map((stat, index) => (
                        <Imports.Grid  key={index}>
                          <Imports.Typography sx={{ fontSize: { xs: '20px', sm: '18px' } }}>
                            {stat.value}
                            {stat.icon && stat.icon}
                          </Imports.Typography>
                          <Imports.Typography caption='body'>{stat.label}</Imports.Typography>
                          {index < statistics.length - 1 && <Imports.Divider sx={{ marginY: '10px' }} />}
                        </Imports.Grid >
                      ))}
                    </Imports.Grid>
                    
                    </Imports.Grid>
                </Imports.Card>
                <Imports.Grid item display='flex' mt={2} gap={1}>
                    <Imports.LanguageTwoToneIcon/>
                    <Imports.Typography variant='h2' sx={{marginTop:'5px',fontWeight:'normal'}}>Lives in Dubai, United Arab Emirates</Imports.Typography>
                </Imports.Grid>
                <Imports.Grid item display='flex' mt={2}>
                    <Imports.Typography sx={{textDecoration:'underline',fontSize:{xs:'18px',sm:'15px'},fontWeight:'normal',}}>Showmore</Imports.Typography>
                    <Imports.ChevronRight/>
                </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid item xs={12} md={7} >
                <Imports.Grid item textAlign='left'>
                    <Imports.Typography variant='h1'sx={{marginY:'15px'}}>Co-Host</Imports.Typography>
                    <Imports.Grid item display='flex' gap={2}>
                      {coHosts.map((coHost, index) => (
                        <Imports.Grid key={index} display='flex' gap={1}>
                          <img
                            src={coHost.imgSrc}
                            width='40px'
                            height='40px'
                            style={{ borderRadius: '50%' }}
                            alt={`Co-host ${coHost.name}`}
                          />
                          <Imports.Typography sx={{ marginTop: '10px', color: 'gray', fontSize: '15px', fontWeight: 'normal' }}>
                            {coHost.name}
                          </Imports.Typography>
                        </Imports.Grid>
                      ))}
                    </Imports.Grid>
                    <Imports.Typography variant='h1'sx={{marginY:'10px',fontWeight:'medium'}}>Host details</Imports.Typography>
                    <Imports.Typography variant='h2'sx={{color:'black',fontWeight:'normal'}}>Response rate: 100%</Imports.Typography>
                    <Imports.Typography variant='h2'sx={{color:'black',fontWeight:'normal'}}>Responds within a few hours</Imports.Typography>
                    <Imports.Grid my={3}>
                        <Imports.Button variant='contained'sx={{textTransform:'initial',color:'white',backgroundColor:'black','&:hover':{backgroundColor:'black'}}} my={3}>Message Host</Imports.Button>
                    </Imports.Grid>
                    <Imports.Divider/>
                    <Imports.Grid item display='flex' my={3}>
                        <Imports.BeenhereTwoToneIcon sx={{color:'#c40e48'}}/>
                        <Imports.Typography sx={{fontSize:'12px'}}>To protect your payment, never transfer money or communicate outside of the Airbnb website or app</Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>
            </Imports.Grid>
            <Imports.Divider/>
        </Imports.Grid>
    </Imports.Grid>
    </>
  )
}

export default MeetHostComponent