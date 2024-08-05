import React from 'react'
import Imports from '../commons/AllImports'
import StarIcon from '@mui/icons-material/Star';
import { Box, Card } from '@mui/material';
import Divider from '@mui/material/Divider';

const ReviewsComponent = () => {

    const data=[
        {img:'https://a0.muscache.com/im/pictures/user/9c0ede59-7a4e-459c-89fa-c746141fbd9c.jpg?im_w=240',name:'Hamza',country:'Dubai, United Arab Emirates', rating:'',month:'April 2024',text:'Stayed a few nights',comment:'Beautiful view Clean and big studio Comfy sofabed...'},
        {img:'https://a0.muscache.com/im/pictures/user/93497ace-049b-43c2-851e-c80ccb7b0500.jpg?im_w=240',name:'Berchi',country:'4 years on Airbnb', rating:'',month:'March 2024',text:'Stayed a few nights',comment:'The studio is located very close to all tourist attractions, a 20-minute walk from Dubai Mall and Burj Kalifa,The view is sensational from the balcony! I recommend'},
        {img:'https://a0.muscache.com/im/pictures/user/3e5d4a8e-14a9-424a-b140-1957b87e7aad.jpg?im_w=240',name:'Christina',country:'Zürich, Switzerland', rating:'',month:'February 2024',text:'Stayed with kids',comment:'Everything is great, I have already recommended it 👌🏼'},
        {img:'https://a0.muscache.com/im/pictures/user/e86e8963-fbb9-4872-a5f6-346c40191044.jpg?im_w=240',name:'Vincent',country:'9 years on Airbnb', rating:'',month:'February 2024',text:'Stayed a few nights',comment:'Lovely little studio with a fantastic view of the Burj, 20mins walk from Dubai Mall. Perfect for a couple, small for a family of 4… Couple of minor hiccups, key not working well, beddings'},
        {img:'https://a0.muscache.com/im/pictures/user/2d01f3b8-d3ae-4f9c-9b48-671fae86cada.jpg?im_w=240',name:'Mortada',country:'2 years on Airbnb', rating:'',month:'February 2024',text:'Stayed a few nights',comment:'The place is so beautiful Enjoy the views of the Khalifa Tower ✨'},
        {img:'https://a0.muscache.com/im/pictures/user/de010ba5-21f2-4458-9cef-b25e31ce9912.jpg?im_w=240',name:'Aissata',country:'8 years on Airbnb', rating:'',month:'January 2024',text:'Stayed about a week',comment:'this listing is exceptional. it is very very well located and matches the description and photos perfectly,We went to Dubai mall or Burj Khalifa on foot in 20 minutes'},
    ]
    return (
        <>
            <Imports.Grid container justifyContent='center' my={3} >
                <Imports.Grid item xs={11}  md={9}  sx={{borderBottom:'1px solid lightgray'}} >
                 <Imports.Grid container >  
                    {data.map((item,index)=>(
                        <Imports.Grid  dispaly='flex' gap={2} xs={12} sm={6} key={index} my={2} item>
                           
                        <Imports.Grid item display='flex' gap={2}>
                            <Imports.Grid sx={{}}>
                                <img src={item.img} width='40px' height='40px' style={{ borderRadius: '50%' }} />
                            </Imports.Grid>
                            <Imports.Grid>
                                <Imports.Typography fontSize='15px'>{item.name}</Imports.Typography>
                                <Imports.Typography variant='h3' fontSize='15px'>{item.country}
                                </Imports.Typography>
                            </Imports.Grid>
                        </Imports.Grid>
                        <Imports.Grid item display='flex'>
                            <Imports.Typography variant='h2'> &nbsp;<StarIcon fontSize='xs' /><StarIcon fontSize='xs' /><StarIcon fontSize='xs' /><StarIcon fontSize='xs' /><StarIcon fontSize='xs' /> &nbsp;{item.month} &nbsp;<Box component='span' sx={{ fontSize: '13px', color: 'gray', fontWeight: 'normal' }}> {item.text}</Box></Imports.Typography>
                        </Imports.Grid>
                        <Imports.Grid dispaly='block'>
                            <Imports.Typography fontSize='15px' fontWeight='normal'>{item.comment}
                                
                            </Imports.Typography>

                        </Imports.Grid>
                        </Imports.Grid>
                                            ))}
                  <Imports.Grid item sx={{textAlign:'left',}} mb={5}>
                    <Imports.Button variant='outlined' sx={{textTransform:'initial',padding:'10px',paddingX:'15px',color:"black",outlineColor:'black',border:'1px solid black',}}>Show all 34 reviews</Imports.Button>
                   </Imports.Grid>
                   </Imports.Grid> 
                   <Divider flexItem/>
            </Imports.Grid>
            </Imports.Grid>  
            
        </>
        
    )
}

export default ReviewsComponent