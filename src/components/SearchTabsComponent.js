
import React from 'react';
import { useState, useEffect } from 'react';
import SwiperCore from 'swiper';
import Imports from '../commons/AllImports';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BorderAll, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Pagination, Navigation } from 'swiper/modules';
// import CustomDrawer from './CustomDrawer';


SwiperCore.use([Pagination, Navigation]);
const SearchTabsComponent = ({ prevTop, prevLeft, nextTop, nextRight  }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperRef,setSwiperRef] =  useState(null)
    const Images = [
        {src :"https://a0.muscache.com/pictures/b887040f-0968-4174-9a4f-2d41f8728248.jpg",h5:"Your Search"},
        { src: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png', h5: 'Icons' },
        {src:'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',h5:'Top cities'},
        { src: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', h5: 'Frams' },
        { src: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg', h5: 'Amazing pools' },
        { src: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg', h5: 'OMG!' },
        { src: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg', h5: 'Camping' },
        { src: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg', h5: 'Masions' },
        { src: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg', h5: 'Amazing View' },
        { src: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg', h5: 'Tree houses' },
        { src: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg', h5: 'Beach front' },
        { src: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg', h5: 'Lake front' },
        { src: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg', h5: 'Country side' },
        { src: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg', h5: 'Luxe' },
        { src: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg', h5: 'Cabin' },
        { src: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg', h5: 'Top of teh World' },
        { src: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg', h5: 'Designs' },
        { src: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg', h5: 'Tiny homes' },
        { src: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg', h5: 'Island' },
        { src: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg', h5: 'off-the-grid' },
        { src: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg', h5: 'Trending' },
        { src: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg', h5: 'Castles' },
        { src: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg', h5: 'Tropical' },
        { src: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg', h5: 'Bread & breakfast' },
        { src: 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg', h5: 'Top cities' },
        { src: 'https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg', h5: 'Houseboats' },
        { src: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg', h5: 'Rooms' },
        { src: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg', h5: 'Arctic' },
        { src: 'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg', h5: 'Golfing' },
        { src: 'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg', h5: 'Domes' },
        { src: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg', h5: 'Surfing' },
        { src: 'https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg', h5: 'raids' },
        { src: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg', h5: 'Earth homes' },

    ]; 
    const handleImageClick = (index) => {
        setActiveIndex(index);
      };

    return (
        <>
     <Imports.Grid container sx={{ justifyContent: 'space-between' ,}}>
        <Imports.Grid item xs={12} sx={{ mt: { xs: '0px', sm: "10px" } }}>
          <Imports.Grid container>
            <Swiper
              onSwiper={setSwiperRef}
              spaceBetween={2}
              slidesPerGroup={4}
              navigation={{
                prevEl: '.custom-swiper-button-prev',
                nextEl: '.custom-swiper-button-next',
              }}
              modules={[Pagination, Navigation]}
              className="ProductSwiper"
              breakpoints={{
                1440: {
                  slidesPerView: 13,
                },
                1024: {
                  slidesPerView: 8,
                },
                769: {
                  slidesPerView: 5,
                },
                576: {
                  slidesPerView: 5,
                },
                426: {
                  slidesPerView: 5,
                },
                367: {
                  slidesPerView: 5,
                },
                320: {
                  slidesPerView: 4,
                },
              }}
            >
              {Images.map((image, index) => (
                <Imports.Grid container alignItems="center" position="relative" key={index} >
                  <SwiperSlide  >
                    <Imports.Grid item onClick={() => handleImageClick(index)}
                sx={{ borderBottom: index === activeIndex ? '2px solid black' : 'none',  color: index === activeIndex ? 'black' : 'gray', "&:hover": { color: "black", borderBottom: "2px solid lightgray" },  }}>
                    <Imports.Grid container alignItems="center" justifyContent="center" >
                      <img
                        src={image.src}  alt={`Slide ${index + 1}`}  className="swiper-slide-img"  width='25px'  height='30px'  />
                    </Imports.Grid>
                    <Imports.Grid item textAlign='center'>
                      <Imports.Typography variant='text'>{image.h5}</Imports.Typography>
                    </Imports.Grid>
                    </Imports.Grid>
                  </SwiperSlide>
                  {index === 0 && (
                    <Imports.Grid item position="absolute" right={0} height="100%">
                      <Imports.Divider orientation='vertical' sx={{ backgroundColor: 'lightgray', width: '2px' }} />
                    </Imports.Grid>
                  )}
                </Imports.Grid>
              ))}
            </Swiper>
            <Imports.IconButton  className="custom-swiper-button-prev"  sx={{   position: 'absolute',  zIndex: '1000',  top: prevTop,  left: prevLeft,  transform: 'translateY(-50%)',  backgroundColor: 'white',  border: '2px solid lightgray',  padding: '2px',  }}  >  <Imports.ChevronLeft /> </Imports.IconButton>
            <Imports.IconButton  className="custom-swiper-button-next"  sx={{ position: 'absolute',  zIndex: '1000',  top: nextTop, right: nextRight,  transform: 'translateY(-50%)', backgroundColor: 'white', border: '2px solid lightgray',   padding: '2px',  }}  > <Imports.ChevronRight />  </Imports.IconButton>
          </Imports.Grid>
        </Imports.Grid>
      </Imports.Grid>
            {/* </Imports.Grid> */}
        </>
    );
}
export default SearchTabsComponent;