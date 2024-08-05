import React, { useState } from 'react';
import Imports from '../commons/AllImports';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DateRange } from 'react-date-range';

const InnerCardComponent = () => {
  return (
    <>
           <Imports.Card
                                sx={{
                                    padding: '20px',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                                    margin: { xs: 'auto', sm: '25px' },
                                    width: '100%',
                                    borderRadius:'20px',
                                }}
                            >
                                <Imports.Typography sx={{fontSize:{xs:'22px',sm:'20px'}}}>
                                    <Imports.Box component='span' sx={{ textDecoration: 'line-through', color: 'gray', }}>₹ 48,728 </Imports.Box>₹ 40,239
                                </Imports.Typography>
                                <Imports.Typography fontSize='14px' color='gray'>total before taxes</Imports.Typography>
                                <Imports.Grid item xs={12} display='flex'>
                                    <Imports.Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateField']}>
                                                <Imports.Grid sx={{ width: '100%' }}>
                                                    <DateField label="CHECK_IN " className="custom-datefield" fullWidth margin='none' />
                                                </Imports.Grid>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Imports.Grid>
                                    <Imports.Grid item xs={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DateField']}>
                                                <Imports.Grid sx={{ width: '100%' }}>
                                                    <DateField label="CHECK_IN" className="custom-datefield" fullWidth margin='none' />
                                                </Imports.Grid>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Imports.Grid>
                                </Imports.Grid>
                                <Imports.Grid item xs={12} display='flex' justifyContent='space-between' border='1px solid lightgray' padding='10px'>
                                    <Imports.Grid item sx={{ justifyContent: 'start' }}>
                                        <Imports.Typography>GUESTS</Imports.Typography>
                                        <Imports.Typography variant='caption'>1 guest</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item sx={{ justifyContent: 'end' }}>
                                        <Imports.KeyboardArrowDownIcon />
                                    </Imports.Grid>
                                </Imports.Grid>
                                <Imports.Grid item justifyContent='center' textAlign='center' xs={12} mt={2}>
                                    <Imports.Button
                                        variant='contained'
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#d60951',
                                            '&:hover': { backgroundColor: '#d60951' },
                                            width: '100%',
                                            padding: '7px'
                                        }}
                                    >
                                        Reserve
                                    </Imports.Button>
                                </Imports.Grid>
                                <Imports.Typography sx={{ textAlign: 'center', fontSize: '13px', color: 'gray', fontWeight: 'normal' }} mt={2}>
                                    You won't be charged yet
                                </Imports.Typography>
                            </Imports.Card>
                            <Imports.Grid
                                width='100%' 
                                padding='20px'
                                borderRadius='10px'
                                border='1px solid lightgray'
                                display='flex'
                                gap={2}
                                mt={3}
                                sx={{margin: { xs: 'auto', sm: '25px' },marginTop:{xs:'10px'}}}
                            >
                                <Imports.SellIcon fontSize='large' />
                                <Imports.Grid >
                                    <Imports.Typography fontSize='15px'>Lower Price</Imports.Typography>
                                    <Imports.Typography variant='h5'>Your dates are ₹ 774 less than the avg nightly rate of the last 60 days</Imports.Typography>
                                </Imports.Grid>
                            </Imports.Grid>
                            <Imports.Grid
                                mt={3}
                                sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                                gap={2}
                            >
                                <Imports.AssistantPhotoIcon />
                                <Imports.Typography variant='h3' sx={{ textDecoration: 'underline' }}>Report this listing</Imports.Typography>
                            </Imports.Grid>
    </>
  )
}

export default InnerCardComponent