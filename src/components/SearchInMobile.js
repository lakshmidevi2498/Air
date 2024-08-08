import React, { useState, useEffect, useCallback } from 'react'
import Imports from '../commons/AllImports'
import { Close } from '@mui/icons-material' 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { useNavigate } from 'react-router-dom';
import { getSearchPlaceInitiate } from '../redux/action/searchPlaceAction'; 
import FlashBottomNavigation from './FlashBottomNavigation';
import AccordionInMobile from './AccordionInMobile';
import MobileAccordainOne from './MobileAccordainOne'; 
import AccordainDatesInSearchComponent from './AccordainDatesInSearchComponent'; 


const SearchInMobile = React.memo(({  setSelectedItem}) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    country: "",
    MenuCountryName: "", 
    startDate: "",
    endDate: "",
    month: false, 
    childMonth: false,
    date: false,
    flexible: false,
    dates: true,
    weekParam: false,
    when: true,
    who: true,
    whenDates: false,
    currentMonthIndex:null
  });
  const months = [
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
  ];

  useEffect(() => {
    console.log('startDate changed:', data.startDate);
    console.log('endDate changed:', data.endDate);
  }, []);


  const onBackClick = () => {
    setSelectedItem(false)
  }

  const handleAccordainOneChange = () => {
    setData(prevState => ({
      ...prevState,
      expandOne: !prevState.expandOne,

    }));
  };

  const handleSelectDropdowm = () => {
    setData(prevState => ({
      ...prevState,
      countryMenu: !prevState.countryMenu,
      accordain1: !prevState.accordain1,
      // when: true,
      // who: true,
    }));
  };

  const handleSearch = useCallback(() => {
    //search one
    const nameCountry = data.country ? data.country.label : "";
    const startDate = data.startDate ? data.startDate : "";
    const endDate = data.endDate ? data.endDate : ";"
    const countOne = data.guestCount ? data.guestCount : "";
    const paramDataOne = [nameCountry, startDate, endDate, countOne]
    console.log("paramDataOne--->", paramDataOne)

     //search two
    const nameRegion = data.MenuCountryName ? data.MenuCountryName : "";
     const monthStart =   months[0]
    const monthEnd = data.currentMonthIndex ? months[data.currentMonthIndex] : ";"
    console.log("monthEnd",monthEnd)
    const countTwo = data.guestCount ? data.guestCount : "";
    const paramDataTwo = [nameRegion, monthStart, monthEnd, countTwo]
    console.log("paramDataTwo--->", paramDataTwo)

    //search three
    const nameCountryy = data.country ? data.country.label : "";
    const startDatee = data.startDate ? data.startDate : "";
    const endDatee = data.endDate ? data.endDate : ";"
    const countOnee = data.guestCount ? data.guestCount : "";
    const paramDataThree = [nameCountryy, startDatee, endDatee, countOnee]
    console.log("paramDataThree--->", paramDataThree)

    if (paramDataTwo[0] === "Thailand") {
      navigate(`/search?paramData=${paramDataTwo.join('_')}`)
    }
    else if(paramDataThree[0] === "India") 
    {
      navigate(`/search?paramData=${paramDataThree.join('_')}`);
    }
    else {
      navigate(`/search?paramData=${paramDataOne.join('_')}`);
    }
    getSearchPlaceInitiate()
  },[data])

 


  const handleWeekParamInParent = (param) => {
    console.log("received param", param)
    setData(prevState => ({ ...prevState,  weekParam: param }))
    console.log("weekParam", data.weekParam)
  }
  const handleCountryName = (name) => {
    setData(prevState => ({
      ...prevState,  country: name, }))
  }
 const handleMenuName = (name) => {
  setData(prevState => ({
    ...prevState,  MenuCountryName: name, }))
 }
 const handleGuestCountParent =(data) => {
  setData(prevState => ({
    ...prevState,  guestCount: data, }))
 }
 const handleDatesChageInParent = (start , end) => {
  setData(prevState => ({ ...prevState,  startDate: start ,endDate:end}))
 }
 const onMonthChange = (newIndex) => {
  setData(prevState => ({ ...prevState,  currentMonthIndex: newIndex}))
  console.log("data in onMonthChange ",data)
  console.log("data in onMonthChange ",data.currentMonthIndex)

 }


  return (
    <>
      <Imports.Grid container justifyContent='center' xs={12} item sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Imports.Grid container sx={{ justifyContent: 'center', margin: 'auto', padding: "10px" }}  >
          <Imports.Grid container alignItems="center" sx={{}}>
            <Imports.Grid item>
              <Imports.IconButton onClick={onBackClick}>
                <Close fontSize="medium" sx={{ color: 'black', borderRadius: '50%', border: '1px solid lightgray', padding: '2px' }}  />
              </Imports.IconButton>
            </Imports.Grid>
            <Imports.Grid item sx={{ display: 'flex', textAlign: 'center', margin: 'auto' }} justifyContent='center' gap={2}>
              <Imports.Typography variant='h3' sx={{ color: 'black', textDecoration: 'underline' }}>Stays</Imports.Typography>
              <Imports.Typography variant='h3' sx={{ color: 'lightgray' }}>Experiences</Imports.Typography>
            </Imports.Grid>
          </Imports.Grid>
          <MobileAccordainOne handleMenuName={handleMenuName} handleCountryName= {handleCountryName} handleAccordainOneChange={handleAccordainOneChange} handleSelectDropdowm={handleSelectDropdowm}/>
          <AccordainDatesInSearchComponent months={months}onMonthChange={onMonthChange}handleDatesChageInParent={handleDatesChageInParent}handleWeekParamInParent={handleWeekParamInParent} setSelectedItem={setSelectedItem}/>
          <> 
            <Imports.Grid item mt={2} xs={12}>             
              <AccordionInMobile setSelectedItem={setSelectedItem} handleGuestCountParent={handleGuestCountParent}/>
            </Imports.Grid>
          </>
        </Imports.Grid>
        <FlashBottomNavigation handleSearch={handleSearch} />
      </Imports.Grid>

    </>

  )
})

export default SearchInMobile
