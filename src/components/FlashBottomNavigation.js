import React ,{useState}from 'react'
import Imports from '../commons/AllImports'

const FlashBottomNavigation = ({handleSearch}) => {
  const [value, setValue] = useState(0);
  
  return (
    <>
    <Imports.Grid>
    <Imports.BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid lightgrey',
            boxShadow: '0px -2px 5px rgba(0,0,0,0.1)',
            zIndex: 1002,
          }}
        >
          <Imports.BottomNavigationAction
            label="Clear All"
            sx={{
              color: 'black',
              textDecoration: 'underline',
              flex: 1,
              textAlign: 'left',
            }}
          />
          <Imports.BottomNavigationAction
            sx={{
              flex: 1,
              textAlign: 'right',
              '& .MuiBottomNavigationAction-label': {
                display: 'flex',
                justifyContent: 'flex-end',
              }
            }}
            label={
              <Imports.Button
                variant='contained'
                sx={{ color: 'white', backgroundColor: '#f73452', textTransform: 'initial', "&:hover": { backgroundColor: '#f73452', } }}
                startIcon={<Imports.SearchIcon />}
                onClick={handleSearch}
              >
                Search
              </Imports.Button>
            }
          />
        </Imports.BottomNavigation>
    </Imports.Grid>
    </>
  )
}

export default FlashBottomNavigation