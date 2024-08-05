import React ,{useState}from 'react'
import SearchTabsComponent from './SearchTabsComponent';
import Imports from '../commons/AllImports'
import Filter from './Filter'
import { Switch, FormControlLabel } from '@mui/material';

const SearchPageTabsComponent = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
  return (
  
    <>
    <Imports.Grid container xs={12} item border={'1px solid lightgray'} sx={{position:"sticky",top:{xs:92,sm:72,md:92,lg:90},zIndex:12001,backgroundColor:"white"}}>
        <Imports.Grid container  alignItems='center' sx={{ margin: 'auto', padding: {xs:"5px",sm:0} }} xs={11} padding='0' >
        
        <Imports.Grid   item xs={12} sm={7} md={7.5} lg={9} sx={{justifyContent:'center' ,alignItems:'center',textAlign:'center',paddingX:{xs:'10px',sm:"30px",md:"35px",lg:"30px"}}} mt={2} >
        <SearchTabsComponent 
        prevTop={{ xs: '40%', sm: "50%", md: '50%', lg: '45%', xl: '45%' }}
        prevLeft={{ xs: '8px', sm: '25px', md: '35px', lg: '50px', xl: '55px' }}
        nextTop={{ xs: '40%', sm: "50%", md: '50%', lg: '45%', xl: '45%' }}
        nextRight={{ xs: '8px', sm: '330px', md: '390px', lg: '390px', xl: '415px' }} />
        </Imports.Grid>
        <Imports.Grid xs={1} sm={2} md={1.5} lg={1} padding='10px' sx={{display:{xs:'none',sm:'block'}}} ><Filter/></Imports.Grid>
        <Imports.Grid item xs={2} sm={3} md={3} lg={2} sx={{ display: { xs: 'none', sm: 'block' }, border: '2px solid lightgray', paddingY:'10px' ,borderRadius:'10px'}}>

            <Imports.Grid item margin='auto'>
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
</Imports.Grid>
    </>
  )
}

export default SearchPageTabsComponent