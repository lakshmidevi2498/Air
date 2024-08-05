import React, { useCallback } from 'react'
import Imports from '../commons/AllImports'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const FlexibleComponent = React.memo(({ weekParam,handleDate, handleMonths,handleWeekParams }) => {
const handleWeekend = useCallback(() => {
 
    handleWeekParams('Weekend')
    return{ border:'2px solid black'}
  
},[])

const handleWeek = useCallback(() => {
  handleWeekParams('Week')
  return{ border:'2px solid black'}
},[])

const handleWeekMonth = useCallback(() => {
  handleWeekParams('month')
},[])
const getBorderStyle = (param) => {
  return weekParam === param ? '2px solid black' : '1px solid gray';
};
  return (
    <>
      <Imports.Grid container xs={12} justifyContent='center' >
        <Imports.Grid container justifyContent='center'  xs={11} sx={{ }}>
          <Imports.Grid item sx={{ justifyContent: "center", textAlign: 'center', alignItems: "center", marginBottom:{xs:"10px",sm:'50px'} ,marginTop:{xs:"10px",sm:"0px"} }} xs={12}>
            <Imports.ButtonGroup sx={{ justifyContent: "center", textAlign: 'center', alignItems: "center", margin: 'auto', borderRadius: '50px', overflow: 'hidden', border: '2px solid lightgray', paddingX: '0px', backgroundColor: 'lightgray', padding: '5px', paddingX: '15px' }}>
             <Imports.Grid> <Imports.Button item sx={{ textTransform: 'initial', border: 'none', '&:hover': { border: 'none' }, paddingX: '20px', '&:focus': { outline: 'none' }, color: 'black' }} onClick={handleDate} >Dates</Imports.Button></Imports.Grid>
             <Imports.Grid><Imports.Button sx={{ textTransform: 'initial', border: 'none', '&:hover': { border: 'none' }, paddingX: '20px', color: 'black' }} onClick={handleMonths}>Months</Imports.Button></Imports.Grid>
             <Imports.Grid sx={{ backgroundColor: 'white', borderRadius: '40px'}}> <Imports.Button sx={{ textTransform: 'initial', border: 'none', '&:hover': { border: 'none' }, paddingX: '20px', color: 'black', }} >Flexible</Imports.Button></Imports.Grid>
            </Imports.ButtonGroup>
          </Imports.Grid>
          <Imports.Typography variant='h2' sx={{ textAlign: 'center', margin: 'auto', alignItems: 'center' }}>How long would you like to stay?</Imports.Typography>
          <Imports.Grid item xs={12} display='flex' sx={{ textAlign: 'center', marginBottom:{xs:"10px",sm:'40px'} , justifyContent: 'center' }} gap={2} mt={1}>
            <Imports.Typography variant='h1' sx={{  borderRadius: '20px', fontSize: '12px', padding: '9px',border: getBorderStyle('Weekend'), }} onClick={()=>{handleWeekend()}}>Weekend</Imports.Typography>
            <Imports.Typography variant='h1' sx={{ borderRadius: '20px', fontSize: '12px', padding: '9px' ,border: getBorderStyle('Week'),}} onClick={()=>{handleWeek()}}>Week</Imports.Typography>
            <Imports.Typography variant='h1' sx={{  borderRadius: '20px', fontSize: '12px', padding: '9px',border: getBorderStyle('month'), }} onClick={()=>{handleWeekMonth()}}>Month</Imports.Typography>
          </Imports.Grid>
          <Imports.Typography variant='h2' sx={{ textAlign: 'center' }} my={5}>When do you want to go?</Imports.Typography>
          <Imports.Grid container justifyContent="center">
            <Imports.Grid item xs={12}>
              <Swiper
                spaceBetween={10}
                navigation={{
                  prevEl: '.custom-prev',
                  nextEl: '.custom-next',
                }}
                className="ProductSwiper"
                breakpoints={{
                  1440: { slidesPerView: 6 },
                  1024: { slidesPerView: 6 },
                  764: { slidesPerView: 4 },
                  576: { slidesPerView: 3 },
                  320: { slidesPerView: 2 },
                }}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Imports.Grid container direction="column" alignItems="center" justifyContent="center" sx={{border:"1px solid lightgray",marginBottom:"20px",paddingY:"20px",borderRadius:"10px"}}>
                      <Imports.Grid item>
                        <Imports.CalendarTodayOutlinedIcon fontSize="large" sx={{ color: 'gray' }} />
                      </Imports.Grid>
                      <Imports.Grid item>
                        <Imports.Typography variant="body1" align="center">{item.month}</Imports.Typography>
                        <Imports.Typography variant="caption" align="center">{item.year}</Imports.Typography>
                      </Imports.Grid>
                    </Imports.Grid>
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </Imports.Grid>
         </Imports.Grid>
        </Imports.Grid>
      </Imports.Grid>
    </>
  )
})

const data = [
  { month: "July", year: "2024" },
  { month: "August", year: "2024" },
  { month: "September", year: "2024" },
  { month: "October", year: "2024" },
  { month: "November", year: "2024" },
  { month: "December", year: "2024" },
  { month: "January", year: "2025" },
  { month: "February", year: "2025" },
  { month: "March", year: "2025" },
  { month: "April", year: "2025" },
  { month: "May", year: "2025" },
  { month: "June", year: "2025" }
]

export default FlexibleComponent
