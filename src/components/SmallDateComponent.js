import React, { useState, useEffect } from 'react';
import Imports from '../commons/AllImports';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import DateButtonComponent from './DateButtonComponent';

const SmallDateComponent = React.memo(({ handleMonths, handleFlexible, sendDatesToParent ,}) => {
  const buttonData = [
    { label: 'Dates', onClick: () => {} },
    { label: 'Months', onClick: handleMonths },
    { label: 'Flexible', onClick: handleFlexible }
  ];
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [start, setStart] = useState("Add dates");
  const [end, setEnd] = useState("Add dates");

  const handleSelect = (ranges) => {
    const { selection } = ranges;
    setSelectionRange(selection);
    const formattedStartDate = selection.startDate && format(selection.startDate, 'MMM-dd');
    const formattedEndDate = selection.endDate && format(selection.endDate, 'MMM-dd');
    setStart(formattedStartDate);
    setEnd(formattedEndDate);
  };
  useEffect(() => {
    sendDatesToParent(start, end);
  }, [start, end, sendDatesToParent]);

  

  return (
    <>
      <Imports.Grid   container alignItems="center" 
        justifyContent="center"  xs={12}
        sx={{  width: '100%',  margin: ' auto',  }}  >
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
        <Imports.Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1, overflow: 'hidden' }}>
          <Imports.Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'auto' }}>
           
               <DateRange
               dateFormat="MM/dd"
              //  minDate={new Date()}
               ranges={[selectionRange]}
               onChange={handleSelect}
               months={1}
               direction="horizontal"
               showMonthAndYearPickers={false}
               showMonthArrow={true}
               showDateDisplay={false}
               rangeColors={['black']}
               color={["yellow"]}
               sx={{
                 width: '100%',
                 border: "2px solid red",
                 '& .rdrCalendarWrapper': {
                   maxWidth: '100%',
                 },
               }}
             />
           
          </Imports.Box>
        </Imports.Grid>
        <DateButtonComponent/>
      </Imports.Grid>
    </>
  );
})

export default SmallDateComponent;

