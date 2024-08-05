import React, { useState, useRef, useEffect } from 'react';
import Imports from '../commons/AllImports';

const CircularProgressSlider = React.memo(({ handleDate, handleFlexible, handleSendMonthsToParent, handleMonthChange }) => {
  const [value, setValue] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const svgRef = useRef(null);
  const isDraggingRef = useRef(false);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    const svgElement = svgRef.current;
    const circle = svgElement.querySelector('circle.progress');
    const radius = parseInt(circle.getAttribute('r'));
    const circumference = 2 * Math.PI * radius;
    setCircumference(circumference);

    const handleMouseMove = (event) => {
      if (!isDraggingRef.current) return;

      const rect = svgElement.getBoundingClientRect();
      const centerX = rect.width / 2 + rect.left;
      const centerY = rect.height / 2 + rect.top;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);
      let degrees = angle * (180 / Math.PI);
      if (degrees < 0) {
        degrees += 360;
      }
      const newValue = Math.round((degrees / 360) * 100);
      setValue(newValue);
    };

    const handleMouseDown = () => {
      isDraggingRef.current = true;
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        const month = Math.floor(value / (100 / 12));
        setSelectedMonth(monthNamesString[month]); // Update selected month text
        handleMonthChange(selectedMonth); // Pass the month to the parent component
        console.log("Selected month:", monthNamesString[month]); // Log selected month to console
        isDraggingRef.current = false;
      }
    };

    svgElement.addEventListener('mousedown', handleMouseDown);
    svgElement.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      svgElement.removeEventListener('mousedown', handleMouseDown);
      svgElement.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [value, handleMonthChange]);
  const month = Math.floor(value / (100 / 12));
  // Adjust the dimensions and stroke width as needed
  const svgWidth = 250; // Adjust as needed
  const svgHeight = 250; // Adjust as needed
  const circleRadius = 100; // Adjust as needed
  const strokeWidth = 45; // Adjust as needed

  // Month names array
  const monthNamesString = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  useEffect(() => {
    handleSendMonthsToParent(monthNamesString[0],selectedMonth);
  }, [monthNamesString[0],  handleSendMonthsToParent,selectedMonth]);

  // Calculate the positions of each month dot
  const dotPositions = monthNamesString.map((_, index) => {
    const angle = (index / 12) * 360; // Calculate angle for each month
    const x = svgWidth / 2 + circleRadius * Math.cos((angle - 90) * Math.PI / 180); // X coordinate
    const y = svgHeight / 2 + circleRadius * Math.sin((angle - 90) * Math.PI / 180); // Y coordinate
    return { x, y };
  });

  return (
    <>
      <Imports.Grid sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} my={3}>
        <Imports.ButtonGroup sx={{  backgroundColor:"lightgray",justifyContent: "center", alignItems: "center",  justifyContent: 'center',  margin: 'auto',  borderRadius: '50px',  overflow: 'hidden',  border: '2px solid lightgray',  paddingX: '0px',  textAlign: 'left',  justifyContent: 'center',  padding: '5px',  paddingX: '15px',  }}>
          <Imports.Button item sx={{   textTransform: 'initial',  border: 'none',  '&:hover': { border: 'none' },  paddingX: '20px',  '&:focus': { outline: 'none' },  color: 'black'  }} onClick={handleDate} >Dates</Imports.Button>
          <Imports.Button sx={{ textTransform: 'initial',  border: 'none',  '&:hover': { border: 'none' },  paddingX: '20px', color: 'black',   backgroundColor: 'white',  borderRadius: '40px',  }} >Months</Imports.Button>
          <Imports.Button sx={{  textTransform: 'initial',  border: 'none',  '&:hover': { border: 'none' },  paddingX: '20px',  color: 'black'  }} onClick={handleFlexible}>Flexible</Imports.Button>
        </Imports.ButtonGroup>
      </Imports.Grid>
      <Imports.Typography variant='h2' sx={{ fontSize: '18px', textAlign: 'center' }}>when's your trip</Imports.Typography>
      <Imports.Grid
        justifyContent="center"
        alignItems="center"
        height="auto"
        sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} my={3}
      >
        <svg
          ref={svgRef}
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          style={{ cursor: 'pointer' }}
        >
          <circle
            className="progress"
            cx={svgWidth / 2}
            cy={svgHeight / 2}
            r={circleRadius}
            stroke="#e0e0e0"
            strokeWidth={strokeWidth}
            fill="none"
            style={{ filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))' }}
          />
          {dotPositions.map((position, index) => (
            <circle
              key={index}
              cx={position.x}
              cy={position.y}
              r={3} // Dot radius
              fill="black" // Dot color
            />
          ))}
          <circle
            cx={svgWidth / 2}
            cy={svgHeight / 2}
            r={circleRadius}
            stroke="#f70271"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (value / 100) * circumference}
            transform={`rotate(-90 ${svgWidth / 2} ${svgHeight / 2})`}
          />
          <text x={svgWidth / 2} y={svgHeight / 2} textAnchor="middle" dy="0.3em" fontSize="35">
            {monthNamesString[month]}
          </text>
        </svg>
      </Imports.Grid>
      <Imports.Typography variant='h1' sx={{ textAlign: 'center' }}>Starting on 1-{monthNamesString[0]} <Imports.Box component='span' sx={{ textDecoration: 'underline', color: 'black', }}>Edit</Imports.Box></Imports.Typography>
    </>
  );
});

export default CircularProgressSlider;














