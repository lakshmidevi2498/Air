import React, { useState } from 'react';
import Imports from '../commons/AllImports';
import FilterTwoComponent from './FilterTwoComponent';
import FilterThreeComponent from './FilterThreeComponent';
import FilterFourthComponent from './FilterFourthComponent';
import FilterFifthComponent from './FilterFifthComponent';
import FilterSixthComponent from './FilterSixthComponent';
import FilterSeventhComponent from './FilterSeventhComponent';
import FilterEightComponent from './FilterEightComponent';
import FilterComponentNine from './FilterComponentNine';

const Filter = () => {
    const [open, setOpen] = useState(false);

  const toggleDrawer = () =>{
    setOpen(true);
    
  };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
    <Imports.Grid
        item
        sx={{
            padding: { xs:'0px',sm: '5px', md: '10px' },
            borderRadius: {xs:"0",sm:'10px'},
            paddingX: {xs:'0px',sm:'15px'},
            border: {xs:"none",sm:'2px solid lightgray'},
            margin: {xs:'auto'},
            textAlign:{xs:'center'},
            alignItems:{xs:'center'},
            marginLeft:{xs:'10px',sm:'0px'},
            marginTop:{xs:'0px',sm:'none'}
            }} >
        <Imports.Grid item  display='flex' alignItems='center'justifyContent='space-between' textAlign='center'>
            <Imports.Grid item sx={{textAlign:{xs:'center',sm:'left'}}} alignItems='center'>
                <img
                    src="./assets/images/list.png"
                    style={{ width: '20px', height: '20px', cursor: 'pointer', marginRight:{xs:'0px',sm:'2px' } ,marginTop:'7px',}}
                    onClick={toggleDrawer}
                    alt="List Icon" className='filter-icon'
                />
            </Imports.Grid>
            <Imports.Grid item textAlign='right'>
                <Imports.Typography variant="h5" sx={{ marginLeft: { xs:'0',sm: '2px', md: '0px' } ,fontSize:{sm:'15px',md:'15px'}, display: { xs: 'none', sm: 'block' },}}>
                    Filter
                </Imports.Typography>
            </Imports.Grid>
        </Imports.Grid>
    </Imports.Grid>
                {open && (
                     <Imports.Grid container justifyContent='center' >
                         <Imports.Grid  item  >
                         <Imports.Dialog  maxWidth="md"  open={open}  onClose={handleClose}  paperprops={{  }}  sx={{marginTop:{xs:"70px",sm:"0px"},}}  > 
                         <Imports.Grid   item  >
                                 <Imports.DialogTitle sx={{  top:'0', position:"sticky",zIndex:30000 ,backgroundColor:"white",borderBottom:"1px solid lightgray"}}> 
                                     <Imports.Grid container item justifyContent='center'>
                                         <Imports.Grid container item alignItems="center" justifyContent='space-between' display='flex'>
                                            <Imports.Grid item>
                                                 <Imports.Typography variant='h1' sx={{ textAlign: 'left', fontWeight: 'bold' }}>  Filter </Imports.Typography>
                                              </Imports.Grid>
                                              <Imports.Grid item sx={{ textAlign: 'right' }}>
                                                  <Imports.IconButton className="close-icon-button" onClick={handleClose} > <Imports.Close fontSize="small" /> </Imports.IconButton>
                                             </Imports.Grid>
                                         </Imports.Grid>
                                     </Imports.Grid> 
                                </Imports.DialogTitle>

                                <Imports.Divider />
                                <Imports.DialogContent>
                                    <Imports.Grid container item borderBottom='1px solid lightgray'>
                                    <Imports.Grid item textAlign='left' >
                                        <Imports.Typography variant='body1' fontSize='20px'>  Type of places  </Imports.Typography>
                                        <Imports.Typography variant='caption'>   Search rooms, entire homes or any type of place  </Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid container item marginY='10px'>
                                           <Imports.Grid container item mb={2}>
                                                <Imports.ButtonGroup variant="outlined" fullWidth aria-label="Basic button group" sx={{ display: 'flex', justifyContent: 'space-evenly', }}>
                                                    <Imports.Button sx={{ padding:{ xs:'10px' ,sm:'18px',lg:'20px'} , border: '2px solid lightgray',borderRadius: '10px', borderBottom:'1px solid lightgray',color:'white',backgroundColor:'black','&:hover':{backgroundColor:'black',color:'white'},fontSize:{xs:'8px',sm:'12px',md:'15px'}}}>Any type</Imports.Button>
                                                    <Imports.Button sx={{ padding: { xs:'10px' ,lg:'20px'}, border: '2px solid lightgray',borderRadius: '10px', borderBottom:'1px solid lightgray',color:'black',fontSize:{xs:'8px',sm:'12px',md:'15px'}}}>Room</Imports.Button>
                                                    <Imports.Button sx={{ padding: { xs:'10px' ,lg:'20px'}, border: '2px solid lightgray',borderRadius: '10px', borderBottom:'1px solid lightgray',color:'black',fontSize:{xs:'8px',sm:'12px',md:'15px'}}}>entire home</Imports.Button>
                                                </Imports.ButtonGroup>
                                            </Imports.Grid>
                                        </Imports.Grid>
                                    </Imports.Grid>
                                     <FilterTwoComponent/>
                                     <Imports.Grid container item my={3} borderBottom= '2px solid lightgray'>
                                         <Imports.Typography variant='h5' fontSize='23px' my={3}>Rooms and beds</Imports.Typography>                                        
                                         <FilterThreeComponent/>
                                     </Imports.Grid>
                                     <Imports.Grid borderBottom='2px solid lightgray'>
                                 <FilterFourthComponent/>
                                 </Imports.Grid>
                                     <FilterFifthComponent/>
                                     <Imports.Grid container  borderBottom='1px solid lightgray'>
                                         <Imports.Grid item justifyContent='start' my={3} xs={12} sm={6}>
                                             <Imports.Grid container>
                                                 <Imports.Typography mb={3}>Top-tier stays</Imports.Typography>
                                             </Imports.Grid>
                                             <Imports.Grid item  >
                                             <Imports.Grid  padding='18px'  border='2px solid lightgray' borderRadius='10px'>
                                                 <Imports.LeakRemoveIcon fontSize='large' padding='10px' />
                                                 <Imports.Typography fontSize=''>Guest Favourite</Imports.Typography>
                                                 <Imports.Typography fontWeight='normal'fontSize='12px'>The most loved homes on Airbnb,according to guests</Imports.Typography>
                                             </Imports.Grid>
                                             </Imports.Grid>
                                         </Imports.Grid>
                                     </Imports.Grid>
                                     <Imports.Grid item mt={3}>
                                     <FilterSixthComponent/>
                               </Imports.Grid>                                 
                                     <Imports.Grid  item justifyContent='start' mt={1}>  <FilterSeventhComponent/> </Imports.Grid>
                              <Imports.Grid mt={1} >
                                 <FilterEightComponent/>
                                 </Imports.Grid>
                                 <Imports.Divider />
                              </Imports.DialogContent>
                                  <Imports.DialogActions sx={{bottom:0,position:"sticky",zIndex:30000,borderTop:"1px solid lightgray",backgroundColor:"white"}} >                                     
                                     <FilterComponentNine/>
                                </Imports.DialogActions>
                                  </Imports.Grid>
                                  </Imports.Dialog>
                                 </Imports.Grid>
                         </Imports.Grid>
                     
                )}
        </>
    );
};

 export default Filter;
