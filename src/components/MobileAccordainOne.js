import React, { useState, useEffect } from 'react'
import Imports from '../commons/AllImports'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import CountryDropdown from './component1';

const MobileAccordainOne = ({handleCountryName,handleMenuName}) => {
    const maps = [
        { countryImg: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320', countryName: "I'm flexible" },
        { countryImg: "https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320", countryName: "Southeast Asia" },
        { countryImg: "https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320", countryName: "Thailand" },
        { countryImg: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320", countryName: "Europe" },
        { countryImg: "https://a0.muscache.com/im/pictures/ebc5a343-8b76-4ae5-8700-eb5e9cec9243.jpg?im_w=320", countryName: "Indonesia" },
        { countryImg: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320", countryName: "United States" },
      ]


 const [data, setData] = useState({
    expandOne: false,
    countryMenu: false,
    accordain1: true,
    country: "",
    MenuCountryName: "",
  });
    const handleAccordainOneChange = () => {
        setData(prevState => ({  ...prevState,  expandOne:!prevState.expandOne,  }));
      };
      const handleMenuCountry = (MenuName) => {
        console.log("MenuName", MenuName);
        setData(prevState => ({
          ...prevState,  MenuCountryName: MenuName,  expandOne: false, }));
        handleMenuName(MenuName)
        console.log("MenuCountryName-->", data.MenuCountryName)
      };
      const handleSelectDropdowm = () => {
        setData(prevState => ({ ...prevState,  countryMenu: !prevState.countryMenu, accordain1: !prevState.accordain1, }));      
      };
      const handleSendCountry = (countryname) => {
        setData(prevState => ({  ...prevState,  country: countryname, }));
        handleCountryName(countryname)
      };
      const handleMobileSearch = () => {
        setData(prevState => ({
          ...prevState, expandOne: !prevState.expandOne,  }));
      };
  return (
    <>
    {data.accordain1 ? (          
              <Imports.Grid item xs={12}  mt={3}>
                <Imports.Accordion expanded={data.expandOne} sx={{borderRadius: '20px'  }} onChange={handleAccordainOneChange}>
            {!data.expandOne && (
            <Imports.AccordionSummary>
                <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Imports.Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start', fontWeight: 'medium' }}>
                    <Imports.Typography variant='h2' sx={{ color: 'lightgray', fontWeight: 'medium' }}>where</Imports.Typography>
                </Imports.Grid>
                <Imports.Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'medium' }}>
                    <Imports.Typography variant='h6' sx={{ fontWeight: "bold" }}>
                    {data.country ? `${data.country.label}` : data.MenuCountryName ? `${data.MenuCountryName}` : "I'm flexible"}
                    </Imports.Typography>
                </Imports.Grid>
                </Imports.Grid>
            </Imports.AccordionSummary>
            )}
            <Imports.AccordionDetails>
            <Imports.Typography variant='h4' fontSize={'22px'} fontWeight={'bold'}>Where to ?</Imports.Typography>
            <Imports.Grid sx={{ display: 'flex', border: "1px solid lightgray", padding: '10px', borderRadius: "10px" }} onClick={handleSelectDropdowm} gap={2} my={2}>
                <Imports.SearchIcon fontSize='medium' sx={{ color: 'black' }} />
                <Imports.Typography variant='h3' > Search Destination</Imports.Typography>
            </Imports.Grid>
            <Imports.Grid>
                <Swiper
                spaceBetween={5}
                pagination={false}
                navigation={{
                    prevEl: `.custom-prev`,
                    nextEl: `.custom-next`,
                }}
                className="ProductSwiper"
                breakpoints={{
                    1440: { slidesPerView: 6 },
                    1024: { slidesPerView: 6 },
                    764: { slidesPerView: 3 },
                    576: { slidesPerView: 3 },
                    376: { slidesPerView: 3 },
                    320: { slidesPerView: 2 },
                }}
                >
                {maps.map((item, index) => (
                    <SwiperSlide key={index}>
                    <Imports.Grid  gap={2}  sx={{ display: 'flex',  borderRadius: '10px', textAlign: 'center', display: 'block', }}  onClick={() => { handleMenuCountry(item.countryName) }}   >
                        <Imports.Box component='img' sx={{ color: 'gray', width: { xs: '110px', }, height: 'auto', border: '1px solid lightgray', borderRadius: '10px', }} src={item.countryImg}></Imports.Box>
                        <Imports.Typography variant="caption" sx={{ fontSize: '16px' }}>{item.countryName}</Imports.Typography>
                    </Imports.Grid>
                    </SwiperSlide>
                ))}
                </Swiper>
            </Imports.Grid>
            </Imports.AccordionDetails>
            </Imports.Accordion>
</Imports.Grid> 
) : (
  <>
    {data.countryMenu && (
      <>
        <Imports.Grid sx={{ display: 'flex', border: "1px solid lightgray", borderRadius: "10px", width: "100%" }} onClick={handleSelectDropdowm} gap={2}>
          <Imports.Grid p={1} sx={{ display: 'flex' }}>
            <Imports.KeyboardBackspaceIcon sx={{ marginTop: "4px", }} onClick={handleMobileSearch} />
            <Imports.Grid item mt={1}>
            <CountryDropdown handleSendCountry={handleSendCountry} /></Imports.Grid>
          </Imports.Grid>
        </Imports.Grid>
      </>)}
  </>
)}
    </>
  )
}

export default MobileAccordainOne