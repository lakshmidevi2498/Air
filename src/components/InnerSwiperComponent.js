import React from 'react'
import Imports from '../commons/AllImports';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const InnerSwiperComponent = ({handleProducts ,allImages}) => {
    console.log("allImages",allImages)
  return (
    <>
     <Imports.Grid item sx={{display:{xs:"block ",sm:"none"},}} xs={12} mt={0} >
                    <Swiper
                            spaceBetween={2}
                            slidesPerGroup={4}
                            pagination={{ type: 'fraction' }} 
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
                                    style={{ backgroundColor: 'lightgrey' ,objectFit:"cover",height:"100p%"}}
                                    />
                                </Imports.Grid>
                                </Imports.Grid>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                             
                    </Imports.Grid>
    </>
  )
}

export default InnerSwiperComponent