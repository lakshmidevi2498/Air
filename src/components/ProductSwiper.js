import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Imports from "../commons/AllImports";
import { useNavigate } from "react-router-dom";
import { getProductsDataInitiate } from "../redux/action/getProductsDataAction";
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";

const ProductSwiper = () => {
    const [loading, setLoading] = useState(true);
      const navigate= useNavigate()
   const dispatch = useDispatch();
      const productsData = useSelector((state) => state.getproductsdatareducer.data || []);
       console.log("productsData", productsData);
       useEffect(() => {
           dispatch(getProductsDataInitiate());
               setLoading(false);         
       }, [dispatch]);
   
       if (loading) {
        return (
          <Imports.Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <CircularProgress />
          </Imports.Grid>
        );
      }

  const  handleInnerProductsPage = (innerImgs,showall) => {
    navigate('/innerproducts',{state:{innerImgs,showall}})
    console.log("showall----->",showall)
  }
   
    return (
        <>
            <Imports.Grid container  justifyContent='center'  mt={4  }>             
                <Imports.Grid item xs={11}>
                <Imports.Grid container  spacing={3} >

                    {productsData.map((item, index) => (
                        <Imports.Grid key={index} item xs={12} sm={6} md={4} lg={3} >
                            <Imports.Grid container justifyContent='start' sx={{ position: 'relative', }}>
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
                                    {item.inner.map((innerItem, innerIndex) => (
                                        <SwiperSlide key={innerIndex}>
                                            <Imports.Grid container justifyContent='center' sx={{ position: 'relative' }} className="card">
                                                <Imports.CardMedia
                                                    component="img"
                                                    height="300"
                                                    image={innerItem.img}
                                                    alt="Image Title"
                                                    style={{ borderRadius: '10px' }} onClick={()=>{handleInnerProductsPage(item.innerImg,item.showall)}}
                                                />
                                                <Imports.Grid className={`custom-prev-${index} prevbtn`} style={{ cursor: 'pointer', alignItems: 'center', color: 'black', position: 'absolute', top: '120px', left: '10px', zIndex: 10, backgroundColor: 'white', borderRadius: '50%', paddingY: '2px', paddingX: '1px' }}>
                                                    <Imports.ChevronLeft />
                                                </Imports.Grid>
                                                <Imports.Grid className={`custom-next-${index} nextbtn`} style={{ cursor: 'pointer', alignItems: 'center', color: 'black', position: 'absolute', top: '120px', right: '10px', zIndex: 10, backgroundColor: 'white', borderRadius: '50%', paddingY: '2px', paddingX: '1px' }}>
                                                    <Imports.ChevronRight />
                                                </Imports.Grid>
                                                <Imports.Grid className="icon" sx={{ position: 'absolute', right: '20px', top: '20px', zIndex: 10, padding: '5px' }}>
                                                    <Imports.FavoriteBorderIcon fontSize="medium" sx={{ color: 'white' }} />
                                                </Imports.Grid>
                                                <Imports.Grid>
                                                    <Imports.Typography sx={{ backgroundColor: 'white', borderRadius: '20px', position: 'absolute', left: '20px', top: '20px', zIndex: 10, padding: '3px', fontWeight: 'medium', fontSize: '14px', paddingX: '8px' }}>Guest favourite</Imports.Typography>
                                                </Imports.Grid>
                                            </Imports.Grid>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Imports.Grid item xs={12} my={2}>
                                    <Imports.Grid item display='flex' justifyContent='space-between'>
                                        <Imports.Typography variant='h2' sx={{ fontWeight: 'medium' }}>{item.h5}</Imports.Typography>
                                        <Imports.Typography variant="h3" mt={0}>
                                            <Imports.Box display="flex" alignItems="center">
                                                <Imports.ButtonBase>
                                                    <Imports.StarIcon fontSize="small" sx={{ color: 'black', padding: 0 }} />
                                                </Imports.ButtonBase>
                                                {item.star}
                                            </Imports.Box>
                                        </Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Typography variant="h3">{item.p1}Kilometers away</Imports.Typography>
                                    <Imports.Typography variant="h3">5-nights . {item.p2}</Imports.Typography>
                                    <Imports.Typography variant="h3" sx={{ textDecoration: 'underline', fontSize:'14px',color:"black"}} >₹{item.h6} <Imports.Box component="span" fontWeight="normal">total before taxes</Imports.Box></Imports.Typography>
                                </Imports.Grid>
                            </Imports.Grid>
                        </Imports.Grid>
                    ))}
                 </Imports.Grid>
                <Imports.Grid container direction="column" my={5} alignItems='center'>
                    <Imports.Typography variant="h1"> Continue exploring iconic city homes </Imports.Typography>
                    <Imports.Button variant="contained" sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: 'black' }, color: 'white', borderRadius: '10px',  mt: 2 }}> Show more </Imports.Button>                  
                </Imports.Grid>
            </Imports.Grid>
            </Imports.Grid>
        </>
    )
}
export default ProductSwiper;

