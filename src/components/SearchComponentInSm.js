import React, { useEffect ,useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Imports from "../commons/AllImports";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Pagination from '@mui/material/Pagination';
import { getSearchPlaceInitiate } from '../redux/action/searchPlaceAction';
import { Grid, Typography, CardMedia, Box, Stack, CardContent,Card, Divider } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import SearchSwiperComponent from "./SearchSwiperComponent";

const SearchComponentInSm = ({ data, error, paramData,name }) => {
    
    const [ loading,setLoading] = useState(true)
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const dispatch = useDispatch()
    const searchImage =useSelector((state) => state.getsearchplacereducer.data || []);
    useEffect(() => {
       
         dispatch(getSearchPlaceInitiate());
        setLoading(false)
    }, [dispatch]);

    const param = useParams();
    const { id } = param;

    // Filter data based on paramData
    const filteredData = searchImage.filter(item => item.status === paramData); 
  return (
    <>

<Imports.Grid container justifyContent='center' xs={12} mb={5} sx={{display:{xs:"block",sm:"none"}}}>
                <Imports.Grid item 
                 sx={{  display: { xs: "block", sm: "none" },  position: 'relative',  height: '100%',  width: '100%',  overflow: 'hidden', }}  >
                  {name ? (
                    name === "India" ? (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970000.492746783!2d78.9629!3d20.5937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f10f01c4a1e9187%3A0x23a9a582dff9f6!2sIndia!5e0!3m2!1sen!2sus!4v1692720368786!5m2!1sen!2sus"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                zIndex: -1, // Ensures the iframe is behind the content
                              }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    ) : name === "Anguilla" ? (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158327.29194956813!2d-63.0686!3d18.2206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c53a14f4a49b12d%3A0x4c4bbd5d5e58c43!2sAnguilla!5e0!3m2!1sen!2sus!4v1692720368786!5m2!1sen!2sus"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                zIndex: -1, // Ensures the iframe is behind the content
                              }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    ) : name === "Thailand" ? (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122011.55139919903!2d100.5018!3d13.7563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991d11a9aab9%3A0x1b3b6fe1248f38a0!2sThailand!5e0!3m2!1sen!2sus!4v1692720368786!5m2!1sen!2sus"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                zIndex: -1, // Ensures the iframe is behind the content
                              }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    ) : null
                     ) : null}               
                <Imports.Grid container justifyContent={'center'} xs={12} md={8}  sx={{ margin: 'auto',zIndex:"100",padding:{ xs:"10px",},backgroundColor:{xs:"white",sm:"none"},marginTop:{xs:"180px",sm:"0px"},borderRadius:{xs:"10px",sm:"0px"} ,}} >
                <Divider orientation="horizontal" sx={{marginTop:"20px",width:"40px", borderWidth: "2px"}}/>
                    <SearchSwiperComponent filteredData={filteredData}/>
                </Imports.Grid>
                </Imports.Grid>
                </Imports.Grid>
    </>
  )
}


export default SearchComponentInSm