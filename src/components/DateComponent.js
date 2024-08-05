import React, { useState, useEffect, useCallback } from 'react';
import Imports from '../commons/AllImports';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useMediaQuery } from '@mui/material';
import theme from '../utilities/Theme';
import DateRangeCalender from './DateRangeCalender';

const DateComponent = ({ handleMonths, handleFlexible, sendDatesToParent ,}) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSendDatesToChild = useCallback((value1,value2) => {
   
    setStart(value1);
    setEnd(value2);
    sendDatesToParent(value1, value2);
  },[]);

  const buttonData = [
    { label: 'Dates', onClick: () => {} },
    { label: 'Months', onClick: handleMonths },
    { label: 'Flexible', onClick: handleFlexible }
  ];
  const buttonDataTwo = [
    { label: 'Exact dates', fontSize: { xs: '8px', sm: '10px' }, border: '2px solid black' },
    { label: '±1days', fontSize: { xs: '10px' }, border: '1px solid lightgray' },
    { label: '±2days', fontSize: { xs: '10px' }, border: '1px solid lightgray' },
    { label: '±3days', fontSize: { xs: '10px' }, padding: '5px', paddingX: '3px', border: '1px solid lightgray', display: { xs: 'none', sm: 'block' } },
    { label: '±7days', fontSize: { xs: '10px' }, padding: '5px', paddingX: '3px', border: '1px solid lightgray', display: { xs: 'none', sm: 'block' } },
    { label: '±14days', fontSize: { xs: '10px' }, padding: '5px', paddingX: '3px', border: '1px solid lightgray', display: { xs: 'none', sm: 'block' } }
  ];

  // useEffect(() => {
  //   sendDatesToParent(start, end);
  // }, []);

  return (
    <>
      <Imports.Grid  container  alignItems="center" justifyContent="center"  item xs={12}  sx={{  width: '100%',  margin: ' auto',  }} >
        <Imports.Grid item my={2} >
          <Imports.Typography variant='h2' sx={{ display: { xs: 'block', sm: 'none' }, paddingX: '8px', fontSize: '20px' }} my={2}>
            When's Your trip?
          </Imports.Typography>
          <Imports.ButtonGroup 
      sx={{   borderRadius: '50px',  overflow: 'hidden',   border: '2px solid lightgray',   paddingX: '0px',  textAlign: 'left',  justifyContent: 'center',   backgroundColor: 'lightgray',  padding: { xs: '2px', sm: '5px' },  paddingX: '15px'  }}  >
      {buttonData.map((button, index) => (
        <Imports.Grid key={index} item sx={{ borderRadius: '40px', backgroundColor: index === 0 ? 'white' : 'transparent' }}>
          <Imports.Button 
            sx={{ 
              textTransform: 'initial', 
              border: 'none', 
              '&:hover': { border: 'none' }, 
              paddingX: '20px', 
              '&:focus': { outline: 'none' }, 
              color: 'black' 
            }} 
            onClick={button.onClick}
          >
            {button.label}
          </Imports.Button>
        </Imports.Grid>
      ))}
    </Imports.ButtonGroup>
        </Imports.Grid>
        <Imports.Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign:"center", padding: 0,margin:0, overflow: 'hidden' }}>
          <DateRangeCalender handleSendDatesToChild={handleSendDatesToChild} />
        </Imports.Grid>
        <Imports.Grid item display='flex' gap={2} sx={{ paddingX: { xs: '0px', sm: "30px" }, marginBottom: "10px" }}>
      {buttonDataTwo.map((button, index) => (
        <Imports.Button 
          key={index}
          sx={{ 
            fontSize: button.fontSize, 
            border: button.border, 
            borderRadius: '20px', 
            textAlign: 'center', 
            color: 'black', 
            textTransform: 'initial', 
            padding: button.padding, 
            paddingX: button.paddingX, 
            display: button.display 
          }}
        >
          {button.label}
        </Imports.Button>
      ))}
    </Imports.Grid>
      </Imports.Grid>
    </>
  );
}

export default DateComponent;

