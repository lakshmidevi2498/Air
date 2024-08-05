import React from 'react'
import Imports from '../commons/AllImports'

const InnerSubComponent = () => {
    const items = [
        {
          icon: <Imports.TableRestaurantIcon />,
          title: 'Delicated Workspace',
          description: "A common area with WIFI that's well suited for working",
        },
        {
          icon: <Imports.StorefrontIcon />,
          title: 'Self-check-in',
          description: 'You can self check in with the building staff',
        },
        {
          icon: <Imports.EditCalendarIcon />,
          title: 'Free cancellation for 48 hours',
          description: 'Get a full refund if you change your mind',
        },
      ];
  return (
    <>
    <Imports.Grid item >
        <Imports.Typography variant='h4' fontSize='22px' sx={{ padding: { xs: '10px', sm: '0px' } }}>
         Entire holiday home in Dubai, United Arab Emirates
       </Imports.Typography>
      <Imports.Typography variant='h3' sx={{ padding: { xs: '10px', sm: '0px' } }}>
        8 guests . 4 bedrooms . 4 beds . 3.5 bathrooms
    </Imports.Typography>
    </Imports.Grid>
    <Imports.Grid item display='flex' sx={{ border: '2px solid gray', marginTop: { xs: '10px', }, padding: { xs: '10px', } }} borderRadius='15px' sm={10} xs={12} >
                                <Imports.Grid item display='flex' xs={4} md={3.5} sx={{}}>
                                    <Imports.CelebrationIcon sx={{ display: 'flex', margin: 'auto' }} />
                                    <Imports.Typography textAlign='center' sx={{ margin: 'auto' }} fontSize='18px'>Guest <br />favourite</Imports.Typography>
                                    <Imports.CelebrationIcon sx={{ display: 'flex', margin: 'auto' }} />
                                </Imports.Grid>
                                <Imports.Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: 'block', md: 'none' } }} />
                                <Imports.Grid item xs={4} margin='auto' sx={{ display: { xs: 'none', md: 'block' }, }}>
                                    <Imports.Typography textAlign='center' fontSize='12px'>One of the most loved homes on Airbnb,according to guests</Imports.Typography>
                                </Imports.Grid>

                                <Imports.Grid item xs={8} md={4.5} margin='auto' display='flex' textAlign='center'sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                    <Imports.Grid item xs={6} sx={{}}>
                                        <Imports.Typography textAlign='center' fontSize='18px'>4.93</Imports.Typography>
                                        <Imports.StarIcon fontSize='xs' /><Imports.StarIcon fontSize='xs' /><Imports.StarIcon fontSize='xs' /><Imports.StarIcon fontSize='xs' /><Imports.StarIcon fontSize='xs' />
                                    </Imports.Grid>
                                    <Imports.Divider orientation="vertical" variant="middle" flexItem />
                                    <Imports.Grid item xs={6} sx={{}}>
                                        <Imports.Typography textAlign='center' fontSize='18px'> 30</Imports.Typography>
                                        <Imports.Typography sx={{ textDecoration: 'underline' }} fontSize='12px'> Review</Imports.Typography>
                                    </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Grid>
                            <Imports.Grid item xs={12} my={2} sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                <Imports.Grid item display='flex' gap={2}>
                                    <Imports.Grid sx={{}}>
                                        <img src='https://a0.muscache.com/im/pictures/user/User-315796649/original/e5b5d742-e257-4031-aedb-e17a0cdb0078.jpeg?im_w=240' width='40px' height='40px' style={{ borderRadius: '50%' }} />
                                    </Imports.Grid>
                                    <Imports.Grid>
                                        <Imports.Typography fontSize='15px'>Hosted By Lee</Imports.Typography>

                                        <Imports.Typography variant='h3' fontSize='15px'>5 years
                                            hosting
                                        </Imports.Typography>
                                    </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Grid>
                            <Imports.Divider/>
                            <Imports.Grid item xs={12} sx={{ paddingX: { xs: '10px', sm: '0px' } }}>
    <Imports.Grid item xs={12} my={2}>
      {items.map((item, index) => (
        <Imports.Grid container item display="flex" gap={2} key={index} my={2}>
          <Imports.Grid item sx={{}} my={2}>
            {item.icon}
          </Imports.Grid>
          <Imports.Grid item>
            <Imports.Typography fontSize="15px">{item.title}</Imports.Typography>
            <Imports.Typography variant="h3" fontSize="15px">
              {item.description}
            </Imports.Typography>
          </Imports.Grid>
        </Imports.Grid>
      ))}
    </Imports.Grid>
  </Imports.Grid>
    </>
  )
}

export default InnerSubComponent