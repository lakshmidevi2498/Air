import React, { useCallback, useEffect, useState } from 'react';
import Imports from '../commons/AllImports';
import { Close } from '@mui/icons-material';

const GuestDataComponent = React.memo(({  handleGuestCountInChild, handelGuestValue}) => {
  
  const [count, setCount] = useState(guestData);

  const handleCloseGuest = useCallback(() => {
    handelGuestValue(false);
  },[]);

  const handleIncrement = (index) => {
    const updatedGuestData = [...count];
    updatedGuestData[index].guestCount += 1;
    setCount(updatedGuestData);
  };

  const handleDecrement = (index) => {
    const updatedGuestData = [...count];
    if (updatedGuestData[index].guestCount > 0) {
      updatedGuestData[index].guestCount -= 1;
      setCount(updatedGuestData);
    }
  };

  const totalCount = count.reduce((total, guest) => total + guest.guestCount, 0);

  useEffect(() => {
    handleGuestCountInChild(totalCount);
    console.log("totalCount",totalCount)
  }, [totalCount, handleGuestCountInChild]);

  return (
    <>
  
        <Imports.IconButton className="close-icon-button" onClick={handleCloseGuest} justifyContent='right' sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Close fontSize="small" />
        </Imports.IconButton>
        <Imports.Grid xs={12} gap={2} padding='10px'>
          {count.map((guest, index) => (
            <Imports.Grid key={index}>
              <Imports.Grid item display='flex' justifyContent='space-between' mt={2}>
                <Imports.Grid>
                  <Imports.Typography variant='body1' sx={{ fontSize: '15px' }}>{guest.text1}</Imports.Typography><br />
                  <Imports.Typography variant='caption' sx={{ textDecoration: index === 3 ? 'underline' : 'none' }}>{guest.text2}</Imports.Typography>
                </Imports.Grid>
                <Imports.Grid display='flex' gap={2}>
                  <Imports.Button sx={{
                    border: '1px solid lightgray', borderRadius: '50%', display: 'flex', padding: '2px', width: '40px', color: 'lightgray',
                    height: '40px', alignItems: 'center', justifyContent: 'center', minWidth: '0'
                  }}
                    fontSize='xxl'
                    onClick={() => handleDecrement(index)}
                  ><Imports.RemoveIcon /></Imports.Button>
                  <Imports.Typography variant='h2' mt={1}>{guest.guestCount}</Imports.Typography>
                  <Imports.Button sx={{
                    border: '1px solid gray', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', padding: '2px', justifyContent: 'center', minWidth: 0, color: 'gray'
                  }}
                    onClick={() => handleIncrement(index)}
                  ><Imports.AddIcon /></Imports.Button>
                </Imports.Grid>
              </Imports.Grid>
              {index < 3 && <Imports.Divider sx={{ marginTop: '15px' }} />}
            </Imports.Grid>
          ))}
        </Imports.Grid>
    </>
  );
});
const guestData = [
  { text1: "Adults", text2: "Ages 13 or above", guestCount: 0 },
  { text1: "Children", text2: "Ages 2–12", guestCount: 0 },
  { text1: "Infants", text2: "Under 2", guestCount: 0 },
  { text1: "Pets", text2: "Bring A service Animal?", guestCount: 0 }
];


export default GuestDataComponent;
