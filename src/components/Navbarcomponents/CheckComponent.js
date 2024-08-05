import React from 'react'

const CheckComponent = () => {
  return (
    <>
    <Imports.Menu
        id="simple-checkin-menu"
          anchorEl={date} 
          keepMounted
          open={Boolean(date)}
          onClose={handleCloseCalender}
          PaperProps={{
            sx: {
              width: '800px',
              height:'auto',
              padding: '10px',
              borderRadius: '20px',
              marginTop: { xs: '100px' },
              position: 'absolute',
              zIndex: '10',
              marginLeft: { sm:"10px",md:"100px",lg: '340px' }
            },
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          
        >
          <Imports.IconButton className="close-icon-button" onClick={handleCloseCalender} justifyContent='right'>
            <Imports.Close fontSize="small" />
            </Imports.IconButton>

           
            {flexible ? (
             <FlexibleComponent handleDate={handleDate} handleMonths= {handleMonths} handleWeekParams={handleWeekParams} weekParam = {weekParam}/>
            ) :months ?(
              
              <Imports.Grid>
              <CircularProgressSlider handleDate={handleDate} handleFlexible={handleFlexible} handleSendMonthsToParent={handleSendMonthsToParent} handleMonthChange={handleMonthChange}/>
            </Imports.Grid>
            ):dateDate?( <Imports.Grid>
              <DateComponent handleMonths= {handleMonths} handleFlexible={handleFlexible} sendDatesToParent={handleDatesChange} />
            </Imports.Grid>):("")}
            
          
        </Imports.Menu>
    </>
  )
}

export default CheckComponent