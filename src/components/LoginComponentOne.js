import React from 'react'
import Imports from '../commons/AllImports';

const LoginComponentOne = ({handleGoogle}) => {
    const buttonData = [
        {
          icon: <Imports.Facebook sx={{ color: 'blue' }} />,
          label: 'Continue with Facebook',
        },
        {
          icon: <Imports.GoogleIcon sx={{ color: 'red' }} />,
          label: 'Continue with Google',
          onClick: handleGoogle
        },
        {
          icon: <Imports.AppleIcon />,
          label: 'Continue with Apple',
          
        }
      ];
      
  return (
    <>
     {buttonData.map((button, index) => (
        <Imports.Grid container display="flex" alignItems="center" key={index}>
          <Imports.Grid item xs={12} container justifyContent="center" alignItems="center" component="button" sx={{ border: '1px solid black', padding: 1, margin: 1 }} onClick={button.onClick}>
            <Imports.Grid item xs={2} container justifyContent="flex-start">
              {button.icon}
            </Imports.Grid>
            <Imports.Grid item xs={10} container justifyContent="center">
              <Imports.Typography variant="h5" sx={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: { xs: '12px', sm: '' } }}>
                {button.label}
              </Imports.Typography>
            </Imports.Grid>
          </Imports.Grid>
        </Imports.Grid>
      ))}
    </>
  )
}

export default LoginComponentOne