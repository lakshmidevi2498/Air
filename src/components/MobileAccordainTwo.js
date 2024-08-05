// import React, { useState, useEffect } from 'react'
// import Imports from '../commons/AllImports'
// import { Close } from '@mui/icons-material'
// import { InputAdornment } from '@mui/material'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import DateComponent from './DateComponent';
// import FlexibleComponent from './FlexibleComponent';
// import { BottomNavigation, BottomNavigationAction, Button } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import CountryDropdown from './component1';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import GuestDataComponent from './GuestDataComponent';
// import { useNavigate } from 'react-router-dom';
// import { getSearchPlaceInitiate } from '../redux/action/searchPlaceAction';
// import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
// import SmallDateComponent from './SmallDateComponent';
// import FlashBottomNavigation from './FlashBottomNavigation';
// import AccordionInMobile from './AccordionInMobile';
// import MobileAccordainOne from './MobileAccordainOne';

// const MobileAccordainTwo = ({handleDatesParent,setSelectedItem}) => {
   
//     const navigate = useNavigate();
//     const [data, setData] = useState({
//       expandOne: false,
//       countryMenu: false,
//       accordain1: true,
//       country: "",
//       MenuCountryName: "",
//       accordain2: true,
//       expandTwo: false,
//       accordain3: true,
//       expandThree: false,
//       guestCount: "",
//       startDate: "",
//       endDate: "",
//       month: false,
//       count: 3,
//       childMonth: false,
//       date: false,
//       // currentMonthIndex:null,
//       flexible: false,
//       dates: true,
//       weekParam: false,
//       when: true,
//       who: true,
//       whenDates: false
//     });
//     const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
//     // 
  
//     const [value, setValue] = useState(0);
//     const months = [
//       'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//     ];
  
//     useEffect(() => {
//       console.log('startDate changed:', data.startDate);
//       console.log('endDate changed:', data.endDate);
//     }, []);
  
  
 
//     const handleDecrement = () => {
//       setCurrentMonthIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 11));
//     };
  
//     const handleIncrement = () => {
//       setCurrentMonthIndex(prevIndex => (prevIndex < 11 ? prevIndex + 1 : 0));
//     }; 
//     const handleDateMenu = () => {
//       setData(prevState => ({
//         ...prevState,
//         whenDates: true,
//         dates: false,
//         // date:true,
//         // month:true,
//         flexible: true
//       }))
//     }
//     const handleMonths = () => {
//       setData(prevState => ({
//         ...prevState,
//         date: false,
//         month: true,
//         flexible: false
//       }))
//     }
  
//     const handleDate = () => {
//       setData(prevState => ({
//         ...prevState,
//         dates: false,
//         date: true,
//         month: false,
//         flexible: false,
//       }))
//     }
  
//     const handleFlexible = () => {
//       setData(prevState => ({
//         ...prevState,
//         date: false,
//         month: false,
//         flexible: true,
//       }))
//       console.log(" handleFlexible flexible", data.flexible);
//     }
  
//     const handleCloseDate = () => {
//       setData(prevState => ({
//         ...prevState,
//         whenDates: false,
//         date: false,
//         month: false,
//         flexible: false,
//         dates: true
//       }))
//     }
//     const handleDatesChangeInSmall = (start, end) => {
//       console.log("start ,end", start, end);
//       setData(prevState => ({  ...prevState, startDate: start,  endDate: end,  }))
//       handleDatesParent(start,end)
//     }
  
//     const handleWeekParams = (param) => {
//       console.log("received param", param)
//       setData(prevState => ({
//         ...prevState,
//         weekParam: param
//       }))
//       console.log("weekParam", data.weekParam)
//     }
//     const displayDateInfo = () => {
//       if (data.startDate && data.endDate) {
//         return `${data.startDate} - ${data.endDate}`;
//       } else if (data.currentMonthIndex !== null) {
//         return `1 ${months[0]} - 1 ${months[data.currentMonthIndex]}`;
//       } else if (data.weekParam) {
//         return `Any ${data.weekParam}`;
//       } else {
//         return "Add dates";
//       }
//     };
//     const buttonData = [
//         { label: 'Dates', onClick: handleDate },
//         { label: 'Months', onClick: handleMonths },
//         { label: 'Flexible', onClick: handleFlexible }
//       ];

//   return (
//     <>


// <Imports.Grid>

// <Imports.Grid item xs={12} sx={{ padding: "0px", borderRadius: "10px", cursor: "pointer" }} mt={2}>
//             {data.dates && (
//               <>

