import React, { useEffect ,useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchPlaceInitiate } from '../redux/action/searchPlaceAction';
import { Grid, Typography, CardMedia, Box, Stack, CardContent,Card } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch,useSelector } from "react-redux";
import SearchSwiperComponent from "./SearchSwiperComponent";
import SearchComponentMaps from "./SearchComponentMaps";
import Imports from "../commons/AllImports";

const SearchComponent = ({  paramData,name }) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.getsearchplacereducer.data || []);

    useEffect(() => {
        // Dispatch the action to fetch data when the component mounts
        dispatch(getSearchPlaceInitiate());
        setLoading(false)
    }, [dispatch]);


    const param = useParams();
    const { id } = param;

    // Filter data based on paramData
    console.log("paramData in navbar",paramData)
    const filteredData = productsData.filter(item => item.status === paramData); 
    if (loading) {
        return (
          <Imports.Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <CircularProgress />
          </Imports.Grid>
        );
      }

    return (
        <>
            <Imports.Grid container justifyContent='center' xs={12} mb={5} sx={{display:{xs:"none",sm:"flex"}}}>
                <SearchSwiperComponent filteredData={filteredData}/>

                  { filteredData . length !== 0  &&
                 ( 
                <SearchComponentMaps name={name}/>
                 )                 
                 }
            </Imports.Grid>
        </>
    );
};

export default SearchComponent;
