import React from 'react'
import Imports from '../commons/AllImports'
import { useDispatch } from 'react-redux';
import { emailLoginInitiate } from '../redux/action/emailLoginAction';
import { useNavigate } from 'react-router-dom';

const EmailValidationComponent = ({data ,error,setError,handlePhoneChange,setSignup}) => {
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    const handleSubmit = async () => {
        const isEmailValid = validateEmail(data.email);
        const isPasswordValid = validatePassword(data.password);
    
        if (isEmailValid && isPasswordValid) {
          console.log(data.email,"and", data.password);
         dispatch(emailLoginInitiate(data.email,data.password,navigate))
        }
      };
      const validateEmail = (email) => {
        const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailformat)) {
            setError(prevState=> ({...prevState ,emailError:true}))
        //   setEmailError(true);
          return false;
        } else {
            setError(prevState=> ({...prevState ,emailError:false}))
        //   setEmailError(false);
          return true;
        }
      };
    
      const validatePassword = (password) => {
        if (password.length < 6) {
        //   setPasswordError(true);
        setError(prevState=> ({...prevState ,passwordError:true}))
        
          return false;
        } else {
        //   setPasswordError(false);
        setError(prevState=> ({...prevState ,passwordError:false}))

          return true;
        }
      };
      const handleSiggningUp = () => {
        setSignup(true)
      }
  return (
    <>
    <Imports.TextField
                label="Email"
                name="email"
                value={data.email}
                fullWidth
                variant="outlined"
                onChange={handlePhoneChange}
                style={{ marginTop: '20px', fontSize: '15px' }}
                InputLabelProps={{
                  style: { fontSize: '14px', fontWeight: 'normal', color: 'gray' },
                }}
                InputProps={{
                  style: { fontSize: '14px', fontWeight: 'normal' },
                }}
              />
              {error.emailError && <Imports.Typography sx={{ color: "red" }}>Enter Valid Email</Imports.Typography>}
              <Imports.TextField
                label="Password"
                name="password"
                value={data.password}
                fullWidth
                type='password'
                variant="outlined"
                onChange={handlePhoneChange}
                style={{ marginTop: '20px', fontSize: '15px' }}
                InputLabelProps={{
                  style: { fontSize: '14px', fontWeight: 'normal', color: 'gray' },
                }}
                InputProps={{
                  style: { fontSize: '14px', fontWeight: 'normal' },
                }}
              />
              {error.passwordError && <Imports.Typography sx={{ color: "red" }}>Enter valid password</Imports.Typography>}
              <Imports.Grid sx={{ marginY: '20px', textAlign: 'center', justifyContent: 'center' }}>
                <Imports.Typography variant='h6' mb={1}>If you don't have an account?, <Imports.Typography component='span' variant='h2' sx={{ color: '#d60951', cursor: 'pointer' }} onClick={handleSiggningUp}>Create account..</Imports.Typography ></Imports.Typography>
                <Imports.Button onClick={handleSubmit} variant='contained' sx={{ color: 'white', backgroundColor: '#d60951', width: '100%', padding: '7px', '&:hover': { backgroundColor: '#d60951', } }}>Submit</Imports.Button>
              </Imports.Grid>
    </>
  )
}

export default EmailValidationComponent