//                 <Imports.Grid item xs={12} onClick={handleDateMenu} sx={{ display: 'flex', justifyContent: 'space-between', padding: "15px", borderRadius: "5px", boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', border: "1px solid lightgray", }}>
//                   <Imports.Grid item xs={6} sx={{ fontWeight: 'medium' }}>
//                     <Imports.Typography variant='h2' sx={{ color: 'lightgray', fontWeight: 'medium' }}>
//                       when
//                     </Imports.Typography>
//                   </Imports.Grid>
//                   <Imports.Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'medium' }}>
//                     <Imports.Typography variant='h6' sx={{ fontWeight: "bold" }}>  {data.startDate ?
//                       `${data.startDate} - ${data.endDate}`
//                       : currentMonthIndex
//                         ? `1 ${months[0]} - 1 ${months[currentMonthIndex]}` : data.weekParam ? `Any ${data.weekParam}` : "Add dates"}
//                     </Imports.Typography>
//                   </Imports.Grid>
//                 </Imports.Grid>
//               </>
//             )}
//             {data.whenDates && <Imports.Grid item sx={{ paddingY: "10px", borderRadius: "10px", boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', border: "1px solid lightgray", borderRadius: "20px" }}>
//               {data.flexible ? (
//                 <>
//                   <Imports.Grid item paddingTop="50px">
//                     <FlexibleComponent handleDate={handleDate} handleMonths={handleMonths} handleWeekParams={handleWeekParams} weekParam={data.weekParam} />
//                   </Imports.Grid>
//                 </>
//               ) : data.month ? (
//                 <>
//                   <Imports.Grid xs={12} padding={'10px'} paddingTop="50px" >
//                     <Imports.Grid item sx={{ margin: "auto", textAlign: "center", }}>
//                       <Imports.ButtonGroup 
//       sx={{   borderRadius: '50px',  overflow: 'hidden',   border: '2px solid lightgray',   paddingX: '0px',  textAlign: 'left',  justifyContent: 'center',   backgroundColor: 'lightgray',  padding: { xs: '2px', sm: '5px' },  paddingX: '15px'  }}  >
//       {buttonData.map((button, index) => (
//         <Imports.Grid key={index} item sx={{ borderRadius: '40px', backgroundColor: index === 0 ? 'white' : 'transparent' }}>
//           <Imports.Button 
//             sx={{ 
//               textTransform: 'initial', 
//               border: 'none', 
//               '&:hover': { border: 'none' }, 
//               paddingX: '20px', 
//               '&:focus': { outline: 'none' }, 
//               color: 'black' 
//             }} 
//             onClick={button.onClick}
//           >
//             {button.label}
//           </Imports.Button>
//         </Imports.Grid>
//       ))}
//                    </Imports.ButtonGroup>
//                     </Imports.Grid>
//                     <Imports.Grid display={'flex'} justifyContent={'space-between'}>
//                       <Imports.Typography variant='h2' sx={{ marginY: "10px" }}> Month(s)  </Imports.Typography>
//                       <Imports.Grid display='flex' gap={2}>
//                         <Imports.Button sx={{
//                           border: '1px solid lightgray', borderRadius: '50%', display: 'flex', padding: '2px', width: '40px', color: 'lightgray',
//                           height: '40px', alignItems: 'center', justifyContent: 'center', minWidth: '0'
//                         }} fontSize='xxl'
//                           onClick={() => handleDecrement()}
//                         ><Imports.RemoveIcon /></Imports.Button>
//                         <Imports.Typography variant='h2' mt={1}>  {currentMonthIndex}
                          
//                         </Imports.Typography>
//                         <Imports.Button sx={{ border: '1px solid gray', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', padding: '2px', justifyContent: 'center', minWidth: 0, color: 'gray' }}
//                           onClick={() => handleIncrement()}
//                         ><Imports.AddIcon /></Imports.Button>
//                       </Imports.Grid>
//                     </Imports.Grid>
//                     <Imports.Divider sx={{ marginY: "30px" }}></Imports.Divider>
//                     <Imports.Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
//                       <Imports.Typography variant='h2'> Starting date</Imports.Typography>
//                       <Imports.Typography variant='h2'> {months[currentMonthIndex] == 0} {data.currentMonthIndex ? `${months[0]} 1` : " Aug 1"}
                        
//                       </Imports.Typography>
//                     </Imports.Grid>
//                     <Imports.Divider sx={{ marginY: "30px" }}></Imports.Divider>
//                     <Imports.Grid item sx={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
//                       <Imports.Typography variant='h2' > End Date</Imports.Typography>
//                       <Imports.Typography variant='h2' sx={{ textDecoration: "underline" }}> {currentMonthIndex ? `${months[currentMonthIndex]} 1` : " Aug 1"}
                       
//                       </Imports.Typography>
//                     </Imports.Grid>

                    
//                   </Imports.Grid>
//                 </>
//               ) : data.date ? (
//                 <>
//                   <Imports.Grid item  >
//                     <SmallDateComponent sendDatesToParent={handleDatesChangeInSmall} handleMonths={handleMonths} handleFlexible={handleFlexible} />
//                   </Imports.Grid>
//                 </>
//               ) : ("")}
//               {!data.dates && (<Imports.Grid sx={{ display: 'flex', justifyContent: 'space-between', paddingX: "20px" }} mt={2}>
//                 <Imports.Typography variant='h6' sx={{ fontSize: '13px', textDecoration: 'underline', color: 'black' }} mt={2}>Reset</Imports.Typography>
//                 <Imports.Button variant='contained' sx={{ color: 'white', backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }} onClick={handleCloseDate}>Next</Imports.Button>
//               </Imports.Grid>)}
//             </Imports.Grid>}
//           </Imports.Grid>
// </Imports.Grid>
//     </>
//   )
// }

// export default MobileAccordainTwo