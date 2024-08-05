import React, { useState } from 'react';
import Imports from '../commons/AllImports';
import {  useMediaQuery, useTheme } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import dayjs from 'dayjs';
import {  useLocation, useNavigate } from 'react-router-dom';
import InnerSwiperComponent from './InnerSwiperComponent';
import InnerSubComponent from './InnerSubComponent';

export const InnerComponenetOne = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState([dayjs('2024-08-01'), dayjs('2024-08-06')]);
    const [allImagesUrl ,setAllImagesUrl] = useState(false)
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };
    const handleAllImages = () => {
    
        // setAllImagesUrl(true)
        
        navigate('/allimages',{state:{allImages,innerImgs}})
        console.log("allImagesin handleAllImages",allImages)
        }
        const handleProducts = () => {
            navigate("/products")
        }
  const handleHomePage = () => {
    navigate('/')
  }

  const location = useLocation();
  console.log("location",location);
  console.log("locationinnerimgs---->",location.state.innerImgs)
  console.log("locationinnerimgs0---->",location.state.showall)
  
  const allImages = location.state.showall || [];
  const innerImgs = location.state?.innerImgs || [];

  
  if (!innerImgs.length) {
    return <div>No images available</div>;
}

    return (

        <>
            <Imports.Grid container justifyContent='center'  >
                <Imports.Grid item xs={12} sm={11} md={10}lg={9.5} sx={{ padding: { xs: '0px', sm: '0px' },marginTop:{xs:"0px",sm:"10px"} }} gap={2}>
                <Imports.Grid item sx={{display:{xs:" none  ",sm:"block"}}}>
                    <Imports.Grid item sx={{ display: 'flex', justifyContent: 'space-between', padding: { xs: '10px', sm: '0px' } }}  >
                        <Imports.Grid item ><Imports.Typography variant='innerText' sx={{ display: { xs: 'none', sm: 'block' } }}>Horizon Tower-stunning Four Bedroom</Imports.Typography>
                            <Imports.Grid sx={{ display: { xs: "flex", sm: 'none' } }}><Imports.ChevronLeft onClick={handleHomePage}/>
                                <Imports.Typography variant='' sx={{ display: { xs: 'block', sm: 'none' }, alignItems: 'center', marginTop: '2px', }} >Home</Imports.Typography></Imports.Grid></Imports.Grid>
                        <Imports.Grid item sx={{ display: 'flex', marginTop: { xs: '0px', sm: '10px' } }} gap={2} textAlign='center' >
                            <Imports.Grid item sx={{ display: 'flex' }}>
                                <Imports.IosShareIcon fontSize='small' />
                                <Imports.Typography sx={{ fontWeight: 'medium', textDecoration: 'underline', display: { xs: 'none', sm: 'flex' } }} >Share</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item sx={{ display: 'flex' }}>
                                <Imports.FavoriteIcon fontSize='small' />
                                <Imports.Typography sx={{ fontWeight: 'medium', textDecoration: 'underline', display: { xs: 'none', sm: 'flex' } }} >Save</Imports.Typography>
                            </Imports.Grid>
                        </Imports.Grid>
                    </Imports.Grid>

                    <Imports.Grid item xs={12} mt={2} display='flex' gap={1} sx={{borderRadius:'10px'}}>
                        <Imports.Grid item xs={12} sm={6} sx={{borderRadius:'10px',overflow: 'hidden', height: '420px'}} className="image-container">
                            <img
                            className="hover-image"
                            src={location.state.innerImgs[0].src}
                            //   {location.state.innerImgs[0]}
                            width='100%'
                           
                            style={{ borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px', marginBottom: '8px',objectFit:"cover", height: '100%' }} 
                            />
                            <div className="overlay"></div>
                        </Imports.Grid>
                        <Imports.Grid item xs={6} width='100%' height='100%' sx={{ display: { xs: 'none', sm: 'block' } }} >
                            <Imports.Grid container spacing={1} sx={{}}>
                            <Imports.Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: '5px', }}  >
                                    <Imports.Grid className="image-container" sx={{ position: 'relative',overflow: 'hidden', height: '207px' }}>
                                <Imports.Box
                                    component="img"
                                    src={location.state.innerImgs[1].src}
                                    sx={{ width: '100%',height:"100%",objectFit:"cover" }}
                                />
                                <div className="overlay"></div>
                                </Imports.Grid>
                                <Imports.Grid className="image-container" sx={{ position: 'relative', display: 'inline-block' ,overflow: 'hidden', height: '207px'}}>
                                    <Imports.Box
                                        component="img"
                                        src={location.state.innerImgs[2].src}
                                        sx={{  width: '100%', height:"100%",objectFit:"cover"}}
                                    />
                                    <div className="overlay"></div>
                                    </Imports.Grid>
                            </Imports.Grid>
                            <Imports.Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: '8px',  }}>
                            <Imports.Grid sx={{overflow: 'hidden', height: '207px'}}className="image-container">
                            <Imports.Box
                            component="img" className="hover-image"
                            src={location.state.innerImgs[3].src}
                            width='100%'
                            sx={{ borderTopRightRadius: '10px',
                               width:"100%",height:"100%",objectFit:"cover"
                                }}
                        />
                        <div className="overlay"></div>
                        </Imports.Grid>
                        <Imports.Grid sx={{overflow: 'hidden', height: '207px'}} className="image-container">
                        <Imports.Box
                            component="img" className="hover-image"
                            src={location.state.innerImgs[4].src}
                            width='100%'
                           
                            sx={{ borderBottomRightRadius: '10px', 
                                height:"100%",width:"100%",objectFit:"cover"
                            }}
                        />
                        <div className="overlay"></div>
                        </Imports.Grid>
                                <Imports.Grid sx={{position:'absolute' ,top:{xs:'90%',sm:"450px",lg:"490px",xl:"70%"},right:{sm:'52px',md:"110px",lg:"230px"},}}>
                                <Imports.Grid display='flex' >
                                    <Imports.Button variant='contained' sx={{backgroundColor:'white ',color:'black',border:'1px solid black',textTransform:'initial', paddingX:{sm:'5px',md:"15px"},'&:hover':{backgroundColor:'white '}}} onClick={handleAllImages}><Imports.GridOnSharpIcon fontSize='small'/>Show all photos</Imports.Button>
                                </Imports.Grid>
                                </Imports.Grid>
                               
                            </Imports.Grid>
                            </Imports.Grid>
                        </Imports.Grid>
                  </Imports.Grid>
                  </Imports.Grid>
                  {/* <Imports.Grid item sx={{display:{xs:"block ",sm:"none"},}} xs={12} mt={0} >
                    <Swiper
                            spaceBetween={2}
                            slidesPerGroup={4}
                            pagination={{ type: 'fraction' }} // Use fraction pagination
                            // pagination={{
                            //     type: 'fraction',
                            //     renderFraction: (currentClass, totalClass) => {
                            //       return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
                            //     }
                            //   }}
                            // loop={true}
                            navigation={{
                                prevEl: '.custom-swiper-button-prev',
                                nextEl: '.custom-swiper-button-next',
                            }}
                            modules={[Pagination, Navigation]}
                            className="ProductSwiperr"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 13,
                                },
                                1024: {
                                    slidesPerView: 10,
                                },
                                769: {
                                    slidesPerView: 6,
                                },
                                576: {
                                    slidesPerView: 1,

                                },
                                426: {
                                    slidesPerView: 1,

                                },
                                367:{
                                    slidesPerView: 1,
                              },
                                320: {
                                    slidesPerView: 1,

                                },
                            }}

                        >
                            <Imports.Grid item sx={{backgroundColor:"white",position:"absolute",top:10,left:"10px",zIndex:30,padding:"5px",borderRadius:"50%",display:"flex"}}>
                             <Imports.ChevronLeft onClick={handleProducts}/>
                             </Imports.Grid>
                             <Imports.Grid item sx={{backgroundColor:"white",position:"absolute",top:20,left:"270px",zIndex:30,padding:"5px",borderRadius:"50%",display:"flex"}}>
                             <Imports.FavoriteBorderIcon fontSize='small' />
                             </Imports.Grid>
                             <Imports.Grid item sx={{backgroundColor:"white",position:"absolute",top:20,left:"230px",zIndex:30,padding:"5px",borderRadius:"50%",display:"flex"}}>
                             <Imports.IosShareIcon fontSize='small' />
                             </Imports.Grid>
                            {allImages.map((image, index) => (
                            <SwiperSlide key={index} position='relative'>
                                <Imports.Grid item>
                                <Imports.Grid container alignItems="center" justifyContent="center" sx={{height:"200px"}}>
                                    <img
                                    src={image.src}
                                    alt={`Slide ${index + 1}`}
                                    className="swiper-slide-img"
                                    width='100%'
                                    // maxHeight='70px'
                                    style={{ backgroundColor: 'lightgrey' ,objectFit:"cover",height:"100p%"}}
                                    />
                                </Imports.Grid>
                                </Imports.Grid>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                             
                    </Imports.Grid> */}
                    <InnerSwiperComponent handleProducts={handleProducts} allImages={allImages}/>


                    <Imports.Grid container  display='flex' sx={{ marginTop: { xs: '10px' } }} my={5} gap={2} >
                        <Imports.Grid item xs={12} sm={7} md={7.5} sx={{ padding: { xs: '10px', md: '0px' } }} justifyContent='start'>
                            
                            {/* <Imports.Grid item >
                                <Imports.Typography variant='h4' fontSize='22px' sx={{ padding: { xs: '10px', sm: '0px' } }}>
                                    Entire holiday home in Dubai, United Arab Emirates
                                </Imports.Typography>
                                <Imports.Typography variant='h3' sx={{ padding: { xs: '10px', sm: '0px' } }}>
                                    8 guests . 4 bedrooms . 4 beds . 3.5 bathrooms
                                </Imports.Typography>
                            </Imports.Grid> */}

                            {/* <Imports.Grid item display='flex' sx={{ border: '2px solid gray', marginTop: { xs: '10px', }, padding: { xs: '10px', } }} borderRadius='15px' sm={10} xs={12} >
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
                            </Imports.Grid> */}
                            <InnerSubComponent/>
                            {/* <Imports.Grid item xs={12} my={2} sx={{paddingX: { xs: '10px', sm: '0px' }}}>
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
                            <Imports.Divider/> */}
                            {/* <Imports.Grid item xs={12} sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                <Imports.Grid item xs={12} my={2}>
                                    <Imports.Grid item display='flex' gap={2}>
                                        <Imports.Grid sx={{}} my={2}>
                                            <Imports.TableRestaurantIcon />
                                        </Imports.Grid>
                                        <Imports.Grid >
                                            <Imports.Typography fontSize='15px'>Delicated Workspace</Imports.Typography>
                                            <Imports.Typography variant='h3' fontSize='15px'> A common area with WIFI that's well suited for working

                                            </Imports.Typography>
                                        </Imports.Grid>
                                    </Imports.Grid>
                                    <Imports.Grid item display='flex' gap={2}>
                                        <Imports.Grid sx={{}} my={2}>
                                            <Imports.StorefrontIcon />
                                        </Imports.Grid>
                                        <Imports.Grid >
                                            <Imports.Typography fontSize='15px'>Self-check-in</Imports.Typography>
                                            <Imports.Typography variant='h3' fontSize='15px'> You can self check inwith the  building staff

                                            </Imports.Typography>
                                        </Imports.Grid>
                                    </Imports.Grid>
                                    <Imports.Grid item display='flex' gap={2}>
                                        <Imports.Grid sx={{}} my={2}>
                                            <Imports.EditCalendarIcon />
                                        </Imports.Grid>
                                        <Imports.Grid >
                                            <Imports.Typography fontSize='15px'>Free cancelation for 48 hours </Imports.Typography>
                                            <Imports.Typography variant='h3' fontSize='15px'> Get a full refund ifyou changeyour mind
                                            </Imports.Typography>
                                        </Imports.Grid>
                                    </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Grid> */}
                            <Imports.Divider/>
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
                            <Imports.Grid item xs={12} sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                <Imports.Typography variant='h4' fontSize='25px'>What this palce offers</Imports.Typography>
                                <Imports.Grid container display='flex' >
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.LocationCityIcon fontSize='medium' fontWeight='normal' />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>City skyline View</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.FlatwareIcon fontSize='medium' fontWeight='normal' />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>Kitchen</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.WifiIcon fontSize='medium' fontWeight='normal' />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>Wifi</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.TableRestaurantIcon />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>Dedicated workspace</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.TimeToLeaveIcon />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>Free parking on premises</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.PoolIcon />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>Shared pool - available all year</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.PersonalVideoIcon />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>50-inch HDTV with Amazon Prime Video, Netflix, cable/satellite TV, standard cable/satellite</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.CallSplitIcon />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>Lift</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.PhotoSizeSelectLargeIcon />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>Free washer -In unit</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ display: 'flex' }} gap={2} xs={12} sm={6} mb={2}>
                                        <Imports.PhotoSizeSelectSmallIcon />
                                        <Imports.Typography sx={{ fontWeight: 'normal', fontSize: { xs: '18px', md: '16px' } }}>Free dryer -In unit</Imports.Typography>
                                    </Imports.Grid>
                                </Imports.Grid>
                                <Imports.Grid item my={3} xs={12} sx={{ display: { xs: 'center', md: 'start' }, }}>
                                    <Imports.Button variant='outlined' sx={{ color: 'black', padding: '10px', border: '1px solid black', borderRadius: '10px', textTransform: 'initial', '&:hover': '1px solid black', }}>Show all 55 amenities</Imports.Button>
                                </Imports.Grid>
                            </Imports.Grid>
                            <Imports.Divider />


                            <Imports.Grid item xs={12} my={4} sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                <Imports.Grid item>
                                    <Imports.Typography variant='h4' fontSize='25px'>5 nights in Dubai</Imports.Typography>
                                    <Imports.Typography caption='boby' fontSize='14px' fontWeight='normal' color='gray'>1 Aug 2024 - 6 Aug 2024</Imports.Typography>

                                </Imports.Grid>
                                <Imports.Grid item >

                                    <Imports.Grid style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                                        {isSmallScreen ? (
                                            <DateRange
                                                ranges={[selectionRange]}
                                                onChange={handleSelect}
                                                months={1}
                                                direction="horizontal"
                                                showMonthAndYearPickers={false}
                                                showMonthArrow={true}
                                                showDateDisplay={false}
                                                preventSnapRefocus={true}
                                                colors={'red'}
                                                rangeColors={['black','lightgray']}

                                            />) : (<DateRange
                                                ranges={[selectionRange]}
                                                onChange={handleSelect}
                                                months={2}
                                                direction="horizontal"
                                                showMonthAndYearPickers={false}
                                                showMonthArrow={true}
                                                showDateDisplay={false}
                                                colors={'red'}
                                                rangeColors={['black','lightgray']} />)}
                                    </Imports.Grid>


                                </Imports.Grid>
                            </Imports.Grid>

                            <Imports.Grid container display="flex" padding="10px"  justifyContent="space-between" sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                <Imports.Grid item>
                                    <Imports.KeyboardAltIcon sx={{ textAlign: 'left' }} />
                                </Imports.Grid>
                                <Imports.Grid item>
                                    <Imports.Typography sx={{ fontWeight: 'medium', textDecoration: 'underline', fontSize: { xs: '16px', md: '15px' }, textAlign: 'right' }}>
                                        Clear dates
                                    </Imports.Typography>
                                </Imports.Grid>
                            </Imports.Grid>
                        </Imports.Grid>
                         {/* <Imports.Grid item sx={{paddingX: { xs: '10px', sm: '0px' }}}> */}
                        <Imports.Grid item xs={12} sm={4.5} md={4.1}my={0}
                            sx={{
                                position: 'sticky',
                                top: '100px',
                                zIndex: 1,
                                backgroundColor: 'white',
                                justifyContent: 'end',
                                padding: { xs: '10px', sm: '0px' },
                                height: '100%',
                                width: '100%',
                                paddingX: { xs: '10px', sm: '0px' }
                            }}
                        >
                            <Imports.Card
                                sx={{
                                    padding: '20px',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                                    margin: { xs: 'auto', sm: '25px' },
                                    // margin:'auto',
                                    width: '100%',
                                    borderRadius:'20px'
                                }}
                            >
                                <Imports.Typography sx={{fontSize:{xs:'22px',sm:'20px'}}}>
                                    <Imports.Box component='span' sx={{ textDecoration: 'line-through', color: 'gray', }}>₹ 48,728 </Imports.Box>₹ 40,239
                                </Imports.Typography>
                                <Imports.Typography fontSize='14px' color='gray'>total before taxes</Imports.Typography>
                                <Imports.Grid item xs={12} display='flex'>
                                    <Imports.Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateField']}>
                                                <Imports.Grid sx={{ width: '100%' }}>
                                                    <DateField label="CHECK_IN " className="custom-datefield" fullWidth margin='none' />
                                                </Imports.Grid>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Imports.Grid>
                                    <Imports.Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateField']}>
                                                <Imports.Grid sx={{ width: '100%' }}>
                                                    <DateField label="CHECK_IN" className="custom-datefield" fullWidth margin='none' />
                                                </Imports.Grid>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Imports.Grid>
                                </Imports.Grid>
                                <Imports.Grid item xs={12} display='flex' justifyContent='space-between' border='1px solid lightgray' padding='10px'>
                                    <Imports.Grid item sx={{ justifyContent: 'start' }}>
                                        <Imports.Typography>GUESTS</Imports.Typography>
                                        <Imports.Typography variant='caption'>1 guest</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ justifyContent: 'end' }}>
                                        <Imports.KeyboardArrowDownIcon />
                                    </Imports.Grid>
                                </Imports.Grid>
                                <Imports.Grid item justifyContent='center' textAlign='center' xs={12} mt={2}>
                                    <Imports.Button
                                        variant='contained'
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#d60951',
                                            '&:hover': { backgroundColor: '#d60951' },
                                            width: '100%',
                                            padding: '7px'
                                        }}
                                    >
                                        Reserve
                                    </Imports.Button>
                                </Imports.Grid>
                                <Imports.Typography sx={{ textAlign: 'center', fontSize: '13px', color: 'gray', fontWeight: 'normal' }} mt={2}>
                                    You won't be charged yet
                                </Imports.Typography>
                            </Imports.Card>
                            <Imports.Grid
                                width='100%' 
                                padding='20px'
                                borderRadius='10px'
                                border='1px solid lightgray'
                                display='flex'
                                gap={2}
                                mt={3}
                                sx={{margin: { xs: 'auto', sm: '25px' },marginTop:{xs:'10px'}}}
                            >
                                <Imports.SellIcon fontSize='large' />
                                <Imports.Grid >
                                    <Imports.Typography fontSize='15px'>Lower Price</Imports.Typography>
                                    <Imports.Typography variant='h5'>Your dates are ₹ 774 less than the avg nightly rate of the last 60 days</Imports.Typography>
                                </Imports.Grid>
                            </Imports.Grid>
                            <Imports.Grid
                                mt={3}
                                sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                gap={2}
                            >
                                <Imports.AssistantPhotoIcon />
                                <Imports.Typography variant='h3' sx={{ textDecoration: 'underline' }}>Report this listing</Imports.Typography>
                            </Imports.Grid>
                        </Imports.Grid>
                        </Imports.Grid>



                    </Imports.Grid>

                </Imports.Grid>
            <Imports.Divider />
        </>
    )
}

