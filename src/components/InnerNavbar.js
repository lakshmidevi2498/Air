import React, { useEffect, useState } from 'react';
import Imports from '../commons/AllImports'
import UserComponent from './Navbarcomponents/UserComponent';
import NavAnyComponent from './Navbarcomponents/NavAnyComponent';

const InnerNavbar = ({ name, start, end, ghost }) => {
   
    return (
        <>
            <Imports.Grid container sx={{ justifyContent: "center", display: { xs: "none", sm: "block" }, top: 0, position: "sticky", zIndex: 50, backgroundColor: "white" }}>
                <Imports.Grid item xs={12} sm={11} md={10} lg={10} sx={{ margin: "auto", paddingX: { sm: "0px", md: "0px", lg: "30px", xl: "20px" }, paddingY: "20px" }}>
                    <Imports.Grid container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Imports.Grid item xs={2} md={1} sx={{ textAlign: "left", width: "100px", height: "30px", alignItems: "center", marginTop: "5px" }}>
                            <Imports.Box
                                component="img"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                                sx={{ width: "100%", height: "100%" }}
                            />
                        </Imports.Grid>
                        <Imports.Grid item xs={4} md={5} lg={4} sx={{ display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", marginLeft: { xs: "0px", lg: "150px", xl: "150px", xxl: "0px" } }}>
                            <Imports.Grid item xs={12} sx={{ marginRight: { sm: "0px", md: "0px" }, border: '2px solid lightgrey', borderRadius: '50px', width: { sm: '100%' }, padding: { sm: "1px", md: "3px" }, paddingX: { sm: "5px", md: '10px' }, textAlign: 'center', display: { xs: 'none', sm: 'block', md: 'block' }, boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
                                <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Imports.Grid item sm={3}>
                                        <Imports.Typography variant='body1' fontSize={'12px'}>{name || "AnyWhere"}</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Divider orientation="vertical" variant="middle" flexItem />
                                    <Imports.Grid item sm={3}>
                                        <Imports.Typography variant='body1' fontSize={'12px'}>
                                            {start && end ? `${start} - ${end}` : "Any Week"}
                                        </Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Divider orientation="vertical" variant="middle" flexItem />
                                    <Imports.Grid item sm={5} sx={{ width: "100%", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                                        <Imports.Grid container sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                            <Imports.Grid item sx={{ alignItems: "center" }}>
                                                <Imports.Typography variant='body1' fontSize={'12px'} margin='3px'>{ghost ? `${ghost} guests` : "Add guests"}</Imports.Typography>
                                            </Imports.Grid>
                                            <Imports.Grid item>
                                                <Imports.SearchIcon sx={{ backgroundColor: '#f73452', fontSize: '25px', color: 'white', borderRadius: '50px', padding: '5px', marginTop: "5px" }} />
                                            </Imports.Grid>
                                        </Imports.Grid>
                                    </Imports.Grid>
                                </Imports.Grid>
                            </Imports.Grid>
                        </Imports.Grid>/
                        <UserComponent />
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>

            <Imports.Grid container sx={{ display: { xs: 'none', sm: 'none' }, marginTop: "20px", paddingX: "20px", top: 0, position: "sticky", zIndex: 50, backgroundColor: "white", marginY: "10px" }}>
                <Imports.Grid  item  xs={12} sx={{  justifyContent: 'start',  alignItems: 'center',  border: '1px solid lightgrey',  borderRadius: '50px',  display: 'flex',  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', paddingX: '0px', }}  >
                    <Imports.SearchIcon sx={{ backgroundColor: '#f73452', color: 'white', borderRadius: '50%', padding: '7px' }} />
                    <Imports.Typography variant="body1" sx={{ paddingX: '5px', fontSize: '12px', color: 'grey' }}>Where are you going?</Imports.Typography>
                </Imports.Grid>
            </Imports.Grid>
        </>
    );
};

export default InnerNavbar;
