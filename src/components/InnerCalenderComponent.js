import React, { useState } from 'react';
import Imports from '../commons/AllImports'
import {  useMediaQuery, useTheme } from '@mui/material';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import CalendersComponent from './CalendersComponent';

const InnerCalenderComponent = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };
  return (
    <>
    <Imports.Grid item xs={12} my={4} sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                <Imports.Grid item>
                                    <Imports.Typography variant='h4' fontSize='25px'>5 nights in Dubai</Imports.Typography>
                                    <Imports.Typography caption='boby' fontSize='14px' fontWeight='normal' color='gray'>1 Aug 2024 - 6 Aug 2024</Imports.Typography>

                                </Imports.Grid>
                                <Imports.Grid item >

                                    <Imports.Grid style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                                                <CalendersComponent  selectionRange={selectionRange} handleSelect={handleSelect}isSmallScreen={isSmallScreen}/>
                                    </Imports.Grid>


                                </Imports.Grid>
                                <Imports.Grid container display="flex" padding="10px"  justifyContent="space-between" sx={{paddingX: { xs: '10px', sm: '0px' }}}>
                                <Imports.Grid item>
                                    <Imports.KeyboardAltIcon sx={{ textAlign: 'left' }} />
                                </Imports.Grid>
                                <Imports.Grid item>
                                    <Imports.Typography sx={{ fontWeight: 'medium', textDecoration: 'underline', fontSize: { xs: '16px', md: '15px' }, textAlign: 'right' }}>
                                        Clear dates
                                    </Imports.Typography>
                                </Imports.Grid>
                            </Imports.Grid>
                            </Imports.Grid>
    
    </>
  )
}

export default InnerCalenderComponent