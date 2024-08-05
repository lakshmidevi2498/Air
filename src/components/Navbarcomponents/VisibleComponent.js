import React, { useState,useCallback, useMemo,useEffect } from 'react';
import Imports from '../../commons/AllImports';

const VisibleComponent = React.memo(({  data, handleFocusChange, menuRegionData, handelVisible ,handleCountryOpen}) => {
  const [region, setRegion] = useState('');
const [countryOpen , setCountryOpen] = useState(true)
console.log("countryOpen in VisibleComponent",countryOpen)
  const maps = [
    { countryImg: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320', countryName: "I'm flexible" },
    { countryImg: "https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320", countryName: "Southeast Asia" },
    { countryImg: "https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320", countryName: "Thailand" },
    { countryImg: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320", countryName: "Europe" },
    { countryImg: "https://a0.muscache.com/im/pictures/ebc5a343-8b76-4ae5-8700-eb5e9cec9243.jpg?im_w=320", countryName: "Indonesia" },
    { countryImg: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320", countryName: "United States" },
  ];

  const handleGridClick = useCallback((country) => {
   console.log("country",country);
      console.log("vrfrgr",country.countryName); 
      const { countryName } = country; 
      setRegion(countryName);
      menuRegionData(countryName)
      handelVisible(false);
      handleFocusChange( false );
      handleCountryOpen(false)
      console.log("Region set to:", region);

  });

  useEffect(() => {
    console.log("Region updated to:", region);
    menuRegionData(region);
  },[]); 

  return (
    <Imports.Grid >
      <Imports.Menu
        id="simple-mennu"
        anchorEl={countryOpen}
        open={Boolean(countryOpen)}
        onClose={() => setCountryOpen(false)}
        PaperProps={{
          sx: {
            width: '370px',
            padding: '10px',
            borderRadius: '20px',
            marginTop: { xs: '150px',md:"170px" },
            position: 'absolute',
            zIndex: 1000,
            marginLeft: { xs: '40px',md:"60px",lg:"220px",xl:"280px" },
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Imports.Grid item xs={12} gap={2}>
          <Imports.Typography variant='h2' px={1.5} my={1}>Search by region</Imports.Typography>
          <Imports.Grid item container justifyContent='center'>
            {maps.map((country, index) => (
              <Imports.Grid key={index} item xs={4} display='flex' justifyContent='center' sx={{ padding: '5px', '&:hover': { backgroundColor: 'lightgray', borderRadius: '10px' } }} onClick={() => handleGridClick(country)}>
                <Imports.Box sx={{ display: 'block', alignItems: 'center', textAlign: 'center' }} >
                  <Imports.Box component='img' src={country.countryImg} alt={country.countryName} sx={{ width: '110px', height: 'auto', borderRadius: '8px', border: '1px solid lightgray' }} />
                  <Imports.Typography>{country.countryName}</Imports.Typography>
                </Imports.Box>
              </Imports.Grid>
            ))}
          </Imports.Grid>
        </Imports.Grid>
      </Imports.Menu>
    </Imports.Grid>
  );
});

export default VisibleComponent;

