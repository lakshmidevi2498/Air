import React from 'react'
import Imports from '../commons/AllImports';
import { useNavigate } from 'react-router-dom';

const BottonNavigation = () => {
    const navigate =useNavigate()
    const [value, setValue] = React.useState(0);
    const handleSignUpNavigation = () => {
        navigate('/signup')
    }


    return (
      <Imports.Box sx={{ width: '100%' ,display:{xs:'block',sm:'none'},position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <Imports.BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Imports.BottomNavigationAction label="Explore" icon={<Imports.SearchIcon />} 
          sx={{  color: 'black', 
            '&.Mui-selected': {
              color: '#d60951', 
            },
            '& .MuiBottomNavigationAction-label': {
            
              '&.Mui-selected': {
                fontSize: '1rem', 
              },
            },  }}/>
          <Imports.BottomNavigationAction label="Wishlist" icon={<Imports.FavoriteBorderSharpIcon />} 
           sx={{  color: 'black', 
            '&.Mui-selected': {
              color: '#d60951', 
            },
            '& .MuiBottomNavigationAction-label': {
            
              '&.Mui-selected': {
                fontSize: '1rem', 
              },
            },  }}/>
          <Imports.BottomNavigationAction label="Login" icon={<Imports.AccountCircleIcon  onClick={handleSignUpNavigation}/>} 
           sx={{  color: 'black', 
            '&.Mui-selected': {
              color: '#d60951', 
            },
            '& .MuiBottomNavigationAction-label': {
            
              '&.Mui-selected': {
                fontSize: '1rem', 
              },
            },  }}/>
        </Imports.BottomNavigation>
      </Imports.Box>
    );
}

export default BottonNavigation;