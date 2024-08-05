import React from 'react'
import Imports from '../commons/AllImports';

const InnerSubTwoComponent = () => {
    const amenities = [
        { icon: <Imports.LocationCityIcon fontSize="medium" />, text: 'City skyline View' },
        { icon: <Imports.FlatwareIcon fontSize="medium" />, text: 'Kitchen' },
        { icon: <Imports.WifiIcon fontSize="medium" />, text: 'Wifi' },
        { icon: <Imports.TableRestaurantIcon />, text: 'Dedicated workspace' },
        { icon: <Imports.TimeToLeaveIcon />, text: 'Free parking on premises' },
        { icon: <Imports.PoolIcon />, text: 'Shared pool - available all year' },
        { icon: <Imports.PersonalVideoIcon />, text: '50-inch HDTV with Amazon Prime Video, Netflix, cable/satellite TV, standard cable/satellite' },
        { icon: <Imports.CallSplitIcon />, text: 'Lift' },
        { icon: <Imports.PhotoSizeSelectLargeIcon />, text: 'Free washer - In unit' },
        { icon: <Imports.PhotoSizeSelectSmallIcon />, text: 'Free dryer - In unit' },
      ];
  return (
    <>
    
            <Imports.Divider />
                            <Imports.Grid item sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                            <Imports.Grid item xs={12} sx={{ backgroundColor: '#ebf0ec', padding: '10px',}}>
                                <Imports.Typography fontSize='15px' fontWeight='normal'>Some info hasbeen automatically translated.<Imports.Box component='span' sx={{ textDecoration: 'underline', fontWeight: 'bold' }}>Show Origin</Imports.Box></Imports.Typography>
                            </Imports.Grid>
                            </Imports.Grid>
                            <Imports.Grid item xs={12} my={3} sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                <Imports.Typography variant='h3' sx={{ color: 'black' }}>"From our spacious balcony you can enjoy a unique view of Burj Khalifa and the magic fountains. Enjoy breakfast in the morning at our cozy dining table overlooking Dubai's old town or layback at night in our comfortable lounge seats - enjoying Burj Khalifa's video and laser shows! "</Imports.Typography>
                                <Imports.Typography variant='h3' sx={{ color: 'black', marginTop: { xs: "15px" } }}>Also from our studio and from the comfortable bed you can enjoy full Burj Khalifa and....</Imports.Typography>
                                <Imports.Typography variant='h3' mt={1} sx={{ color: 'black', marginTop: { xs: "15px" }, textDecoration: 'underline', fontWeight: 'bold', display: 'flex' }}>Show more &nbsp;<Imports.ChevronRightIcon sx={{}} /></Imports.Typography>

                            </Imports.Grid>
    <Imports.Grid item xs={12} sx={{ paddingX: { xs: '10px', sm: '0px' } }}>
    <Imports.Typography variant="h4" fontSize="25px">
      What this place offers
    </Imports.Typography>
    <Imports.Grid container display="flex">
      {amenities.map((amenity, index) => (
        <Imports.Grid item key={index} sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
          {amenity.icon}
          <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>
            {amenity.text}
          </Imports.Typography>
        </Imports.Grid>
      ))}
    </Imports.Grid>
    <Imports.Grid item my={3} xs={12} sx={{ display: { xs: 'center', md: 'start' } }}>
      <Imports.Button
        variant="outlined"
        sx={{
          color: 'black',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          textTransform: 'initial',
          '&:hover': { border: '1px solid black' },
        }}
      >
        Show all 55 amenities
      </Imports.Button>
    </Imports.Grid>
  </Imports.Grid>
    </>
  )
}

export default InnerSubTwoComponent