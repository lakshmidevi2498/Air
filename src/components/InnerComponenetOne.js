import React from 'react';
import Imports from '../commons/AllImports';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useLocation, useNavigate } from 'react-router-dom';
import InnerSwiperComponent from './InnerSwiperComponent';
import InnerSubComponent from './InnerSubComponent';
import InnerSubTwoComponent from "./InnerSubTwoComponent"
import InnerCalenderComponent from './InnerCalenderComponent';
import InnerCardComponent from './InnerCardComponent';
import { Grid, Box, Button } from '@mui/material';
import GridOnSharpIcon from '@mui/icons-material/GridOnSharp';

export const InnerComponenetOne = () => {

    const navigate = useNavigate();
    const handleAllImages = () => {
        navigate('/allimages', { state: { allImages, innerImgs } })
        console.log("allImagesin handleAllImages", allImages)
    }
    const handleProducts = () => {
        navigate("/products")
    }
    const handleHomePage = () => {
        navigate('/')
    }
    const location = useLocation();
    console.log("location", location);
    console.log("locationinnerimgs---->", location.state.innerImgs)
    console.log("locationinnerimgs0---->", location.state.showall)
    const allImages = location.state.showall || [];
    const innerImgs = location.state?.innerImgs || [];
    if (!innerImgs.length) {
        return <div>No images available</div>;

    }
    const images = [
        { src: location.state.innerImgs[1].src, borderRadius: '0' },
        { src: location.state.innerImgs[2].src, borderRadius: '0' },
        { src: location.state.innerImgs[3].src, borderRadius: '10px 0 0 0' },
        { src: location.state.innerImgs[4].src, borderRadius: '0 10px 0 0' }
    ];

    return (

        <>
            <Imports.Grid container justifyContent='center'  >
                <Imports.Grid item xs={12} sm={11} md={10} lg={9.5} sx={{ padding: { xs: '0px', sm: '0px' }, marginTop: { xs: "0px", sm: "10px" } }} gap={2}>
                    <Imports.Grid item sx={{ display: { xs: " none  ", sm: "block" } }}>
                        <Imports.Grid item sx={{ display: 'flex', justifyContent: 'space-between', padding: { xs: '10px', sm: '0px' } }}  >
                            <Imports.Grid item ><Imports.Typography variant='innerText' sx={{ display: { xs: 'none', sm: 'block' } }}>Horizon Tower-stunning Four Bedroom</Imports.Typography>
                                <Imports.Grid sx={{ display: { xs: "flex", sm: 'none' } }}><Imports.ChevronLeft onClick={handleHomePage} />
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
                        <Imports.Grid item xs={12} mt={2} display='flex' gap={1} sx={{ borderRadius: '10px' }}>
                            <Imports.Grid item xs={12} sm={6} sx={{ borderRadius: '10px', overflow: 'hidden', height: '420px' }} className="image-container">
                                <img
                                    className="hover-image" src={location.state.innerImgs[0].src} width='100%' style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', marginBottom: '8px', objectFit: "cover", height: '100%' }} />
                                <div className="overlay"></div>
                            </Imports.Grid>
                            <Imports.Grid item xs={6} width='100%' height='100%' sx={{ display: { xs: 'none', sm: 'block' } }} >
                                <Imports.Grid container spacing={1}>
                                    <Imports.Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        {images.slice(0, 2).map((image, index) => (
                                            <Imports.Grid
                                                key={index}
                                                className="image-container"
                                                sx={{
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    height: '207px'
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={image.src}
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <div className="overlay"></div>
                                            </Imports.Grid>
                                        ))}
                                    </Imports.Grid>
                                    <Imports.Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {images.slice(2).map((image, index) => (
                                            <Imports.Grid
                                                key={index}
                                                sx={{
                                                    overflow: 'hidden',
                                                    height: '207px'
                                                }}
                                                className="image-container"
                                            >
                                                <Box
                                                    component="img"
                                                    className="hover-image"
                                                    src={image.src}
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: image.borderRadius
                                                    }}
                                                />
                                                <div className="overlay"></div>
                                            </Imports.Grid>
                                        ))}
                                        <Imports.Grid
                                            sx={{
                                                position: 'absolute',
                                                top: { xs: '90%', sm: '450px', lg: '490px', xl: '70%' },
                                                right: { sm: '52px', md: '110px', lg: '230px' }
                                            }}
                                        >
                                            <Imports.Grid display='flex'>
                                                <Imports.Button
                                                    variant='contained'
                                                    sx={{
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                        border: '1px solid black',
                                                        textTransform: 'initial',
                                                        paddingX: { sm: '5px', md: '15px' },
                                                        '&:hover': { backgroundColor: 'white' }
                                                    }}
                                                    onClick={handleAllImages}
                                                >
                                                    <Imports.GridOnSharpIcon fontSize='small' />
                                                    Show all photos
                                                </Imports.Button>
                                            </Imports.Grid>
                                        </Imports.Grid>
                                    </Imports.Grid>
                            </Imports.Grid>
                        </Imports.Grid>
                    </Imports.Grid>
                </Imports.Grid>
                <InnerSwiperComponent handleProducts={handleProducts} allImages={allImages} />
                <Imports.Grid container display='flex' sx={{ marginTop: { xs: '10px' } }} my={5} gap={2} >
                    <Imports.Grid item xs={12} sm={7} md={7.5} sx={{ padding: { xs: '10px', md: '0px' } }} justifyContent='start'>
                        <InnerSubComponent />
                        <InnerSubTwoComponent />
                        <Imports.Divider />
                        <InnerCalenderComponent />
                    </Imports.Grid>
                    <Imports.Grid item xs={12} sm={4.5} md={4.1} my={0} sx={{ position: 'sticky', top: '100px', zIndex: 1, backgroundColor: 'white', justifyContent: 'end', padding: { xs: '10px', sm: '0px' }, height: '100%', width: '100%', paddingX: { xs: '10px', sm: '0px' } }} >
                        <InnerCardComponent />
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>
            </Imports.Grid>
            <Imports.Divider />
        </>
    )
}

