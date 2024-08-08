import React from 'react'
import Imports from '../commons/AllImports'
import TabsComponent from './TabsComponent'
import ProductsTab from './ProductsTab'
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import { Divider } from '@mui/material';
import SearchTabsComponent from './SearchTabsComponent';

const SearchTabs = () => {
  return (
    <>
    <Imports.Grid container justifyConten='center'xs={12} 
    >
        <Imports.Grid justifyContent='center'xs={11.5}   sx={{margin:'auto',display:'flex'}}>
            <Imports.Grid xs={7}>
        <SearchTabsComponent/>
        </Imports.Grid>
            </Imports.Grid>
          <Imports.Grid xs={5}></Imports.Grid>
        </Imports.Grid>
    </>
  )
}

export default SearchTabs