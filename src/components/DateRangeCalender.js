import React, { useState, useEffect } from 'react';
import Imports from '../commons/AllImports';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useMediaQuery } from '@mui/material';
import theme from '../utilities/Theme';
import CalendersComponent from './CalendersComponent';

const DateRangeCalender = ({handleSendDatesToChild}) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    const { selection } = ranges;
    setSelectionRange(selection);
    const formattedStartDate = selection.startDate && format(selection.startDate, 'MMM-dd');
    const formattedEndDate = selection.endDate && format(selection.endDate, 'MMM-dd');
    handleSendDatesToChild(formattedStartDate, formattedEndDate);
  };
  return (
    <>
     
     <Imports.Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'auto' }}>
            <CalendersComponent selectionRange={selectionRange} handleSelect={handleSelect} isSmallScreen={isSmallScreen} />
          </Imports.Box>
    
    </>
  )
}

export default DateRangeCalender