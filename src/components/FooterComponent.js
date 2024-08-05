import REACT, { useState } from 'react';
import Imports from '../commons/AllImports';
import { Divider, ListItem, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight, ImageOutlined, LanguageIcon } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterComponent = () => {
    const [open, SetOpen] = useState(false)
    const [showMoreVisible, setShowMoreVisible] = useState(true);
    const footer = [
        'Popular', 'Arts & culture', 'Outdoor', 'Mountains', 'Beach', 'Unique', 'Stays', 'Categories', 'Things to do'
    ]

    const footerContent = [
        { body2: 'Canmore', caption: 'Flat rentals' }, { body2: 'benalmadena', caption: 'Beach house rental' }, { body2: 'Marbella', caption: 'Villa rentals' }, { body2: 'Mijas', caption: 'Flat rentals' }, { body2: 'Prescott', caption: 'Pet-friendlyrentals' },
        { body2: 'Scottsdale', caption: 'House rental' }, { body2: 'Tucson', caption: 'Pet-friendly rentals' },
        { body2: 'Jasper', caption: 'Cabin  rentals' }, { body2: 'Mountain View', caption: 'Cabin rental' },
        { body2: 'Devonport', caption: 'Cottage rental' }, { body2: 'Mallacoota', caption: 'Holiday rentals' }, { body2: 'Ibiza', caption: 'Holiday rentals' }, , { body2: 'Anaheim', caption: 'Flat rentals' },
        { body2: 'Monterey', caption: 'House rental' }, { body2: 'Pasorobles', caption: 'House rentals' }, { body2: 'Santa barbara', caption: 'Beachfront rentals' },
        { body2: 'Sonoma', caption: 'Pet friendly rentals' }, { body2: 'Canmore', caption: 'Flat rentals' },

    ];

    const footerRemain = [
        { body: 'Lasarena', caption: 'Holiday rentals' }, { body: 'Dubai', caption: 'Holiday rentals' }, { body: 'Birmingam', caption: 'Flat rentals' }, { body: 'Brington', caption: 'Flat rentals' }, { body: 'Bude', caption: 'Holiday rentals' },
        { body: 'NewCastle upon Tyne', caption: 'Holiday rentals' }, { body: 'padstow', caption: 'House rentals' }, { body: 'South West England', caption: 'Holiday rentals' }, { body: 'St,Peterbrug', caption: 'Flat rentals' }, { body: 'St.Agustine', caption: 'Cottage rentals' },
        { body: 'Whitby', caption: 'House rentals' }, { body: 'Forty Myeres', caption: 'Villa rentals' }, { body: 'Jacksonville', caption: 'Mansion rentals' }, { body: 'Kissimmee', caption: 'Rental with pools' }, { body: 'Long boat key', caption: 'Beach house rentals' },
        { body: 'The villages', caption: 'Holiday rentals' }, { body: 'Dahlonega', caption: 'Holiday rentals' }, { body: 'Crete', caption: 'Villa rentals' },
        { body: 'Lasarena', caption: 'Holiday rentals' }, { body: 'Dubai', caption: 'Holiday rentals' }, { body: 'Birmingam', caption: 'Flat rentals' }, { body: 'Brington', caption: 'Flat rentals' }, { body: 'Bude', caption: 'Holiday rentals' },
        { body: 'NewCastle upon Tyne', caption: 'Holiday rentals' }, { body: 'padstow', caption: 'House rentals' }, { body: 'South West England', caption: 'Holiday rentals' }, { body: 'St,Peterbrug', caption: 'Flat rentals' }, { body: 'St.Agustine', caption: 'Cottage rentals' },
        { body: 'Whitby', caption: 'House rentals' }, { body: 'Forty Myeres', caption: 'Villa rentals' }, { body: 'Jacksonville', caption: 'Mansion rentals' }, { body: 'Kissimmee', caption: 'Rental with pools' }, { body: 'Long boat key', caption: 'Beach house rentals' },
        { body: 'The villages', caption: 'Holiday rentals' }, { body: 'Dahlonega', caption: 'Holiday rentals' }, { body: 'Crete', caption: 'Villa rentals' },
        { body: 'Lasarena', caption: 'Holiday rentals' }, { body: 'Dubai', caption: 'Holiday rentals' }, { body: 'Birmingam', caption: 'Flat rentals' }, { body: 'Brington', caption: 'Flat rentals' }, { body: 'Bude', caption: 'Holiday rentals' },
        { body: 'NewCastle upon Tyne', caption: 'Holiday rentals' }, { body: 'padstow', caption: 'House rentals' }, { body: 'South West England', caption: 'Holiday rentals' }, { body: 'St,Peterbrug', caption: 'Flat rentals' }, { body: 'St.Agustine', caption: 'Cottage rentals' },
        { body: 'Whitby', caption: 'House rentals' }, { body: 'Forty Myeres', caption: 'Villa rentals' }, { body: 'Jacksonville', caption: 'Mansion rentals' }, { body: 'Kissimmee', caption: 'Rental with pools' }, { body: 'Long boat key', caption: 'Beach house rentals' },
        { body: 'The villages', caption: 'Holiday rentals' }, { body: 'Dahlonega', caption: 'Holiday rentals' }, { body: 'Crete', caption: 'Villa rentals' },
    ]
    const footersupport = [
        ['Support', 'Help center', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report Neighbourhood concern'],
        ['Hosting', 'Airbnb Your home', 'Air cover for hosting', 'Hosting resources', 'Community forum', 'Hosting Responsibility', 'Join a free Hosting Class'],
        ['Airbnb', 'Newsroom', 'New features', 'Careers', 'Investor', 'Airbnb .org emergency stays']
    ];
    const footerLinks = [
        '© 2024 Airbnb, Inc.',
        'Privacy',
        'Terms',
        'Sitemap',
        'Company Details'
      ];
      const socialIcons = [
        { component: <TwitterIcon />, key: 'twitter' },
        { component: <FacebookIcon />, key: 'facebook' },
        { component: <InstagramIcon />, key: 'instagram' }
      ];


    const handleShowMore = () => {
        SetOpen(!open);
        setShowMoreVisible(false);
    }
    const handleShowLess = () => {
        SetOpen(!open);
        setShowMoreVisible(true);
    }
    return (
        <>
            <Imports.Grid container item justifyContent='center' xs={12} backgroundColor='#ededed'pt={5}>
                <Imports.Grid item xs={11}>
                    <Imports.Grid item sx={{}} >
                        <Imports.Typography variant='foot'>Inspiration for future gateways</Imports.Typography>
                    </Imports.Grid>
                    <Imports.Grid item  sx={{ fontWeight: 'normal',display:'flex' }} xs={12} md={8}>
                        <Swiper
                            spaceBetween={0}
                            navigation={{
                                prevEl: `.custom-prev-btn`,
                                nextEl: `.custom-next-btn`,
                            }}
                            className="ProductSwiper"
                            breakpoints={{
                                1440: { slidesPerView: 8 },
                                1024: { slidesPerView: 8 },
                                764: { slidesPerView: 6 },
                                576: { slidesPerView: 4 },
                                320: { slidesPerView: 3 },
                            }}
                        >
                            {footer.map((item, index) => (
                               
                                    <SwiperSlide key={index}>
                                        <Imports.ListItem sx={{ fontSize: '13px', borderBottom: index === 0 ? '2px solid black' : 'none', justifyContent: 'center' }}>{item}</Imports.ListItem>
                                    </SwiperSlide>
                               
                            ))} 
                            </Swiper>
                            
                    </Imports.Grid>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                    <Imports.Grid container item xs={12}  padding='20px'>
                        <Imports.Grid item ></Imports.Grid>
                        {footerContent.map((item, index) => (
                            <Imports.Grid item xs={6} sm={4} md={2} lg={2} key={index} sx={{ paddingRight: 2, paddingBottom: 2 }}>
                                <Imports.Grid container direction="column" >
                                    <Imports.Typography variant='body2' sx={{ fontFamily: 'inherit' }}>{item.body2}</Imports.Typography>
                                    <Imports.Typography variant='caption' fontSize='14px'>{item.caption}</Imports.Typography>

                                </Imports.Grid>
                            </Imports.Grid>
                        ))}
                        {showMoreVisible && (
                            <>
                           
                            <Imports.Grid item onClick={handleShowMore} display='flex'>
                                <Imports.Typography variant='body2'>Show More</Imports.Typography>
                                <KeyboardArrowDownIcon />
                            </Imports.Grid>
                            
                            </>
                        )}
                        {open && (
                            <Imports.Grid container >
                                {footerRemain.map((item, index) => (
                                    <Imports.Grid item xs={6} sm={4} md={2} lg={2} key={index} sx={{ paddingRight: 2, paddingBottom: 2 }}>
                                        <Imports.Grid container direction="column">
                                            <Imports.Typography variant='body2' sx={{ fontWeight: 'bold' }}>{item.body}</Imports.Typography>
                                            <Imports.Typography variant='caption'>{item.caption}</Imports.Typography>
                                        </Imports.Grid>
                                    </Imports.Grid>
                                ))}
                                <Imports.Grid onClick={handleShowLess} display='flex'>
                                    <Imports.Typography variant='body2'>Show less</Imports.Typography>
                                    <KeyboardArrowUpIcon />
                                </Imports.Grid>
                            </Imports.Grid>
                        )}
                    </Imports.Grid>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                    <Imports.Grid container my={2}>
                        <Imports.Grid container display='flex' padding='20px' >
                            {footersupport.map((subArray, index) => (
                            <Imports.Grid item container key={index} display='block' xs={12} sm={6} md={4}>
                                {subArray.map((item, subIndex) => (
                                <Imports.Typography
                                    variant='body2'
                                    sx={{ fontWeight: subIndex === 0 ? 'bold' : 'normal' }}
                                    my={1}
                                    key={subIndex}
                                >
                                    {item}
                                </Imports.Typography>
                                ))}
                            </Imports.Grid>
                            ))}
                        </Imports.Grid>
                        </Imports.Grid>

                    <Divider orientation="horizontal" variant="middle" flexItem />
                    <Imports.Grid container sx={{ justifyContent: { xs: 'center', md: 'space-between' } ,padding:{xs:'10px',sm:'0px'}}} my={2}>
                    <Imports.Grid   item gap={1}   display='flex'  flexDirection={{ xs: 'column', md: 'row' }}   alignItems={{ xs: 'center', md: 'flex-start' }} xs={12} sm={6}    md={6}  sx={{ order: { xs: 2, md: 1 }, }}  >
                        {footerLinks.map((item ,index) => (
                        <Imports.Typography variant='caption1'fontWeight='normal' key={index}>{item}</Imports.Typography>
                    ))}
                        </Imports.Grid>
                    <Imports.Grid 
                        item   display='flex'  gap={2}  flexDirection={{ xs: 'column', md: 'row' }}  alignItems={{ xs: 'center', md: 'flex-end' }} 
                        xs={12}  md={6} justifyContent='flex-end'  sx={{ order: { xs: 1, md: 2 } }}  >
                        <Imports.Grid item display='flex' gap={2} flexDirection={{ xs: 'column', md: 'row' }}>
                            <Imports.Grid item display='flex'>
                                <Imports.LanguageIcon sx={{ fontSize: 20, color: 'black',  }} />
                                <Imports.Typography fontWeight='medium'variant='caption1'>English (IN)&nbsp;&nbsp;₹ INR</Imports.Typography>
                            </Imports.Grid>
                        </Imports.Grid>
                        <Imports.Grid item display='flex' gap={2} sx={{ order: { xs: 3, md: 2 }, marginBottom:{xs:'10px',md:'0px'}}} m={0} >
                        {socialIcons.map(({ component, key }) => (
                            <Imports.ButtonBase key={key} sx={{ padding: 0 }}>
                            {component}
                            </Imports.ButtonBase>
                        ))}
                        </Imports.Grid>
                    </Imports.Grid>
                </Imports.Grid>
                </Imports.Grid>
                </Imports.Grid>
            </>
            )
}
            export default FooterComponent;