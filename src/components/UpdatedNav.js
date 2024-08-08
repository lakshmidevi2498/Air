
import React, { useState, useEffect ,useCallback,useMemo} from 'react';
import theme from '../utilities/Theme';
import Imports from '../commons/AllImports';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/Firebase';
import { signOut } from '@firebase/auth';
import { getSearchPlaceInitiate } from '../redux/action/searchPlaceAction';
import SmallNavbarComponent from './Navbarcomponents/SmallNavbarComponent';
import UserComponent from './Navbarcomponents/UserComponent';
import NavAnyComponent from './Navbarcomponents/NavAnyComponent';
import MainNavbarComponent from './Navbarcomponents/MainNavbarComponent';

const Navbar = React.memo(({ name, start, end, ghost, setSelectedItem }) => {
console.log("name, start, end, ghost,",name, start, end, ghost,)
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState('')
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const [state ,setState] = useState({
    anchorEl:null,
    date:null,
    startDate:start ? start : "",
    endDate : end ? end : "",
    checkIn:false,
    guestAnchorEl:null,
    selectedCountry:name ? name : null,
    guestCount:ghost ? ghost : "",  
    monthStart:"",
    monthEnd:"", 
    weekParam:false,
    dateDate:false,
    anchorElCountry:null,
    guestAnchorEl:null
  }) 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) 
        { setIsScrolled(true); }
       else {  setIsScrolled(false);  }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    auth.onAuthStateChanged(person => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleMobileSearch = useCallback(() => {
    setSelectedItem(true);
  },[])
  const handleClose = useCallback(() => { 
    setState(prevState => ({  ...prevState,anchorEl:null }))
  },[])
  const handleNavigate = useCallback(() => { 
    setState(prevState => ({  ...prevState, anchorEl:null }))
    navigate('/signup')
  },[])
  const handleLogout = useCallback(() => {
    signOut(auth)
    setUser(null) 
    setState(prevState => ({  ...prevState, anchorEl:null }))
    localStorage.clear();
    navigate('/')
  },[])
  const handleSignUp = useCallback((event) => { 
    setState(prevState => ({  ...prevState, anchorEl:event.currentTarget }))
  },[])
  const handleHome = () => {
    navigate('/')
  }
  const handleProfile = () => {
    navigate('/profile')
  }
  const handleGuest = useCallback((event) => {
    setState(prevState => ({  ...prevState, guestAnchorEl:event.currentTarget,guest: true, })) 
    console.log("guest in handleSearchDestination", state.guest)
    console.log("guestAnchorEl in handleSearchDestination", state.guestAnchorEl)
  },[]);
  const handleMonths = useCallback(() => {

   setState(prevState => ({  ...prevState, months: true, monthsUi:true,flexible:false}))
    console.log("months", state.months)
  },[])
  const handleFlexible = useCallback(() => {
    setState(prevState => ({  ...prevState,  monthsUi:false,flexible:true}))  
  },[])
  const handleDatesChangeParent = useCallback((start, end) => {
    console.log("start  end", start, end)
    setState(prevState => ({  ...prevState,  startDate:start,endDate:end})) 
  },[]);
  const handleSendMonthsToParent = useCallback((monthNamesString, selectedMonth) => {
    setState(prevState => ({  ...prevState,  monthStart:monthNamesString,monthEnd:selectedMonth})) 
  },[])
  const handleMonthChangeParent = useCallback((month) => {
    setState(prevState => ({ ...prevState , monthEnd:month})) 
    localStorage.setItem('selectedMonth', state.monthEnd);
    console.log('Selected month:', state.monthEnd);
  },[]);
  const handelVisible = useCallback(() => {
    setState(prevState => ({ ...prevState , visible:false})) 
  },[])
  const handleWeekParamsInParent = useCallback((param) => {
    console.log("received param", param)
    setState(prevState => ({ ...prevState,weekParam:param})) 
  },[])
  const handleSendCountryparent = useCallback((data) => {
    const dataa = data
    setState(prevState => ({ ...prevState,selectedCountry:data})) 
    console.log("data....", data)
    console.log("dataaa....", dataa)
  },[])
  const handleMenuRegionDataInParent = useCallback((data) => {
    setState(prevState => ({ ...prevState,region:data})) 
    console.log("data", data)
  },[])
  const handleGuestCountInParent = useCallback((value) => {
    setState(prevState => ({ ...prevState,guestCount:value}))
    console.log("guest count in handleGuestCountInParent",state.guestCount);
  },[])
  const setRegion = useCallback((value) => {
    setState(prevState => ({  ...prevState,region:value  }))
  },[])
  const setSearch = useCallback((value) => {
    setState(prevState => ({  ...prevState,search:value }))
  },[])
  const setCountryOpen = useCallback((value) => {
    setState(prevState => ({ ...prevState,countryOpen:value,  }
  ))
  console.log("setCountryOpen",state.countryOpen)
  },[])
const memoizedHandlers = useMemo(() => ({  setRegion, handleMonths, handleWeekParamsInParent, handleSendMonthsToParent,  setSearch, handleFlexible,  handleGuest,  handleMobileSearch, setCountryOpen,  handelVisible, }), []);
  return (
    <>
      <Imports.Grid container sx={{ justifyContent: "center", borderBottom: "1px solid lightgray", top: '0', position: 'sticky', zIndex: 10, }} >
        <Imports.Grid item sx={{padding: { xs: '10px', md: '20px' }, backgroundColor: theme.palette.one.main, }} xs={12}>
          <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: { xs: '10px', md: '50px', lg: "60px" }, height: '50%', display: { xs: 'none', sm: 'flex', md: 'flex' }, }}>
            <Imports.Grid item>
              <Imports.ImageListItem sx={{ width: '100px', height: '50px', }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" onClick={handleHome} /></Imports.ImageListItem>
              <Imports.Grid display='flex'>  </Imports.Grid>
            </Imports.Grid>
            {!isScrolled ? (
              <Imports.Grid item sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: { md: '100px', lg: '170px' }, display: { xs: 'none', sm: 'block', md: 'block' }, }}>
                <Imports.Grid item sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <Imports.Typography variant='h5' fontWeight='bold' color='black'>Stays</Imports.Typography>
                  <Imports.Typography variant='h5'>Experiences</Imports.Typography>
                </Imports.Grid>
              </Imports.Grid>) : (
              <NavAnyComponent  state={state}/>)}
            <UserComponent user={user} state ={state} handleClose={handleClose} handleSignUp={handleSignUp} handleNavigate={handleNavigate} handleProfile={handleProfile} handleLogout={handleLogout} />
          </Imports.Grid>
        </Imports.Grid>
        {!isScrolled && (
          <>
            <Imports.Grid container justifyContent='center' direction='row' alignItems='center' sx={{ marginTop: { sm: '10px', md: '10px' }, paddingBottom: "10px" }}>
                <MainNavbarComponent state={state} {...memoizedHandlers} name={name}  start={start} end={end} ghost={ghost}handleMenuRegionDataInParent={handleMenuRegionDataInParent}handleSendCountryparent={handleSendCountryparent} handleDatesChangeParent={handleDatesChangeParent}handleMonthChangeParent={handleMonthChangeParent} handleGuestCountInParent={handleGuestCountInParent} />
            </Imports.Grid>
          </>
        )}
        <SmallNavbarComponent   name={name} start={start} end={end} ghost={ghost}  guestCount={state.guestCount} handleMobileSearch={handleMobileSearch} />
      </Imports.Grid>
    </>
  );
})
export default Navbar;