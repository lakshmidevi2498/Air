// import React from 'react'

// const PhoneNumber = () => {

//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [code, setCode] = useState('');
//     const [verificationId, setVerificationId] = useState(null);
//     const [verify, setVerify] = useState(null);
//     const handleContinue = async() => {
//         alert('rv')
//         // setVerificationId(true)
//         try{
//             const recaptcha = new RecaptchaVerifier(auth,'recaptcha',{})
//             const confirmation = await signInWithPhoneNumber(auth,phoneNumber,recaptcha)
//             console.log(confirmation)
//         }
//         catch(err){
//             console.error(err)
//         }
       
//       };
//       const handleVerify = () => {
//         setVerify(true)
//       }
//   return (
//     <>
    
//     {/* <Dialog> */}
//         <Imports.Grid item xs={12}>
//           <TextField
//             label="Verification Code"
//             variant="outlined"
//             fullWidth
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             onClick={handleVerify}
//           />
//         </Imports.Grid>
//         <Imports.Grid id='recaptcha'></Imports.Grid>
//         {/* </Dialog> */}
//         {/* <Dialog> */}
//         <Imports.Grid item xs={12}>
//           <Imports.Button variant="contained" color="primary" >
//             Verify Code
//           </Imports.Button>
//         </Imports.Grid>
//         {/* </Dialog> */}
//     </>
//   )
// }

// export default PhoneNumber