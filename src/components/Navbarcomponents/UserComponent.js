import React ,{useState , useEffect}from 'react';
import Imports from '../../commons/AllImports';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import { signOut } from '@firebase/auth';

const UserComponent = () => {
  const [ anchorE1 , setAnchorE1] = useState(null)
  const [user , setUser] =useState("")
  const navigate = useNavigate();
  const userName = localStorage.getItem("userFirstLetter")
  const number = localStorage.getItem("number")
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(person => {
        setUser(person);
    });
    return () => unsubscribe(); // Cleanup on unmount
}, []);
const handleSignUp = (event) => {
  setAnchorE1(event.currentTarget);
};
const handleClose = () => {
  setAnchorE1(null);
};
const handleNavigate = () => {
  setAnchorE1(null);
    navigate('/signup');
};
const handleLogout = () => {
    signOut(auth).then(() => {
        setUser(null);
        setAnchorE1(null);
        localStorage.clear();
        navigate('/');
    });
};
const handleProfile = () => {
    navigate('/profile');
};
  const userMenuItems = [
   
    { text: 'Messages', highlighted: true },
    { text: 'Trips', highlighted: true },
    { text: 'Wishlist' , highlighted: true},
    { text: 'Airbnb your home' },
    { text: 'Account', action: handleProfile },
    { text: 'Help center' },
    { text: 'Log out', action: handleLogout }
  ];
  const guestMenuItems = [
    { text: 'Login', action: handleNavigate },
    { text: 'Sign Up', action: handleNavigate, highlighted: true },
    { text: 'Airbnb your home' },
    { text: 'Help Center' }
  ];
  const menuItemStyles = {
    fontWeight: 'normal',
    fontSize: '15px'
  };
  const highlightedMenuItemStyles = {
    ...menuItemStyles,
    fontWeight: 'bold',
    '&.Mui-focusVisible': { backgroundColor: 'transparent' }
  };
  return (
    <>
      <Imports.Grid item sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Imports.Typography variant='h5' fontWeight='bold' color='black'>
          Airbnb Your home
        </Imports.Typography>
        <Imports.LanguageIcon sx={{ color: 'black' }} fontSize='small' />
        <Imports.Grid  item  sx={{   display: 'flex',  justifyContent: 'center',  alignItems: 'center',  border: '1px solid lightgrey',  gap: '10px',  padding: '10px', borderRadius: '50px',  position: 'relative',  cursor: 'pointer'  }} onClick={handleSignUp}  >
          <Imports.MenuIcon sx={{ fontSize: 30 }} />
          {user ? ( <Imports.Avatar sx={{ bgcolor: deepPurple[500] ,width: 30, height: 30, fontSize: 20 }} >{userName} || L || {number}</Imports.Avatar>)
           : (  <Imports.AccountCircleIcon sx={{ fontSize: 30, color: 'black' }} /> )}
        </Imports.Grid>
        <Imports.Menu  id="simple-menu"  anchorEl={anchorE1}  keepMounted  open={Boolean(anchorE1)}  onClose={handleClose}
          sx={{
            '& .MuiPaper-root': {  width: '200px',  padding: '10px',  borderRadius: '10px',  marginTop: '70px',  position: 'absolute',  zIndex: 10000 }  }}
          anchorOrigin={{
            horizontal: 'right',  vertical: 'top'  }}
          transformOrigin={{  horizontal: 'right',  vertical: 'top'  }}  >
{user ? (
 <Imports.Grid>
    {userMenuItems.map((item, index) => (
    <Imports.Grid item key={index}>
        <Imports.MenuItem  
          onClick={item.action}
          sx={item.highlighted ? highlightedMenuItemStyles : menuItemStyles}
        >
          {item.text}
        </Imports.MenuItem>
        {(index === 2 || index === 4 )? <Imports.Divider /> : null}
        </Imports.Grid>
    ))}
  </Imports.Grid>
) : ( 
<Imports.Grid>
    {guestMenuItems.map((item, index) => (
      <Imports.Grid item key={index}> 
        <Imports.MenuItem 
          onClick={item.action}
          sx={item.highlighted ? highlightedMenuItemStyles : menuItemStyles}
        >
          {item.text}
        </Imports.MenuItem>
        {(index === 1 ) ? <Imports.Divider /> : null}
        </Imports.Grid>
    ))}
  </Imports.Grid>
)}
      </Imports.Menu>
      </Imports.Grid>
    </>
  );
};
export default UserComponent;
