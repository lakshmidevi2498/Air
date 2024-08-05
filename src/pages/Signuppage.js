import React, { useState } from 'react'; 
import LoginComponent from '../components/LoginComponent';
import FooterComponent from '../components/FooterComponent';
import UpdatedNav from "../components/UpdatedNav"

const Signuppage = () => {
  return (
  <>

       <UpdatedNav/>
       <LoginComponent/>
       <FooterComponent/>
       {/* <RegistrationComponent/> */}
       {/* <CountrySelector/> */}
       </>
  )
}

export default Signuppage
      

