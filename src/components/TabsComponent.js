import REACT from 'react'
import Tabs from './Tabs'
import  Imports from '../commons/AllImports' 
 const TabsComponent = () => {
    return(
       
          <Imports.Grid container className="sticky-container"mt={0}
           sx={{ display:{xs:"block",},justifyContent:"center", zIndex:9,backgroundColor:"white",borderTop:"1px solid lightgray",paddingX:{xs:"20px",sm:"40px",md:"50px",lg:"55px",xl:"75px"}}} 
         item  xs={12}>
                <Tabs 
                    prevTop={{ xs: '45%', sm: "49%", md: '50%', lg: '45%', xl: '45%' }}
                    prevLeft={{ xs: '9px', sm: '38px', md: '50px', lg: '58px',xl:'67px' }}
                    nextTop={{ xs: '45%', sm: "49%", md: '47%', lg: '45%', xl: '45%' }}
                    nextRight={{ xs: '10px', sm: '38px', md: '48px', lg: '60px', xl: '70px' }}
                    marginn={{xs:"10px"}}
                    breakpoints={{
                        1440: {
                            slidesPerView: 13,
                        },
                        1024: {
                            slidesPerView: 7,
                        },
                        769: {
                            slidesPerView: 5,
                        },
                        576: {
                            slidesPerView: 5,

                        },
                        426: {
                            slidesPerView: 5,

                        },
                        367:{
                            slidesPerView: 5,
                      },
                        320: {
                            slidesPerView: 4,

                        },
                    }}

                />
            </Imports.Grid>
      

        
    )
 }
 export default TabsComponent;