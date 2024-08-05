import React from 'react'
import Imports from '../commons/AllImports'
import { ChevronRight } from '@mui/icons-material'

const ThingsComponent = () => {
    const data = [
        ['House rules', 'Check-in after 3:00 pm', '4 guests maximum', 'Self check-in with building staff'],
        ['Safety & property', 'Carbon monoxide alarm', 'Smoke alarm'],
        ['Cancellation policy', 'Free cancellation for 48 hours.', 'Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.']
    ];

    return (
        <>
            <Imports.Grid container justifyContent='center'>
                <Imports.Grid item xs={11}  md={9}>
                    <Imports.Typography variant='h1' fontSize='25px'>Things to know</Imports.Typography>
                    <Imports.Grid container spacing={2} mt={2}>
                        {data.map((section, index) => (
                            <Imports.Grid item xs={12} sm={4} md={4} key={index}>
                                {section.map((text, idx) => (
                                    <Imports.Typography variant='h1'key={idx} sx={{fontWeight:idx===0 ?'bold':'normal' ,fontSize:'15px',marginTop:'4px'}}>{text}</Imports.Typography>
                                ))}
                                <Imports.Grid container display='flex' mt={2}>
                                    <Imports.Typography variant='h1' sx={{ textDecoration: 'underline', fontWeight: 'medium',fontSize:'15px' ,marginTop:"3px"}}>
                                        Showmore
                                    </Imports.Typography>
                                    <ChevronRight />
                                </Imports.Grid>
                            </Imports.Grid>
                        ))}
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>
        </>
    );
}

export default ThingsComponent;
