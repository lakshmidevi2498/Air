import React, { useEffect, useState } from 'react'
import Imports from '../commons/AllImports'
import { useNavigate } from 'react-router-dom';
import { emailSignupInitiate } from '../redux/action/emailSignupAction';
import { useDispatch } from 'react-redux';
const LoginComponentThree = ({setSignup}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        password:'',
        dob: '',
        checked:false
    });
  
    const [error, setError] = useState({
        fnameError: '',
        lnameError: '',
        emailError: '',
        passwordError:'',
        dobError: '',
        checkError: false,
    });
    const handleChange = (e) => {
        const {  name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleLoggingin =() => {
        setSignup(false)
    }
const handleFname = (fname) => {
    if(fname === '')
    {
        setError((prevErrors) => ({...prevErrors ,fnameError:true }))
        return false
    }
    else{
        setError((prevErrors) => ({...prevErrors ,fnameError:false }))
        
        return true
    }
}
const handleLname = (lname) => {
    if(lname === '')
        {
            setError((prevErrors) => ({...prevErrors ,lnameError:true }))
            return false
        }
        else{
            setError((prevErrors) => ({...prevErrors ,lnameError:false }))
            return true
        }
}
const handleDob = (dob) => {
    if(dob === '')
        {
            setError((prevErrors) => ({...prevErrors ,dobError:true }))
            return false
        }
        else{
            setError((prevErrors) => ({...prevErrors ,dobError:false }))
            return true
        }
}
const handleEmail = (email) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailFormat)) 
        {
            setError((prevErrors) => ({...prevErrors ,emailError:true }))
            return false
        }
        else{
            setError((prevErrors) => ({...prevErrors ,emailError:false }))
            return true
        }
}
const handlePassword = (password) => {
  if (password === "" || password.length < 6) {
    setError((prevErrors) => ({ ...prevErrors, passwordError: true }));
    return false;
} else {
    setError((prevErrors) => ({ ...prevErrors, passwordError: false }));
    return true;
}
}
const handleCheckBox = () => {
    if (!data.checked) {
        setError((prevErrors) => ({ ...prevErrors, checkError: true }));
        return false;
    } else {
        setError((prevErrors) => ({ ...prevErrors, checkError: false }));
        return true;
    }
}; 
    const handleValidate = async(e) => {
        const isFnameValidate = handleFname(data.fname)
        const isLnameValidate = handleLname(data.lname)
        const isDobValidate = handleDob(data.dob)
        const isEmailValidate = handleEmail(data.email)
        const isCheckBoxValidate = handleCheckBox() 
        const isPasswordValidate = handlePassword(data.password)
        if ( isFnameValidate && isLnameValidate && isDobValidate && isEmailValidate && isPasswordValidate && isCheckBoxValidate)
        { console.log(data.email,"and",data.password)
        dispatch(emailSignupInitiate(data.email,data.password,navigate))
        }
      }
  return (
    <>
        <Imports.Grid container justifyContent='center' alignItems="center">
                    <Imports.Grid item xs={11} sm={8}md={7} lg={4.5} border='1px solid lightgray'>
                        <Imports.Grid container alignItems="center" sx={{ marginY: '10px' }}>
                            <Imports.Grid item>  <Imports.IconButton><Imports.ChevronLeft fontSize="medium" /></Imports.IconButton>
                            </Imports.Grid>
                            <Imports.Grid item xs>  <Imports.Typography variant="h5" sx={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}> Finish Signing Up</Imports.Typography>
                            </Imports.Grid>
                        </Imports.Grid>
                        <Imports.Divider />
                        <Imports.Grid container justifyContent='center' sx={{ padding: '30px' }}>
                            <Imports.Grid item xs={12}> <Imports.Typography variant='h1' fontWeight='medium'>Legal Name</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item xs={12}>
                                <Imports.TextField name="fname"  label="First Name on ID" variant="outlined" value={data.fname}  onChange={handleChange}  fullWidth style={{ marginTop: '20px', fontSize: '15px' }}
                                    InputLabelProps={{ style: { fontSize: '14px', fontWeight: 'normal', color: 'gray' }, }}
                                    InputProps={{  style: { fontSize: '14px', fontWeight: 'normal' }, }}  />
                                {error.fnameError && <Imports.Typography variant ='h2'sx={{color:'red' }}>please enter first name</Imports.Typography>}
                            </Imports.Grid>
                            <Imports.Grid item xs={12}>
                                <Imports.TextField  name="lname" label="Last Name on ID"  variant="outlined" value={data.lname} onChange={handleChange}  fullWidth  style={{ marginTop: '20px', fontSize: '15px' }}
                                    InputLabelProps={{ style: { fontSize: '14px', fontWeight: 'normal', color: 'gray' },}} InputProps={{  style: { fontSize: '14px', fontWeight: 'normal' }, }}  />
                                {error.lnameError && <Imports.Typography variant ='h2'sx={{color:'red' }}>please enter last name</Imports.Typography>}
                            </Imports.Grid>
                            <Imports.Grid item xs={12}>
                                <Imports.Typography variant='h6'> Make sure this matches the name on your government ID. If you go by another name, you can add a <Imports.Box component='span' sx={{ textDecoration: 'underline', fontWeight: 'bold' }}>preferred first name</Imports.Box>.</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item xs={12} mt={1}>
                                <Imports.Typography variant='h1' fontWeight='medium'>Date of birth</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item xs={12}>
                                <Imports.TextField  name="dob"  label=""  variant="outlined"  type='date'  value={data.dob}  onChange={handleChange}  fullWidth   style={{ marginTop: '20px', fontSize: '15px' }}
                                    InputLabelProps={{ style: { fontSize: '14px', fontWeight: 'normal', color: 'gray' }, }}
                                    InputProps={{  style: { fontSize: '14px', fontWeight: 'normal' }, }} />
                                {error.dobError && <Imports.Typography variant ='h2'sx={{color:'red' }}>please choose Date Of Birth</Imports.Typography>}
                            </Imports.Grid>
                            <Imports.Grid item xs={12}>
                                <Imports.Typography variant='h6'> To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb. </Imports.Typography>
                            <Imports.Grid item xs={12} mt={1}>
                                <Imports.Typography variant='h1' fontWeight='medium'>Contact info</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item xs={12}>
                                <Imports.TextField  name="email"  label="Email" variant="outlined"  value={data.email}  onChange={handleChange}  fullWidth  style={{ marginTop: '20px', fontSize: '15px' }}
                                    InputLabelProps={{  style: { fontSize: '14px', fontWeight: 'normal', color: 'gray' },  }}
                                    InputProps={{  style: { fontSize: '14px', fontWeight: 'normal' }, }}  />
                                {error.emailError && <Imports.Typography variant ='h2'sx={{color:'red' }}>please enter correct email</Imports.Typography>}
                            </Imports.Grid>
                            <Imports.Grid item xs={12}>
                                <Imports.Typography variant='h6' sx={{ justifyContent: 'left' }}> We will email you trip confirmation and receipts. </Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item xs={12}>
                                <Imports.TextField name="password"  label="Password" variant="outlined"  type='password'  value={data.password}  onChange={handleChange}  fullWidth  style={{ marginTop: '20px', fontSize: '15px' }}
                                    InputLabelProps={{
                                        style: { fontSize: '14px', fontWeight: 'normal', color: 'gray' },
                                    }}
                                    InputProps={{  style: { fontSize: '14px', fontWeight: 'normal' }, }} />
                                {error.passwordError && <Imports.Typography variant ='h2'sx={{color:'red' }}>please enter valid password</Imports.Typography>}
                            </Imports.Grid>
                            <Imports.Grid item xs={12} mt={2}>
                                <Imports.Typography variant='h6'> By selecting <Imports.Box component='span' sx={{ fontWeight: 'bold' }}>Agree and Continue,</Imports.Box> I agree to Airbnb's <Imports.Box component='span' sx={{ textDecoration: 'underline', color: 'blue' }}>Terms of Service, Payments Terms of Service</Imports.Box> and <Imports.Box component='span' sx={{ textDecoration: 'underline', color: 'blue' }}>Nondiscrimination Policy</Imports.Box> and acknowledge the <Imports.Box component='span' sx={{ textDecoration: 'underline', color: 'blue' }}>Privacy Policy</Imports.Box>.</Imports.Typography>
                            </Imports.Grid>
                            <Imports.Typography variant='h6' sx={{textAlign:'center',fontWeight:"bold",cursor:'pointer'}}mt={2}>If you already have an account go through ,<Imports.Typography component='span' variant='h2'sx={{color:'#d60951'}} onClick ={handleLoggingin}>log in</Imports.Typography></Imports.Typography>    
                            <Imports.Grid item xs={12}>
                                <Imports.Button variant='contained' sx={{ color: 'white', backgroundColor: '#d60951', width: '100%', paddingX: '5px', paddingY: '10px', marginTop: '10px','&:hover':{backgroundColor: '#d60951'} }} onClick={handleValidate}> Agree and Continue </Imports.Button>
                            </Imports.Grid>
                            <Imports.Divider />
                            <Imports.Grid item xs={12}>
                                <Imports.Typography variant='h5' fontSize='13px' mt={3}> Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notifications. </Imports.Typography>
                            </Imports.Grid>
                            <Imports.Grid item xs={12} mt={2} sx={{ display: 'flex', textAlign: 'left', alignItems: 'center' }}>
                                <Imports.FormControlLabel
                                    control={ <Imports.Checkbox  color="primary"  name = "checked"  checked={data.checked}  onChange={handleChange}  />  }
                                    label={ <Imports.Typography variant="body1" style={{ color: 'gray', fontWeight: 'normal', fontSize: '14px' }}> I don't want to receive marketing messages from Airbnb.</Imports.Typography>  }  />
                        </Imports.Grid>
                        {error.checkError && ( <Imports.Typography variant="h2" sx={{ color: 'red' }}> Please check the box </Imports.Typography> )}
                        </Imports.Grid>
                    </Imports.Grid>                   
                </Imports.Grid>
           </Imports.Grid>
    </>
  )
}
export default LoginComponentThree