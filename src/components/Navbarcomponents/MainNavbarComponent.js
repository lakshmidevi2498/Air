import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Imports from '../../commons/AllImports';
import CountryDropdown from '../component1';
import { allCountries } from 'country-region-data';
import CircularProgressSlider from '../component';
import DateComponent from '../DateComponent';
import FlexibleComponent from '../FlexibleComponent';
import VisibleComponent from './VisibleComponent';
import SmallNavbarComponent from './SmallNavbarComponent';
import GuestDataComponent from '../GuestDataComponent';
import { useNavigate } from 'react-router-dom';
import { getSearchPlaceInitiate } from '../../redux/action/searchPlaceAction';


const MainNavbarComponent = React.memo(({  start, end, ghost,state, setSearch, handleSendCountryparent, name, handleWeekParamsInParent, handleSendMonthsToParent
  , handleDatesChangeParent, handleMonthChangeParent, handleGuestCountInParent, handleMenuRegionDataInParent,

}) => {
  const [clickedBox, setClickedBox] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [anchorE1, setAnchorE1] = useState(null)
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [data, setData] = useState({
    visible: false,
    countryOpen: false,
    checkIn: false,
    guest: false,
    dateDate: false,
    search: false,
    monthsUi: false,
    flexible: false,
    months: false,
    focus: false,
    dateAnchorE1: null,
    dateShow: false,
    guestCount:ghost ? ghost : "",
    region: "",
    selectedCountry:name ? name : null,
    endDate : end ? end : "",
    startDate:start ? start : "",
    monthStart: "",
    monthEnd: "",
  })
  const navigate = useNavigate()

  const getBoxStyles = (index) => {
    if (clickedBox === index) {
      return { backgroundColor: 'white', borderRadius: '40px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' };
    } else if (clickedBox !== null) {
      return { backgroundColor: 'lightgray', borderRadius: '40px' };
    } else if (hoveredBox === index) {
      return { backgroundColor: 'lightgray', borderRadius: '40px', border: 'none' };
    } else {
      return { backgroundColor: 'white', borderRadius: '40px' };
    }
  };
  const handleClick = (index) => {
    setClickedBox(index);
    setHoveredBox(null);
    setSearch(true)
  };
  const handleSearch = useCallback((event) => {
    setData(prevState => ({ ...prevState, visible: true, countryOpen: true, focus: true, }));
    setAnchorE1(event.currentTarget);
    console.log("focus in handleSearch", data.focus);
    console.log("visible in handleSearch", data.visible);
    console.log("countryOpen in handleSearch", data.countryOpen);
    console.log("data in handleSearch", data);
  }, []);
  useEffect(() => {
    console.log("data in useEffect", data);
  }, [data])

  const handleSendCountryChild = useCallback((data) => {
    setData(prevState => ({ ...prevState, selectedCountry: data}))
    console.log("selectedCountry in handleSendCountryChild", data.selectedCountry)
    handleSendCountryparent(data)
  }, [])
  const handleCheckIn = useCallback(() => {
    if (buttonRef.current) {
      setData(prevState => ({ ...prevState, dateAnchorE1: buttonRef.current, checkIn: !prevState.checkIn, monthsUi: false, flexible: false, dateDate: true, }));
    }
  }, []);
  const handleDate = useCallback(() => {
    setData(prevState => ({ ...prevState, dateShow: true, }))
  }, [])
  const handleCloseCalender = useCallback(() => {
    setData(prevState => ({ ...prevState, checkIn: false, }))
    setSelectionRange({ startDate: null, endDate: null, key: 'selection' })
  }, [])
  const handleWeekParamsInChid = useCallback((data) => {
    setData(prevState => ({ ...prevState, weekParam: data }))
    handleWeekParamsInParent(data)
  }, [])
  const handleGuest = useCallback((event) => {
    if (guestRef.current) {
      setData(prevState => ({ ...prevState, guestAnchorEl: guestRef.current, guest: true, search: true, }));
    }
    console.log("guest in handleSearchDestination", state.guest);
    console.log("guestAnchorEl in handleSearchDestination", state.guestAnchorEl);
  }, []);
  const handleMonths = useCallback(() => {
    setData(prevState => ({ ...prevState, months: true, monthsUi: true, flexible: false }))
    console.log("months", state.months)
  })
  const handleFlexible = useCallback(() => {
    setData(prevState => ({ ...prevState, monthsUi: false, flexible: true }))
  }, [])
  const SearchIconWithText = useCallback(({ text, onClick }) => {
    return (
      <Imports.Grid container alignItems="center" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={onClick}  >
        <Imports.Grid item sx={{ backgroundColor: '#f73452', color: 'white', borderTopRightRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
          <Imports.SearchIcon fontSize='small' />
          <Imports.Typography variant="h6" sx={{ color: 'white', }}>{text}</Imports.Typography>
        </Imports.Grid>
      </Imports.Grid>
    );
  }, []);
  const handleDatesChangeChild = useCallback((start, end) => {
    handleDatesChangeParent(start, end)
    setData(prevState => ({ ...prevState, startDate: start }))
    setData(prevState => ({ ...prevState, endDate: end }))
    console.log("starta and end dates", data.startDate, data.endDate)
  }, []);
  const handleCloseGuest = () => {
    setData(prevState => ({ ...prevState, guest: false }))
  }
  const handleMonthChangeChild = useCallback((month) => {
    handleMonthChangeParent(month)
  }, []);
  const handelVisible = useCallback(() => {
    setData(prevState => ({ ...prevState, visible: false }))
  }, [])
  const handleSendMonthsToChild = useCallback((monthNamesString, selectedMonth) => {
    console.log("monthNamesString", monthNamesString)
    setData(prevState => ({ ...prevState, monthStart: monthNamesString }))
    setData(prevState => ({ ...prevState, monthEnd: selectedMonth }))
    handleSendMonthsToParent(monthNamesString, selectedMonth)
    console.log("monthstart,monthend", data.monthStart, data.monthEnd);
  }, [])
  const handleGuestCountInChild = useCallback((data) => {
    handleGuestCountInParent(data)
    setData(prevState => ({ ...prevState, guestCount: data }))
    console.log("guestCount in handleGuestCountInChild", data.guestCount);
  }, [data.guestCount])

  const handelGuestValueChild = useCallback((value) => {
    setData(prevState => ({ ...prevState, guest: value }))
  }, [])
  const handleFocusChangeInChild = useCallback((value) => {
    setData(prevState => ({ ...prevState, focus: value }))
  }, [])
  const handleMenuRegionDataInChild = useCallback((data) => {
    setData(prevState => ({ ...prevState, region: data }))
    handleMenuRegionDataInParent(data)
  }, [])
  const handleCountryOpen = useCallback((value) => {
    setData(prevState => ({ ...prevState, countryOpen: value }))
  }, [])
  const handleVisibleInDropdown = (value) => {
    setData(prevState => ({ ...prevState, countryOpen: value }))
  }

  const buttonRef = React.useRef(null);
  const guestRef = React.useRef(null);
  const navigateRef = React.useRef(null)
  const handleSearchNaviagte = useCallback(() => {
    //search one
    const countryData = data.selectedCountry ? data.selectedCountry.label : '';

    const dateStart = data.startDate ? data.startDate : "";
    const dateEnd = data.endDate ? data.endDate : "";
    const countOne = data.guestCount ? data.guestCount : "";
    const paramDataOne = [countryData, dateStart, dateEnd, countOne];
    console.log("paramDataOne---->", paramDataOne);

    //search two
    const regionData = data.region ? data.region : "";
    console.log("regionData in handleSearchNaviagte", data.region, regionData)
    const monthFirst = data.monthStart ? data.monthStart : "";
    console.log("monthFirst", data.monthStart, monthFirst);
    const monthLast = data.monthEnd ? data.monthEnd : "";
    console.log("monthLast in handleSearchNaviagte", data.monthEnd, monthLast)
    const countTwo = data.guestCount ? data.guestCount : "";
    console.log("countTwo in handleSearchNaviagte", data.guestCount, countTwo)
    const paramDataTwo = [regionData, monthFirst, monthLast, countTwo]
    console.log("paramDataTwo----->", paramDataTwo);

    //search third
    const countrydata = data.selectedCountry ? data.selectedCountry : "";
    const dateStartThree = data.startDate ? data.startDate : "";
    const dateEndThree = data.endDate ? data.endDate : "";
    // const week = weekParam ? weekParam : "";
    const countThree = data.guestCount ? data.guestCount : "";
    const paramDataThree = [countrydata, dateStartThree, dateEndThree, countThree]
    console.log(" paramDtaThree", paramDataThree)

    if (paramDataTwo[0] === "Thailand") {
      navigate(`/search?paramData=${paramDataTwo.join('_')}`)
    }
    else if (paramDataThree[0] === "India") {
      navigate(`/search?paramData=${paramDataThree.join('_')}`);
    }
    else {
      navigate(`/search?paramData=${paramDataOne.join('_')}`);
    }
    getSearchPlaceInitiate()
  }, [data])
  return (
    <>
      <Imports.Grid item sm={11} md={10.5} lg={8} xl={7} sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' }, textAlign: 'center', borderRadius: '50px', border: '2px solid lightgray' }}>
        <Imports.Grid item sx={{ ...getBoxStyles(0), height: '65px', borderRadius: '40px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'start', }} xs={12} onMouseEnter={() => setHoveredBox(0)} onMouseLeave={() => setHoveredBox(null)} >
          <Imports.Grid item xs={4} sm={3.5} md={4} height="100%" sx={getBoxStyles(1)} onClick={(event) => { handleSearch(event); handleClick(1); }} onMouseEnter={() => setHoveredBox(1)} onMouseLeave={() => setHoveredBox(null)} >
            <Imports.Grid display="flex" height="100%" flexDirection="column" alignItems="flex-start" sx={{ padding: { xs: '25px', md: "24px", lg: "24px" }, textAlign: 'start', borderRadius: '40px', }} >
              <Imports.Typography variant='body1' sx={{ color: '#000000', textTransform: 'none', fontSize: '11px' }} >Where</Imports.Typography>
              {data.visible ? (<Imports.Typography ></Imports.Typography>) : (<Imports.Typography sx={{ }}>{data.selectedCountry ? (data.selectedCountry) : data.region ? (data.region) : ("Search destination")}</Imports.Typography>)}
              {data.focus ? (
                <CountryDropdown name={name} handleSendCountry={handleSendCountryChild} handleVisibleInDropdown={handleVisibleInDropdown}/>
              ) : data.visible ? ("") : ""} </Imports.Grid>
          </Imports.Grid>
          <Imports.Divider orientation="vertical" variant="middle" flexItem sx={{ position: 'absolute', left: { xs: '615px', md: "600", lg: "560px", xl: "610px" }, transform: 'translateY(55%)', borderWidth: '1px', height: '25px', display: { xs: "none", lg: 'block' } }} />
          {data.monthsUi ? (
            <Imports.Grid item xs={4} sx={getBoxStyles(2)} onClick={(event) => { handleCheckIn(event); handleClick(2) }} onMouseEnter={() => setHoveredBox(2)} onMouseLeave={() => setHoveredBox(null)} >
              <Imports.Grid sx={{ padding: '15px', borderRadius: '40px' }}>
                <Imports.Grid item sx={{ textAlign: 'start', paddingRight: '50px', paddingLeft: '10px', }} >
                  <Imports.Typography variant='body1' sx={{ color: '#000000', textTransform: 'none', fontSize: '11px' }}>When</Imports.Typography>
                  <Imports.Typography variant='caption' sx={{ color: '#000000', textTransform: 'none', fontSize: '12px', fontWeight: 'bold' }}> {data.monthStart} - {data.monthEnd}</Imports.Typography>
                </Imports.Grid>
              </Imports.Grid>
            </Imports.Grid>) : data.flexible ? (
              <Imports.Grid item xs={4} sx={getBoxStyles(2)} onClick={(event) => { handleCheckIn(event); handleClick(2) }} onMouseEnter={() => setHoveredBox(2)} onMouseLeave={() => setHoveredBox(null)} >
                <Imports.Grid sx={{ padding: '18px', borderRadius: '40px', }}>
                  <Imports.Grid item sx={{ textAlign: 'start', paddingRight: '50px', paddingLeft: '10px', }} >
                    <Imports.Typography variant='body1' sx={{ color: '#000000', textTransform: 'none', fontSize: '11px' }}>When</Imports.Typography>
                    <Imports.Typography variant='caption' sx={{ color: '#000000', textTransform: 'none', fontSize: '12px', fontWeight: 'bold' }}> Any {data.weekParam}</Imports.Typography>
                  </Imports.Grid>
                </Imports.Grid>
              </Imports.Grid>
            ) :
            (
              <Imports.Grid item xs={4} sm={5} md={5} lg={4} sx={{ justifyContent: 'center', display: 'flex', maxHeight: '80px' }} >
                <Imports.Grid item xs={6} ref={buttonRef} sx={getBoxStyles(2)} onClick={(event) => { handleCheckIn(event); handleClick(2) }} onMouseEnter={() => setHoveredBox(2)} onMouseLeave={() => setHoveredBox(null)}>
                  <Imports.Grid sx={{ padding: { xs: "16px", md: '14px' }, borderRadius: '40px', alignItems: 'center', }}>
                    <Imports.Grid item sx={{ textAlign: 'start', paddingRight: '50px', paddingLeft: '10px', }} >
                      <Imports.Typography variant='body1' sx={{ color: '#000000', textTransform: 'none', fontSize: '11px' }}>Check in</Imports.Typography>
                      <Imports.Typography type='date' variant='caption' sx={{ color: '#000000', textTransform: 'none', fontSize: '10px', fontWeight: 'bold' }}> {data.startDate ? `${data.startDate}` : "Add dates"}</Imports.Typography>
                    </Imports.Grid>
                  </Imports.Grid>
                </Imports.Grid>
                <Imports.Divider orientation="vertical" variant="middle" flexItem sx={{ position: 'absolute', transform: 'translateY(45%)', borderWidth: '1px', height: '25px', display: { xs: "none", lg: 'block' } }} />
                <Imports.Grid item xs={6} sx={getBoxStyles(3)} onClick={(event) => { handleCheckIn(event); handleClick(3) }} onMouseEnter={() => setHoveredBox(3)} onMouseLeave={() => setHoveredBox(null)}>
                  <Imports.Grid sx={{ padding: { xs: "16px", md: '14px' }, borderRadius: '40px', alignItems: 'center', }}>
                    <Imports.Grid item sx={{ textAlign: 'start', paddingRight: '50px', paddingLeft: '10px', }} >
                      <Imports.Typography variant='body1' sx={{ color: '#000000', textTransform: 'none', fontSize: '10.8px' }}>Check out</Imports.Typography>
                      <Imports.Typography variant='caption' type='date' sx={{ color: '#000000', textTransform: 'none', fontSize: '10px', fontWeight: 'bold' }}> {data.endDate ? `${data.endDate}` : "Add dates"}</Imports.Typography>
                    </Imports.Grid>
                  </Imports.Grid>
                </Imports.Grid>
              </Imports.Grid>
            )}
          <Imports.Divider orientation="vertical" variant="middle" flexItem sx={{ position: 'absolute', right: { md: "615px", lg: "560px", xl: "612px" }, transform: 'translateY(48%)', borderWidth: '1px', height: '25px', display: { xs: "none", lg: 'block' } }} />
          {data.checkIn && (
            <Imports.Menu  id="simple-checkin-menu"  anchorEl={data.dateAnchorE1}  keepMounted  open={Boolean(data.dateAnchorE1)}  onClose={handleCloseCalender}
              PaperProps={{ sx: { width: '800px', height: 'auto', padding: '10px', borderRadius: '20px', marginTop: { xs: '100px' }, position: 'absolute', zIndex: '10', marginLeft: { sm: "10px", md: "100px", lg: '340px' } }, }}
              anchorOrigin={{ vertical: 'top', horizontal: 'left', }}
              transformOrigin={{ vertical: 'top', horizontal: 'right', }} >
              <Imports.IconButton className="close-icon-button" onClick={handleCloseCalender} justifyContent='right'>
                <Imports.Close fontSize="small" />
              </Imports.IconButton>
              {data.flexible ? (
                <FlexibleComponent handleDate={handleDate} handleMonths={handleMonths} handleWeekParams={handleWeekParamsInChid} weekParam={data.weekParam} />
              ) : data.months ? (
                <Imports.Grid>
                  <CircularProgressSlider handleDate={handleDate} handleFlexible={handleFlexible} handleSendMonthsToParent={handleSendMonthsToChild}
                    handleMonthChange={handleMonthChangeChild} />
                </Imports.Grid>
              ) : data.dateDate ? (<Imports.Grid>
                <DateComponent handleMonths={handleMonths} handleFlexible={handleFlexible} sendDatesToParent={handleDatesChangeChild} />
              </Imports.Grid>) : ("")}
            </Imports.Menu>
          )}
          <Imports.Grid item xs={4} sm={3.5} md={4} ref={guestRef} sx={getBoxStyles(4)} onClick={(event) => { handleGuest(event); handleClick(4) }} onMouseEnter={() => setHoveredBox(4)} onMouseLeave={() => setHoveredBox(null)}>
            <Imports.Grid item display='flex' alignItems='center' width='100%' justifyContent={'space-between'} sx={{ padding: { xs: '9px', sm: "10px", md: "8px", lg: "10px" }, borderRadius: '40px' }}>
              <Imports.Grid item textAlign='start'>
                <Imports.Typography variant='body1' sx={{ color: '#000000', textTransform: 'none', fontSize: '11px' }}>Who</Imports.Typography>
                <Imports.Typography variant='caption' sx={{ color: '#000000', textTransform: 'none', fontSize: '10px', fontWeight: 'bold' }}>{data.guestCount ? `${data.guestCount}  guests` : "Add guests"}</Imports.Typography>
              </Imports.Grid>
              {data.search ?
                (<Imports.Grid item sx={{ textAlign: 'end', padding: { xs: '6px', md: "1px", }, paddingY: { md: "10px", lg: "7px" }, paddingLeft: { sm: '40px', md: '130px', lg: '50px', xl: '100px' }, }}>
                  <SearchIconWithText text="Search" ref={navigateRef} onClick={handleSearchNaviagte} />
                </Imports.Grid>)
                :
                (<Imports.Grid item sx={{ padding: { xs: '9px', sm: "1px", md: "2px", lg: "0px" }, textAlign: 'end', paddingRight: '0px', paddingLeft: { sm: '80px', md: '130px', lg: '50px', xl: '130px' } }}>
                  <Imports.SearchIcon fontSize='large' sx={{ backgroundColor: '#f73452', color: 'white', borderRadius: '50px', padding: '10px', marginTop: '5px' }} onClick={handleSearchNaviagte} />
                </Imports.Grid>)}
            </Imports.Grid>
          </Imports.Grid>
          {data.guest && (
            <Imports.Menu  id="simple-menu"  anchorEl={data.guestAnchorEl}  open={Boolean(data.guestAnchorEl)}  onClose={handleCloseGuest}
              PaperProps={{ sx: { width: '370px', padding: '10px', borderRadius: '20px', marginTop: { xs: '100px' }, position: 'absolute', zIndex: '10', marginLeft: { sm: "200px", md: "300px", xl: '300px' } }, }}
              anchorOrigin={{ vertical: 'top', horizontal: 'left', }}
              transformOrigin={{ vertical: 'top', horizontal: 'right', }}  >
              <GuestDataComponent handleGuestCountInChild={handleGuestCountInChild}
                handelGuestValue={handelGuestValueChild} />
            </Imports.Menu>
          )}
        </Imports.Grid>
        {data.visible && (
          <Imports.Grid item >
            <VisibleComponent data={data} handelVisible={handelVisible} handleFocusChange={handleFocusChangeInChild} menuRegionData={handleMenuRegionDataInChild} handleCountryOpen={handleCountryOpen} anchorE1={anchorE1} />
          </Imports.Grid>
        )}
      </Imports.Grid>
    </>
  )
})
export default MainNavbarComponent;