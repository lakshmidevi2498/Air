import React, { useEffect ,useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import StarIcon from '@mui/icons-material/Star';
import { useMediaQuery, useTheme } from '@mui/material'; 
import Imports from "../commons/AllImports";

const SearchSwiperComponent = ({filteredData}) => {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleImageClick = (index) => {
        setActiveIndex(index);
      };
  return (
    <>   
    <Imports.Grid container justifyContent={'center'} xs={12} md={8}  sx={{ margin: 'auto',padding:{ xs:"0px,sm:10px",}, }} >
                    { filteredData . length !== 0  &&  (<Imports.Grid container xs={11} >
                        <Imports.Typography variant='h3' sx={{ color: 'black' }} my={2}>124 places</Imports.Typography>
                    </Imports.Grid>)}
                    <Imports.Grid container xs={12} justifyContent='center' >
                        {filteredData.length === 0 ? (
                            <Imports.Grid item xs={12} my={2} sx={{textAlign:"center",justifyContent:"center",margin:"auto"}} >
                                <Imports.Box component = "img" src="https://t4.ftcdn.net/jpg/04/72/65/73/360_F_472657366_6kV9ztFQ3OkIuBCkjjL8qPmqnuagktXU.jpg" maxWidth='100%'height='auto'/>
                            </Imports.Grid>
                        ) : (
                            filteredData.length > 0 && filteredData?.map((item, index) => (
                                <Imports.Grid key={index} justifyContent='center' item xs={12} sm={6} md={6} lg={4} sx={{padding:{ xs:"15px",}}} >                                   
                                        <Swiper
                                            spaceBetween={10}
                                            pagination={true}
                                            navigation={{
                                                prevEl: `.custom-prev-${index}`,
                                                nextEl: `.custom-next-${index}`,
                                            }}
                                            className="ProductSwiper"
                                            breakpoints={{
                                                1440: { slidesPerView: 1 },
                                                1024: { slidesPerView: 1 },
                                                764: { slidesPerView: 1 },
                                                576: { slidesPerView: 1 },
                                                320: { slidesPerView: 1 },
                                            }}
                                        >
                                            <Imports.Grid>
                                                {index === 1 || index === 2 || index === 11
                                                    ? (
                                                        <Imports.Typography sx={{backgroundColor: 'white',  borderRadius: '20px',  position: 'absolute', left: '20px', top: '20px',  zIndex: 10,  padding: '3px',  fontWeight: 'medium', fontSize: '14px',  paddingX: '8px'  }}>  Guest favourite  </Imports.Typography>
                                                    ) : (
                                                        index === 5 || index === 8 || index === 9 || index === 10 ? (
                                                            <Imports.Typography sx={{  backgroundColor: 'gray',  borderRadius: '20px', position: 'absolute', left: '20px',  top: '20px', zIndex: 10,  padding: '3px',  fontWeight: 'bold',  fontSize: '14px', paddingX: '8px',  color: 'white' }}>  super host </Imports.Typography>
                                                        ) : ""  )}
                                            </Imports.Grid>
                            
                                            <Imports.Grid className="icon" sx={{ position: 'absolute', right: '20px', top: '20px', zIndex: 10, padding: '5px' }}>
                                                <Imports.FavoriteBorderIcon fontSize="medium" sx={{ color: 'white' }} />
                                            </Imports.Grid>
                                            {item.inner.map((innerItem, innerIndex) => (
                                                <SwiperSlide key={innerIndex} sx={{}}>
                                                    <Imports.Grid container justifyContent='center' sx={{ position: 'relative', }} >
                                                        <Imports.CardMedia
                                                            component="img" height="250"  image={innerItem.img}  alt="Image Title" style={{ borderRadius: '10px', width: '100%', borderBottom: index === activeIndex ? '2px solid black' : 'none'}}  onClick={() => handleImageClick(index)}  />
                                                        <Imports.Grid className={`custom-prev-${index} prevbtn`} style={{ cursor: 'pointer', alignItems: 'center',  color: 'black',  position: 'absolute',  top: '120px', left: '10px',   zIndex: 10,  backgroundColor: 'white',  borderRadius: '50%',  paddingY: '2px',  paddingX: '1px'  }}>
                                                            <Imports.ChevronLeft />
                                                        </Imports.Grid>
                                                        <Imports.Grid className={`custom-next-${index} nextbtn`} style={{cursor: 'pointer',  alignItems: 'center', color: 'black',  position: 'absolute',  top: '120px', right: '10px', zIndex: 10,  backgroundColor: 'white', borderRadius: '50%', paddingY: '2px',  paddingX: '1px'  }}>
                                                            <Imports.ChevronRight />
                                                        </Imports.Grid>
                                                    </Imports.Grid>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <Imports.CardContent>
                                            <Imports.Grid item xs={12} my={2}>
                                                <Imports.Grid container justifyContent="space-between">
                                                    <Imports.Typography variant="h5" sx={{ fontWeight: 'medium' }}>
                                                        {item.h5}
                                                    </Imports.Typography>
                                                    <Imports.Box display="flex" alignItems="center">
                                                        <StarIcon fontSize="small" sx={{ color: 'black', padding: 0 }} />
                                                        <Imports.Typography variant="h6">{item.star}({item.views})</Imports.Typography>
                                                    </Imports.Box>
                                                </Imports.Grid>
                                                <Imports.Typography variant="h3" sx={{ fontSize: '14px' }}>{item.p1}</Imports.Typography>
                                                <Imports.Typography variant="h3" sx={{ fontSize: '14px' }}>{item.p2}</Imports.Typography>
                                                <Imports.Grid sx={{ display: 'flex' }}>
                                                    <Imports.Typography variant="h3" sx={{fontSize:"15px",color:"black"}}>
                                                        ₹{item.h6}&nbsp;
                                                        <Imports.Box component="span" fontWeight="normal" sx={{fontSize:"15px"}}>nights&nbsp;&nbsp;</Imports.Box>
                                                    </Imports.Typography>
                                                    <Imports.Typography variant='h3' sx={{ textDecoration: 'underline', fontSize: '14px', marginTop: '2px' }}>₹{item.h6}total</Imports.Typography>
                                                </Imports.Grid>
                                            </Imports.Grid>
                                        </Imports.CardContent>
                                </Imports.Grid>
                            ))  
                        )}                       
                    </Imports.Grid>                   
                    { filteredData . length !== 0  &&
                    ( <Imports.Stack spacing={2} my={3}>
                        <Imports.Pagination
                            count={isSmallScreen ? 5 : 10}
                            sx={{ '& .Mui-selected': {  backgroundColor: 'black !important',  color: 'white'  }  }} />
                    </Imports.Stack>)}
                </Imports.Grid>
    </>
  )
}

export default SearchSwiperComponent