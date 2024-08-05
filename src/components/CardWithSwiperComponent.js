import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Imports from "../commons/AllImports";

const ReusableCardSwiperComponent = ({cardsData}) => {
    return (
        <>
            <Imports.Grid container  justifyContent='center' >
                <Imports.Grid container  item xs={11} spacing={3}>
                    {cardsData.map((item, index) => (
                        <Imports.Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Imports.Grid container justifyContent='start' sx={{ position: 'relative', gap: 1 }} >
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
                                                    style={{ borderRadius: '10px' }}
                                                />
                                                <Imports.Grid className={`custom-prev-${index} prevbtn`} style={{ cursor: 'pointer', alignItems: 'center', color: 'black', position: 'absolute', top: '120px', left: '10px', zIndex: 10, backgroundColor: 'white', borderRadius: '50%', paddingY: '2px', paddingX: '1px' }}>
                                                    <Imports.ChevronLeft />
                                                </Imports.Grid>
                                                <Imports.Grid className={`custom-next-${index} nextbtn`} style={{ cursor: 'pointer', alignItems: 'center', color: 'black', position: 'absolute', top: '120px', right: '10px', zIndex: 10, backgroundColor: 'white', borderRadius: '50%', paddingY: '2px', paddingX: '1px' }}>
                                                    <Imports.ChevronRight />
                                                </Imports.Grid>
                                                <Imports.Grid  className="icon"sx={{ position: 'absolute', right: '20px', backgroundColor: 'lightgray', top: '20px', zIndex: 10, padding: '5px', borderRadius: '50%' ,display:'flex'}}>
                                                    <Imports.IosShareIcon fontSize="small" />
                                                </Imports.Grid>
                                                {index === 0 && (

                                                <Imports.Grid>
                                                    <Imports.Typography sx={{ backgroundColor: 'lightgray', borderRadius: '20px', position: 'absolute', left: '20px', top: '20px', zIndex: 10, padding: '3px', fontWeight: 'medium', fontSize: '14px', paddingX: '8px' }}>Live </Imports.Typography>
                                                </Imports.Grid>
                                                )}</Imports.Grid>
                                            
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Imports.CardContent justifycontent='start' textalign='start'>
                                    <Imports.Typography variant='h2'>{item.h5}</Imports.Typography>
                                    <Imports.Typography variant="h3">{item.p}</Imports.Typography>
                                     <Imports.Typography sx={{fontSize:"14px"}}>{item.h6}</Imports.Typography>
                                </Imports.CardContent>
                            </Imports.Grid>
                        </Imports.Grid>
                    ))}
                </Imports.Grid>
            </Imports.Grid>
        </>
    )
}


export default ReusableCardSwiperComponent;