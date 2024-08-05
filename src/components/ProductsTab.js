import React ,{useState,useEffect}from 'react'
import Imports from '../commons/AllImports'
import Tabs from './Tabs'
import { styled } from '@mui/system';
import { Switch, FormControlLabel } from '@mui/material';
import TabsComponent from './TabsComponent';
import MapIcon from '@mui/icons-material/Map';
import Filter from './Filter';

const ProductsTab = () => {
    const buttonPositions = {
        prevTop: { xs: '29%', sm: "31%", md: '37%', lg: '36%', xl: '22%' },
        prevLeft: { xs: '16px', sm: '30px', md: '40px', lg: '70px' },
        nextTop: { xs: '29%', sm: "31%", md: '37%', lg: '36%', xl: '22%' },
        nextRight: { xs: '16px', sm: '330px', md: '390px', lg: '400px', xl: '420px' },
      };
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

  return (
  <>
  <Imports.Grid container  alignItems='center' sx={{ alignItems:"center",textAlign:"center",display:"flex",margin: 'auto', padding: 0 ,position:"sticky",top:{xs:70,sm:72,md:92},zIndex:10,backgroundColor:"white",boxShadow:" 0 1px 2px rgba(0, 0, 0, 0.2)",paddingX:{xs:"30px",sm:"30px",md:"40px",lg:"60px",xl:"75px"},borderTop:"1px solid lightgray"}} >
    
    <Imports.Grid   item xs={12} sm={7} md={7.5} lg={9} sx={{justifyContent:'center' ,alignItems:'center',textAlign:'center',}} mt={2}>
    <Tabs 
     prevTop={{ xs: '53%', sm: "55%", md: '55%', lg: '55%', xl: '48%' }}
     prevLeft={{ xs: '18px', sm: '18px', md: '35px', lg: '50px', xl: '68px' }}
     nextTop={{ xs: '53%', sm: "55%", md: '55%', lg: '55%', xl: '48%' }}
     nextRight={{ xs: '18px', sm: '315px', md: '385px', lg: '382px', xl: '410px' }}
     marginn={{xs:"0px"}}
     breakpoints={{
        1440: {
            slidesPerView: 13,
        },
        1024: {
            slidesPerView: 7,
        },
        769: {
            slidesPerView: 6,
        },
        576: {
            slidesPerView: 6,

        },
        426: {
            slidesPerView: 5,

        },
        367:{
            slidesPerView: 5,
      },
        320: {
            slidesPerView: 4,

        },
    }}

     />
    </Imports.Grid>
    <Imports.Grid item xs={1} sm={2} md={1.5} lg={1} padding='10px' sx={{alignItems:"center",display:{xs:'none',sm:'block'}}} ><Filter/></Imports.Grid>
    <Imports.Grid item xs={2} sm={3} md={3} lg={2} sx={{ alignItems:"center",display: { xs: 'none', sm: 'block' }, border: '2px solid lightgray', paddingY:'10px' ,borderRadius:'10px'}}>

        <Imports.Grid item margin='auto' >
            <Imports.Typography  fontWeight='normal'   fontSize='13px'sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                Display total before taxes
                <Switch
                    checked={checked}
                    onChange={handleChange}
                />
            </Imports.Typography>
        </Imports.Grid>
    </Imports.Grid>
</Imports.Grid>

  </>
  )
}

export default ProductsTab