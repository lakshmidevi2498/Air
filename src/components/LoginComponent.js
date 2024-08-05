import React, { useEffect, useState } from 'react'
import Imports from '../commons/AllImports'
import { getAuth } from 'firebase/auth';
import 'firebase/auth';
import { connect } from 'react-redux';
import LoginComponentThree from './LoginComponentThree';
import LoginComponentFour from './LoginComponentFour';

const LoginComponent = () => {
  const [user, setUser] = useState(null);
  const [first, setFirst] = useState(true)
  const [signup ,setSignup] = useState(false)
  


  useEffect(()=>{
    auth.onAuthStateChanged(person => {
      if (person) {
          setUser(person);
      } else {
          setUser(null);
      }
  });
  },[])

  const auth = getAuth()

  const handleDisplay = () => {
    setFirst(false)
  }

  const handlePhone = () => {
    setFirst(true)
  }





  return (
    <>
    {signup ?   <>
            <Imports.Grid container xs={12} justifyContent='center' my={8}>
           <LoginComponentThree signup={signup} setSignup ={setSignup} />       
        </Imports.Grid>
        </> : (
            <LoginComponentFour first={first} setFirst={setFirst}handlePhone={handlePhone} handleDisplay={handleDisplay} setSignup={setSignup} />
    )}      
    </>
  )
}
const mapStateToProps = (state) => ({
  data:state.googleloginreducer.data,
  loading:state.googleloginreducer.loading,
  error:state.googleloginreducer.error,
  data2:state.emailsignupreducer.data2,
  data3:state.emailloginreducer.data3
})
const mapDispatchToProps =(dispatch)=>({
 dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);