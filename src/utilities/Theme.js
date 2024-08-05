import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        one: {
            main: 'white',
        }

    },
    components: {
        MuiPickersDay: {
          styleOverrides: {
            root: {
              '&.Mui-selected': {
                backgroundColor: '#000', 
                color: '#fff', 
              },
              '&:hover': {
                backgroundColor: '#333',
                 color:'white'
              },
            },
          },
        },
        
      
        },
    typography: {
        h1: {
            fontSize: '20px',
            fontFamily: "Helvetica Neue, sans-serif",

        },
        h2:{
            fontSize:'15px',
            fontWeight:'medium',
             fontFamily: "Helvetica Neue, sans-serif",
        },
        h3:{
            fontSize:'16px',
            color:'gray', 
            fontFamily: "Helvetica Neue, sans-serif",
        },
        h5: {
            fontSize: '15px',
            fontFamily: "Helvetica Neue, sans-serif",
        },
        h6: {
            fontSize: '12px',
            fontFamily: "Helvetica Neue, sans-serif",
        },
        body1: {
            fontSize: '10px',
            fontWeight: 'bold',
            fontFamily: "Helvetica Neue, sans-serif",
            color: 'black',
            '@media(max-width:1025px)': {
                fontSize: '12px',
                fontFamily: "Helvetica Neue, sans-serif",
            },
            '@media(max-width:769px)': {
                fontSize: '0.6rem',
                fontFamily: "Helvetica Neue, sans-serif",
            }
        },
        text: {
            fontSize: '10px',
            fontFamily: "Helvetica Neue, sans-serif",
            '@media(max-width:769px)': {

            }
        },
        past:{
            fontSize:'30px'
        },
        innerText:{
            fontSize: '28px',
            fontWeight: 'medium',
            fontFamily: "Helvetica Neue, sans-serif",
            '@media(max-width:1025px)': {
                fontSize: '24px',
                fontFamily: "Helvetica Neue, sans-serif",
            },
            '@media(max-width:769px)': {
                fontSize: '1.7rem',
                fontFamily: "Helvetica Neue, sans-serif",
            },
            '@media(max-width:321px)': {
                fontSize: '1.7rem',
                fontFamily: "Helvetica Neue, sans-serif",
            }
        },
        body2:{
            fontSize: '14px',
            fontWeight: 'medium',
            fontFamily: "Helvetica Neue, sans-serif",
        },
        caption1:{
            fontSize: '15px',
            fontWeight: 'normal',
            fontFamily: "Helvetica Neue, sans-serif",
        },
        foot:{
fontSize:'20px',
fontFamily: "Helvetica Neue, sans-serif",
        },
    }
})
export default theme;