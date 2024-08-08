import React from 'react'
import Imports from '../commons/AllImports'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const CalendersComponent = ({ selectionRange, handleSelect, isSmallScreen }) => {

    return (
        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          months={isSmallScreen ? 1 : 2}
          direction="horizontal"
          showMonthAndYearPickers={false}
          showMonthArrow={true}
          showDateDisplay={false}
          colors={'red'}
          rangeColors={['black', 'lightgray']}
        />
      );
}

export default CalendersComponent