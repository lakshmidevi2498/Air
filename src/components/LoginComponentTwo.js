import React from 'react'
import Imports from '../commons/AllImports'

const LoginComponentTwo = ({first , setFirst,handlePhone,handleDisplay}) => {

  return (
    <>
    <Imports.Grid>
    {first ? (
           <Imports.Grid container display="flex" alignItems="center">
             <Imports.Grid item xs={12} container justifyContent="center" alignItems="center"component="button" sx={{ border: '1px solid black', padding: 1, margin: 1 }} onClick={handleDisplay}>
               <Imports.Grid item xs={2} container justifyContent="flex-start">
                 <Imports.MailOutlineIcon  />
               </Imports.Grid>
               <Imports.Grid item xs={10} container justifyContent="center">
                 <Imports.Typography variant="h5" sx={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: { xs: '12px', sm: '' } }}>
                   Continue with Email
                 </Imports.Typography>
               </Imports.Grid>
             </Imports.Grid>
           </Imports.Grid>
         ) : (
           <Imports.Grid container display="flex" alignItems="center">
             <Imports.Grid item xs={12} container justifyContent="center" alignItems="center" component="button" sx={{ border: '1px solid black', padding: 1, margin: 1 }} onClick={handlePhone}>
               <Imports.Grid item xs={2} container justifyContent="flex-start">
                 <Imports.LocalPhoneIcon  />
               </Imports.Grid>
               <Imports.Grid item xs={10} container justifyContent="center">
                 <Imports.Typography variant="h5" sx={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: { xs: '12px', sm: '' } }}>
                   Continue with Phone
                 </Imports.Typography>
               </Imports.Grid>
             </Imports.Grid>
           </Imports.Grid>
         )}
    </Imports.Grid>
    </>
  )
}

export default LoginComponentTwo