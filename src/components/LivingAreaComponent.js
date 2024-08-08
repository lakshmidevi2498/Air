

import { useLocation, useNavigate } from 'react-router-dom';

import Imports from '../commons/AllImports';

const LivingAreaComponent = ({setAllImages,}) => {
    const navigate = useNavigate();
    
    const location = useLocation();
    const allImages = location.state?.allImages || [];
    const innerImgs = location.state?.innerImgs;
    console.log("location in living area component---->", location);
    console.log("showallimages--->", allImages);
    console.log("innerimages-->",innerImgs)

    const handleNavigateInnerProductsPage = () => {
        console.log("innerimages in allimages-->",innerImgs)
        navigate('/innerproducts',{state:{innerImgs}});
        // setAllImages(false)
    };


    

    if (!location.state) {
        console.error("location.state is null or undefined");
    } else if (!location.state.allImages) {
        console.error("location.state.allImages is null or undefined");
    }

    return (
        <Imports.Grid container justifyContent='center'>
            <Imports.Grid container sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <Imports.Grid item onClick={handleNavigateInnerProductsPage}>
                    <Imports.ChevronLeft />
                </Imports.Grid>
                <Imports.Grid item sx={{ display: 'flex' }} gap={2}>
                    <Imports.Grid item sx={{ display: 'flex' }} gap={1}>
                        <Imports.IosShareIcon fontSize='small' />
                        <Imports.Typography variant='h2' sx={{ fontWeight: 'medium', textDecoration: 'underline', display: { xs: 'none', sm: 'flex' } }}>
                            Share
                        </Imports.Typography>
                    </Imports.Grid>
                    <Imports.Grid item sx={{ display: 'flex' }} gap={1}>
                        <Imports.FavoriteIcon fontSize='small' />
                        <Imports.Typography variant='h2' sx={{ fontWeight: 'medium', textDecoration: 'underline', display: { xs: 'none', sm: 'flex' } }}>
                            Save
                        </Imports.Typography>
                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid item xs={12} md={8} my={4}>
  <Imports.Grid container spacing={1}>
    {allImages.map((image, index) => (
      <Imports.Grid item key={index} xs={12} sm={index % 3 === 0 ? 12 : 6}>
        <Imports.Box
          sx={{
            width: '100%',
            height: index % 3 === 0 ? 500 : 300, 
          }}
        >
          <img
            src={image.src}
            alt={`Image ${index}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 5,
            }}
          />
        </Imports.Box>
      </Imports.Grid>
    ))}
  </Imports.Grid>
</Imports.Grid>


        </Imports.Grid>
    );
};

export default LivingAreaComponent;










