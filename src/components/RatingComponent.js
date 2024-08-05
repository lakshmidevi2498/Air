import React from 'react'
import Imports from '../commons/AllImports'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import { Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyIcon from '@mui/icons-material/Key';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MapIcon from '@mui/icons-material/Map';
const RatingComponent = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 5,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#212121' : '#308fe8',
        },
      }));
  return (
    
    <>
    <Imports.Grid container  justifyContent='center'>
            <Imports.Grid item xs={12} textAlign='center' sx={{padding:{xs:'10px',sm:'0px'}}}>
                <Imports.Grid item xs={12}>
                    <img src='./assets/images/Screenshot 2024-07-02 105452.png' width='50%' height='auto' />
                    <Imports.Typography variant='h1' fontSize='25px'>Guest favourite</Imports.Typography>
                    <Imports.Typography variant='h3'>
                        One of the most loved homes on Airbnb,<br />based on ratings, reviews and reliability
                    </Imports.Typography>
                </Imports.Grid>
                <Imports.Grid container item xs={11}md={10} justifyContent='center' alignItems={'center'} margin={'auto'} paddingY='5px' mt={2}>
                    <Imports.Grid item xs={8} sm={1.7} sx={{ textAlign: { xs: 'center', sm: 'center' } }}>
                        <Imports.Typography variant='h1' sx={{fontSize:{xs:"13px",sm:"10px",md:"12px",lg:"15px"}}} mb={1}>Overall rating</Imports.Typography>
                        <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                            {[
                                { id: 0, rating: 5, value: 90 },
                                { id: 1, rating: 4, value: 10 },
                                { id: 2, rating: 3, value: 0 },
                                { id: 3, rating: 2, value: 0 },
                                { id: 4, rating: 1, value: 0 }
                            ].map(({ id, rating, value }) => (
                                <Imports.Grid container alignItems="center" gap={2} key={id}>
                                    <Imports.Grid item>
                                        <Imports.Typography>{rating}</Imports.Typography>
                                    </Imports.Grid>
                                    <Imports.Grid item xs>
                                        <BorderLinearProgress variant="determinate" value={value} />
                                    </Imports.Grid>
                                </Imports.Grid>
                            ))}
                        </Stack>
                    </Imports.Grid>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: 'none', sm: 'block' }, marginLeft:"10px" }} />
                    {[
                        { id: 0, title: 'Cleanliness', score: 4.9, icon: <SanitizerIcon fontSize='large' sx={{ marginY: '18px' }} /> },
                        { id: 2, title: 'Accuracy', score: 5.0, icon: <CheckCircleOutlineIcon fontSize='large' sx={{ marginY: '18px' }} /> },
                        { id: 3, title: 'Check-In', score: 5.0, icon: <KeyIcon fontSize='large' sx={{ marginY: '18px' }} /> },
                        { id: 4, title: 'Communication', score: 4.9, icon: <ChatBubbleOutlineIcon fontSize='large' sx={{ marginY: '18px' }} /> },
                        { id: 5, title: 'Location', score: 5.0, icon: <MapIcon fontSize='large' sx={{ marginY: '18px' }} /> },
                        { id: 6, title: 'Value', score: 4.0, icon: <LocalOfferIcon fontSize='large' sx={{ marginY: '18px' }} /> }
                    ].map(({ id, title, score, icon }, index) => (
                        <React.Fragment key={id}>
                            <Imports.Grid item xs={8} sm={1.5} sx={{ textAlign: { xs: 'center', md: 'left' }, paddingLeft: { xs: '0px', sm: '15px' } }}>
                                <Imports.Typography variant='h1' sx={{fontSize:{xs:"13px",sm:"10px",md:"12px",lg:"15px"}}}>{title}</Imports.Typography>
                                <Imports.Typography variant='h5' sx={{ marginY: '10px' }}>{score}</Imports.Typography>
                                {icon}
                            </Imports.Grid>
                            {index < 5 && <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />}
                        </React.Fragment>
                    ))}
                </Imports.Grid>
                <Divider sx={{marginY:'20px'}}/> 
            </Imports.Grid>
        </Imports.Grid>
   

    </>
  )
}

export default RatingComponent