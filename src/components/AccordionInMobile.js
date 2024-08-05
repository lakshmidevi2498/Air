import React, { useState, useEffect, useCallback } from 'react'
import Imports from '../commons/AllImports'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GuestDataComponent from './GuestDataComponent';
const AccordionInMobile = React.memo(({setSelectedItem ,handleGuestCountParent}) => {
  const guestData = [
    { text1: "Adults", text2: "Ages 13 or above", guestCount: 0 },
    { text1: "Children", text2: "Ages 2–12", guestCount: 0 },
    { text1: "Infants", text2: "Under 2", guestCount: 0 },
    { text1: "Pets", text2: "Bring A service Animal? ", guestCount: 0 }
  ]
  const [data, setData] = useState({
    accordain3: true,
    expandThree: false,
    guestCount: "",
    month: false,
    guestAnchorEl:null
  });
  const handleAccordainThreeChange = useCallback((event, isExpanded) => {
    console.log('Accordion isExpanded:', isExpanded);
    if(guestRef.current){
    setData(prevState => ({  ...prevState,  expandThree: isExpanded,  guestAnchorEl:guestRef.current,  }));
      }
  },[]);
  const handelGuestValueChild = useCallback((value) => {
    setData(prevState => ({ ...prevState , guest:value}))
  },[])
  const handleGuestCountInChild = useCallback((data) => {
    setData(prevState => ({ ...prevState , guestCount:data}))
    console.log("guestCount",data.guestCount);
    handleGuestCountParent(data)
  },[])
    const guestRef = React.useRef(null)
  return (
    <>
      <Imports.Accordion expanded={data.expandThree}  ref={guestRef}onChange={handleAccordainThreeChange}>
                <Imports.AccordionSummary >
                  <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} xs={12}>
                    <Imports.Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start', fontWeight: 'medium' }}>
                      <Imports.Typography variant='h2' sx={{ color: 'lightgray', fontWeight: 'medium' }}> who  </Imports.Typography>
                    </Imports.Grid>
                    <Imports.Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'medium' }}>
                      <Imports.Typography variant='h6' sx={{ fontWeight: "bold" }}>
                        {data.guestCount ? `${data.guestCount} guests` : "Add guest"}
                      </Imports.Typography>
                    </Imports.Grid>
                  </Imports.Grid>
                </Imports.AccordionSummary>
                <Imports.AccordionDetails >
                  <GuestDataComponent handleGuestCountInChild={handleGuestCountInChild} guestAnchorEl={data.guestAnchorEl} handelGuestValue={handelGuestValueChild} />
                </Imports.AccordionDetails>
              </Imports.Accordion>
    </>
  )
})

export default AccordionInMobile